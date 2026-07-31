export type Work = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  cover?: string;
  featured?: boolean;
  requestDetails?: boolean;
  mdFile?: string;
  body?: string;
};

export const works: Work[] = [
  {
    slug: "voice-agent-eval",
    title: "Voice Agent Evaluation Framework",
    tag: "Agents · Evaluation · Current",
    year: "2026",
    featured: true,
    cover: "/images/covers/voice-agent.jpg",
    blurb:
      "Making sure support agents behave correctly before callers ever hear them — scenarios, automated checks, and live coverage.",
    body: `## What this is

I'm currently building a system that **tests voice and chat support agents** the way you'd want a QA suite for software — but for conversations.

When someone edits how an agent should handle a booking, a cancellation, or a parking question, the framework asks: does it still call the right tools? Does it fail gracefully on bad IDs? Does it refuse to invent a success message?

## What I'm doing day to day

- Turning high-level agent playbooks into **test conversations** (happy paths and messy ones)
- Running those conversations through **fast automated checks** and optional LLM judges
- Measuring whether the agent tools and API clients stay fully covered as the product moves
- Feeding results back so editors know a change is safe before it hits a real phone line

## Why it matters

Voice agents fail quietly. This work is about catching those failures early — so what ships is boringly reliable.

![Voice systems](/images/covers/voice-agent.jpg)
`,
  },
  {
    slug: "humanoid-leisaac",
    title: "Humanoid Teleop in Isaac Sim",
    tag: "Isaac Lab · IK · Path Planning",
    year: "2026",
    featured: true,
    cover: "/images/humanoid/teleop-v1-35.jpg",
    blurb:
      "Authoring pick-place scenes, solving IK for GR1T2 joints, and teleoperating reach-to-grasp trajectories.",
    body: `## The setup

I worked with **Fourier GR1T2** in **Isaac Sim / Isaac Lab** — building pick-and-place environments, wiring the humanoid into tasks, and driving it through **keyboard teleoperation** with Pinocchio-backed kinematics.

## Environment creation

Scenes were authored as Isaac Lab tasks:

- Spawn the humanoid, bins / containers, and graspable objects from env configs
- Inspect and debug the stage before teleop
- Add new objects through manager-based pick-place configs
- Enable **Pinocchio** so IK / FK stay consistent with the articulated model

## Inverse kinematics & joint motion

Teleop maps desired hand poses into **joint targets** through inverse kinematics — respecting limits, avoiding singularities, and keeping the grasp frame stable on approach.

## Path planning & teleoperation

Keyboard teleop was the outer loop: move toward the target, let the controller **plan a feasible joint path**, approach, grasp, lift, place — and compare that to parallel-jaw arms for sim-to-real intuition.

![Teleop — approach](/images/humanoid/teleop-v1-15.jpg)

![Teleop — reach](/images/humanoid/teleop-v1-35.jpg)

![Teleop — grasp](/images/humanoid/teleop-v1-55.jpg)

![Teleop — place](/images/humanoid/teleop-v1-80.jpg)

![Kitchen — approach](/images/humanoid/teleop-v2-15.jpg)

![Kitchen — mid path](/images/humanoid/teleop-v2-35.jpg)

![Kitchen — grasp](/images/humanoid/teleop-v2-55.jpg)

![Kitchen — retract](/images/humanoid/teleop-v2-80.jpg)
`,
  },
  {
    slug: "geak",
    title: "GEAK · AMD MI300X Kernels",
    tag: "GPU · HIP · Systems",
    year: "2026",
    featured: true,
    cover: "/images/covers/gpu-silicon.jpg",
    blurb:
      "Multi-agent GEMM optimization on AMD Instinct MI300X — up to 65× on transpose layouts, 5.24× geomean.",
    mdFile: "geak.md",
  },
  {
    slug: "abb-food-pipeline",
    title: "Food Pick-and-Place · Sim-to-Real",
    tag: "Robotics · Synthetic Data",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/covers/food-robot.jpg",
    blurb:
      "End-to-end synthetic data for robotic food picking — layouts, photoreal crates, depth, masks, and priority picks.",
    body: `## The story

Robots that pick food packs from crates need vision that understands **where each packet is**, how deep it sits, and which one to grab first. Collecting that by hand is slow.

I helped build a **sim-to-real pipeline** that goes from scene layouts to photoreal crate images to depth and instance masks — including a signal for the robot’s **priority pick**.

## What I owned (high level)

- Turning scene configs into physics-aware placements
- Generating training imagery and realism passes for packs in crates
- Depth and segmentation so each item is separable for grasping
- Closing the loop toward robot simulation

![Food robotics](/images/covers/food-robot.jpg)

![Pack assets](/images/food/toprika_chips.jpg)

## Want the deep dive?

Internal media, metrics, and architecture notes are **available on request** for recruiters and collaborators.
`,
  },
  {
    slug: "synd-realism",
    title: "Synthetic Assets & Realism Generation",
    tag: "3D · Generative",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/covers/synth-3d.jpg",
    blurb:
      "Blender corpora and generative realism so simulation assets look camera-ready without endless manual photoshoots.",
    body: `## The story

Simulation loves clean geometry. Robots need images that look like the real world. I worked on the bridge: **3D assets → generative realism → training-ready frames**.

## What I did

- Built and textured food / pack assets in Blender
- Ran realism passes so synthetic renders read as photographs
- Fed those frames into downstream LoRA and layout workflows

![Synthetic 3D](/images/covers/synth-3d.jpg)

![Blender work](/images/blender/asset-1.jpg)

## Want the deep dive?

Pipelines, prompts, and sample dumps are **available on request**.
`,
  },
  {
    slug: "quantization-systems",
    title: "Dynamic Quantization & Fast Inference",
    tag: "Inference · Systems",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/covers/quant.jpg",
    blurb:
      "Smarter per-layer quantization and CUDA/Numba kernels so quantized models stay accurate and actually run fast.",
    body: `## The story

Quantization is easy to claim and hard to ship. I worked on **choosing formats layer by layer** and rewriting the kernels that actually move tokens.

## What I focused on

- Dynamic schemas that beat naive one-size-fits-all quantization on quality benchmarks
- CUDA and Numba paths that make quantized inference practical
- Benchmarking so “faster” and “still correct” are both true

![Systems work](/images/covers/quant.jpg)

## Want the deep dive?

Methods, numbers, and artifacts are **available on request**.
`,
  },
  {
    slug: "scenesmith-cosmos-oscar",
    title: "Worlds, Scenes & Oscar Simulation",
    tag: "Simulation · Environment Gen",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/covers/world-gen.jpg",
    blurb:
      "Environment generation and Isaac Sim / Oscar runs that feed richer worlds into robot and vision pipelines.",
    body: `## The story

Policies and vision models need places to live. I worked on **building those places** — SceneSmith-style environment generation, Cosmos experiments, and Oscar + Isaac Sim manipulation runs.

## What that looked like

- Assembling scenes instead of hand-authoring every shelf and crate
- Exploring world-model style generation for downstream data
- Running Oscar demos and Isaac pick-place baselines in simulation

![World generation](/images/covers/world-gen.jpg)

![Simulation](/images/covers/sim-robot.jpg)

## Want the deep dive?

Experiment notes and media are **available on request**.
`,
  },
];

export type WritingPost = {
  slug: string;
  title: string;
  venue: string;
  authors: string;
  blurb: string;
  cover?: string;
  body: string;
};

export const writing: WritingPost[] = [
  {
    slug: "grpo-prompt-enhancement",
    title: "Enhancing Text-to-Image Prompts with GRPO",
    venue: "Dheyo AI · 2026",
    authors: "Varunika Naini, Aakash Varma Nadimpalli",
    cover: "/images/covers/prompt-gen.jpg",
    blurb:
      "Constraint-aware prompt enhancement with reinforcement learning — stronger negation, counts, and composition.",
    body: `## Overview

Text-to-image models reward verbose prompts, but expanders often **break explicit constraints**. This work frames prompt enhancement as a **GRPO** policy trained with structured visual feedback.

## Idea in brief

- Expand prompts with an RL policy instead of pure SFT
- Score generations against logical / spatial key points
- Optimize for constraint adherence, not just aesthetic detail

![Generative imagery](/images/covers/prompt-gen.jpg)

## Outcome

Output coherence rose about **70%** vs untuned baselines in our internal evals.

## Full PDF

Available on request.
`,
  },
  {
    slug: "lba-net",
    title: "LBA-Net: Boundary-Aware Self-Distillation",
    venue: "Medical & natural image benchmarks",
    authors: "Varunika Naini et al.",
    cover: "/images/covers/medical-vision.jpg",
    blurb:
      "Compact segmentation with a dual-branch boundary decoder and EMA self-distillation — strong mIoU at low FLOPs.",
    body: `## Overview

**LBA-Net** is a compact encoder–decoder with a boundary-attentive decoder and EMA self-distillation for sharp medical and natural-image segmentation.

![Medical vision](/images/covers/medical-vision.jpg)

## Highlights

- **91.86% mIoU** on THRS-RSNA at **13.88M** parameters
- Roughly **10× fewer FLOPs** than Swin-UNet across six benchmarks

## Full PDF

Available on request.
`,
  },
  {
    slug: "rdif",
    title: "RDIF: Radiomic-Guided Diffusion for Explainable Segmentation",
    venue: "IIITDM Kurnool · 2026",
    authors: "Varunika Naini, Ganesh Mani Kumar Ananthaneni",
    cover: "/images/covers/explain-ai.jpg",
    blurb:
      "Post-hoc XAI that fuses Integrated Gradient CAMs with radiomic texture gates via anisotropic diffusion.",
    body: `## Overview

**RDIF** makes segmentation explanations hug anatomy — radiomic texture cues guide diffusion of saliency maps so they stay clinically meaningful.

![Explainable AI](/images/covers/explain-ai.jpg)

## Highlights

- Large gains vs LayerCAM on clinic benchmarks
- Strong pointing-game alignment with ground-truth structure

## Full PDF

Available on request.
`,
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}

export function getWriting(slug: string) {
  return writing.find((r) => r.slug === slug);
}

export const research = writing;
export const getResearch = getWriting;
