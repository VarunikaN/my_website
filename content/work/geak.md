# GEAK · Faster GEMM on AMD Instinct

**MI300X · HIP · 5.24× geomean · up to 65× on the nasty layouts**

Matrix multiply is the quiet tax on every training step. On AMD Instinct, a naïve kernel was burning memory bandwidth like a bad habit — especially when matrices showed up transposed.

I used **GEAK** to hunt a better HIP kernel: tile into shared memory, keep registers busy, stop striding through DRAM like a tourist.

![Matrix compute](/images/geak/matrix-code.jpg)

The win was simple to feel: same answers, way less waiting. Transpose layouts that used to crawl suddenly looked normal.

![Systems](/images/geak/server-rack.jpg)

| Layout mood | Speedup vibe |
|---|---|
| transpose_b @ ~1024 | **~65×** |
| a_at @ ~1024 | **~63×** |
| standard @ ~1024 | **~4×** |

Correct on the full check suite. Next itch: matrix cores and leaner launches.
