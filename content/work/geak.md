# GEAK: Multi-Agent GEMM Kernel Optimization on AMD Instinct

**Task:** \`hip2hip/gemm\` · **Device:** AMD Instinct MI300X VF (gfx942, CDNA3, 304 CUs) · **Date:** July 2026

## What is GEAK?

GEAK is multi-agent GPU performance optimization for AMD Instinct MI GPUs. Driven by Claude Code and orchestrated by deterministic JS workflows, \`kernel_workflow/\` optimizes a single AMD GPU kernel — Triton, HIP, CK, FlyDSL, or any AMD GPU source.

**Director → TechLead → specialist engineers** (algorithm / memory / compute / host_runtime)

Each round is budget-controlled. Every patch is independently verified before it is accepted.

### Workflow

1. **Baseline profiling** — benchmark the naive kernel, identify bottlenecks
2. **Optimization** — engineers produce optimized kernels in parallel
3. **Verification** — compile, correctness check, and performance benchmark against baseline
4. **Selection** — pick the best-performing kernel by unweighted geomean speedup

---

## The baseline bottleneck

The naive FP32 GEMM computed \`C = A @ B\` (or \`A @ B.T\`) with one thread per output element, no data reuse, and no shared memory.

- **Zero data reuse** — arithmetic intensity ~0.25 FLOP/byte
- **Uncoalesced B loads** — in \`transpose_b\`, stride-K reads wasted ~16× DRAM traffic; \`transpose_b\` was **16× slower** than \`standard\` at the same shape
- **Runtime branch** — \`transpose_b\` as a runtime \`int\` inside the hot loop blocked specialization

---

## The winning kernel

Engineer 0 shipped an **LDS-tiled, register-blocked GEMM** with compile-time layout dispatch.

### LDS tiling with coalesced loads

Each block computes a 64×64 output tile. Per K-step, slabs of A and B are cooperatively staged into \`__shared__\` (LDS) with \`float4\` vectorized loads — fully coalesced regardless of layout.

### Register micro-tiling

Each thread computes a **4×4 micro-tile** (16 outputs). Within each K-step, 4-wide slices of A and B land in registers and accumulate all 16 outer-product FMAs.

### Compile-time layout dispatch

\`transpose_b\` became \`template<bool TRANSPOSED>\`. The launcher dispatches once; \`if constexpr\` kills the dead path.

### Bounds-checked fallback

Ragged shapes take a scalar fallback so correctness holds for arbitrary M, K, N without slowing the fast path.

| Parameter | Value | Why |
|---|---|---|
| BM, BN | 64 | Reuse vs CU saturation on 304 CUs |
| BK | 16 | LDS vs reuse depth |
| TM, TN | 4 | 16 outputs / thread |
| Threads/block | 256 | One thread per micro-tile |

---

## Results

| Shape (M,K,N) | Layout | Baseline | Optimized | Speedup |
|---|---|---|---|---|
| 1024,256,1024 | transpose_b | 1.342 ms | 0.021 ms | **65×** |
| 1024,256,1024 | a_at | 1.330 ms | 0.021 ms | **63×** |
| 512,512,512 | transpose_b | 0.723 ms | 0.031 ms | **24×** |
| 512,512,512 | a_at | 0.718 ms | 0.031 ms | **23×** |
| 256,512,256 | transpose_b | 0.173 ms | 0.030 ms | **5.7×** |
| 1024,256,1024 | standard | 0.083 ms | 0.021 ms | **4.0×** |
| 128,256,128 | transpose_b | 0.082 ms | 0.016 ms | **5.2×** |

**Geomean speedup: 5.24×** · Correctness: **39/39** cases pass (including ragged shapes and matmuls up to 4096×6144×12288).

---

## What I'd ship next

- **MFMA matrix cores** — scalar FMA today; FP32 MFMA for compute-bound large shapes
- **HIP-graph capture** — cut the ~0.014 ms launch floor on tiny shapes
- **Tile-size tuning** — 128×128 / 256×128 for bigger problems

*Built on AMD Instinct MI300X · ROCm 6+ · GEAK kernel_workflow*
