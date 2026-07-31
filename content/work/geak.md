# GEAK: Teaching AMD Instinct How to Multiply Faster

**Task:** `hip2hip/gemm` · **Device:** AMD Instinct MI300X (gfx942) · **Geomean:** 5.24× · **Peak:** 65×

## Catch line

**GEMM is the heartbeat of deep learning.** When the baseline kernel wastes DRAM on uncoalesced loads, every training step and every inference token pays the tax.

GEAK is a multi-agent workflow that profiles a naïve HIP GEMM, spins specialist “engineers,” verifies patches, and crowns a winner by geomean speedup — on real AMD Instinct silicon.

![Matrix compute](/images/geak/matrix-code.jpg)

## Why the naïve kernel hurt

One thread per output element. No LDS reuse. In `transpose_b`, adjacent threads strode through B with gap **K** — roughly **16× wasted DRAM traffic**. Same shape, `transpose_b` was ~16× slower than `standard`.

## What won

An **LDS-tiled, register-blocked** kernel with compile-time layout dispatch:

1. Cooperative `float4` loads into shared memory — coalesced for every layout  
2. 4×4 micro-tiles in registers — 16 FMAs reusing each LDS fetch  
3. `template<bool TRANSPOSED>` — no runtime branch in the hot loop  
4. Bounds-checked fallback for ragged shapes  

![Datacenter compute](/images/geak/server-rack.jpg)

## Scoreboard

| Shape | Layout | Baseline | Optimized | Speedup |
|---|---|---|---|---|
| 1024³-ish | transpose_b | 1.342 ms | 0.021 ms | **65×** |
| 1024 | a_at | 1.330 ms | 0.021 ms | **63×** |
| 512 | transpose_b | 0.723 ms | 0.031 ms | **24×** |
| 1024 | standard | 0.083 ms | 0.021 ms | **4.0×** |

**39/39** correctness cases. Next up: MFMA matrix cores and HIP-graph launch cuts.

*Built with GEAK kernel_workflow on ROCm 6+ / MI300X.*
