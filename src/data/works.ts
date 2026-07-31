export type Work = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  cover?: string;
  featured?: boolean;
  github?: string;
  mdFile?: string;
  body?: string;
};

/** Public technical write-ups (not confidential company IP) */
export const works: Work[] = [
  {
    slug: "geak",
    title: "GEAK · AMD MI300X Kernels",
    tag: "GPU · HIP · Systems",
    year: "2026",
    featured: true,
    cover: "/images/geak/speedup-chart.png",
    blurb:
      "Multi-agent GEMM optimization on AMD Instinct MI300X — LDS tiling, register micro-tiles, up to 65× on transpose layouts, 5.24× geomean.",
    mdFile: "geak.md",
  },
  {
    slug: "quantization-cuda-numba",
    title: "Dynamic Quantization · CUDA & Numba",
    tag: "Inference · Systems",
    year: "2025–26",
    featured: true,
    cover: "/images/geak/latency-compare.png",
    blurb:
      "Per-layer quantization schemas beating Unsloth by 2–4%, plus CUDA/Numba rewrites for ~11,000× faster quantized LLM inference.",
    github: "https://github.com/VarunikaN/Quantization-Benchmarking",
    body: `## Two threads

1. **Smarter quantization** — a pipeline that picks the optimal quantization schema **per layer**, outperforming Unsloth dynamic quantization by **2–4%** on benchmark scores (LIM / BAQ explorations, Hugging Face hosted models).
2. **Faster kernels** — CUDA and Numba rewrites that accelerated quantized LLM inference on the order of **~11,000×**, with throughput parity to GGUF-class models across five tasks.

## Why it matters

Not just “we quantized it” — **which layers**, **which format**, and **kernels that actually move tokens**.

## Related repos

- [Quantization-Benchmarking](https://github.com/VarunikaN/Quantization-Benchmarking)
- [Benchmarking](https://github.com/VarunikaN/Benchmarking)
`,
  },
  {
    slug: "humanoid-leisaac",
    title: "Humanoid Pick-Place · LeIsaac",
    tag: "Isaac Lab · Humanoids",
    year: "2026",
    featured: true,
    cover: "/images/humanoid/gr1t2-pickplace.jpg",
    blurb:
      "GR1T2 humanoid pick-and-place in Isaac Lab / LeIsaac — teleop, scene inspection, and sim-to-real generalization studies.",
    body: `## Goal

Get a humanoid (GR1T2) to pick objects in simulation and understand how that compares to parallel-jaw arms for sim-to-real.

## What I did

- LeIsaac + Isaac Lab teleop (\`gr1t2_keyboard_teleop\`, kitchen teleop)
- Scene inspection / debug scripts for pick-place configs
- Compared gripper vs humanoid manipulation for transfer

![GR1T2 pick-place](/images/humanoid/gr1t2-pickplace.jpg)

![Scene setup](/images/humanoid/gr1t2-scene.jpg)

## Stack

Isaac Sim, Isaac Lab Arena, LeIsaac, pinocchio-enabled tasks.
`,
  },
];

export type ResearchPost = {
  slug: string;
  title: string;
  venue: string;
  authors: string;
  blurb: string;
  body: string;
};

/** Short overviews — full white papers / reports on request */
export const research: ResearchPost[] = [
  {
    slug: "grpo-prompt-enhancement",
    title: "Enhancing Text-to-Image Prompts with GRPO",
    venue: "White paper · Dheyo AI · 2026",
    authors: "Varunika Naini, Aakash Varma Nadimpalli",
    blurb:
      "Constraint-aware prompt enhancement with reinforcement learning — stronger negation, counts, and composition.",
    body: `## Overview

Text-to-image models reward verbose prompts, but expanders often **break explicit constraints** (“no scallions”, “exactly four dogs”). This work frames prompt enhancement as a **GRPO** policy trained with structured visual feedback.

## Idea in brief

- Expand prompts with an RL policy instead of pure SFT
- Score generations against a taxonomy of logical / spatial key points
- Optimize for constraint adherence, not just aesthetic detail

## Outcome

Output coherence rose about **70%** vs untuned baselines in our internal evals. Compositional and count-based requirements held up better than supervised expanders.

## Full white paper

**Available on request** — email me if you're hiring or collaborating and want the PDF.
`,
  },
  {
    slug: "lba-net",
    title: "LBA-Net: Boundary-Aware Self-Distillation",
    venue: "Research · Medical & Natural Image Benchmarks",
    authors: "Varunika Naini et al.",
    blurb:
      "Compact segmentation with a dual-branch boundary decoder and EMA self-distillation — strong mIoU at low FLOPs.",
    body: `## Overview

**LBA-Net** is a MobileNetV2 encoder–decoder with a dual-branch boundary-attentive decoder and EMA-based self-distillation. The goal: sharp boundaries without a heavy external teacher.

## Highlights

- **91.86% mIoU** on THRS-RSNA at **13.88M** parameters
- Roughly **10× fewer FLOPs** than Swin-UNet while matching or beating ARAA-Net, CaraNet, and Swin-UNet across six medical and natural-image benchmarks
- +2.2% boundary IoU from the EMA teacher–student scheme vs the unregularized baseline

## Full paper / code write-up

**Available on request.** Related public repo: [LBA-Net](https://github.com/VarunikaN/LBA-Net).
`,
  },
  {
    slug: "rdif",
    title: "RDIF: Radiomic-Guided Diffusion for Explainable Segmentation",
    venue: "BTech Project · IIITDM Kurnool · 2026",
    authors: "Varunika Naini, Ganesh Mani Kumar Ananthaneni",
    blurb:
      "Post-hoc XAI that fuses Integrated Gradient CAMs with radiomic texture gates via anisotropic diffusion.",
    body: `## Overview

**RDIF** is a post-hoc explainability framework for medical segmentation. It seeds Integrated Gradient CAMs, gates them with radiomic texture cues (Gabor, LBP, GLCM), and diffuses with Perona–Malik anisotropy so saliency hugs anatomy instead of blobbing.

## Highlights

- RDIF CAM reaches **mIoU 0.556** on CVC-ClinicDB vs **0.036** for LayerCAM (~15×)
- Near-perfect Pointing Game scores on THRS Epiphysis and Montgomery
- Pearson alignment with ground-truth structure far above GradCAM baselines in our study

## Full report

**Available on request** for recruiters, examiners, and collaborators.
`,
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function getResearch(slug: string) {
  return research.find((r) => r.slug === slug);
}
