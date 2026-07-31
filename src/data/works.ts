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
      "Catch broken support flows before a human ever dials in — scenarios, automated checks, live coverage.",
    body: `## The pitch

Voice agents fail quietly. A wrong tool call, a hallucinated confirmation, a sad-path that never got tested — and the caller only hears “sorry.”

I'm building the harness that asks the uncomfortable questions **before** the phone rings.

## What it does

When someone edits how an agent should handle a booking, cancellation, or parking question, the framework turns that playbook into **test conversations** — happy paths and messy ones — then runs them through fast automated checks and optional LLM judges.

## What I'm doing

- Writing scenario generators from agent playbooks
- Scoring tool use and outputs against gold expectations
- Keeping live API coverage honest as the product moves
- Closing the loop so editors know a change is safe to ship

![Listening systems](/images/covers/voice-agent.jpg)
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
      "Author the scene. Solve the joints. Teleop the grasp. Path planning for GR1T2 that respects real kinematics.",
    body: `## Catch line

**Robots don't move in pixels — they move in joint space.**

I wired Fourier **GR1T2** into Isaac Sim / Isaac Lab, authored pick-place worlds, and drove reach-to-grasp with keyboard teleop on Pinocchio-backed IK.

## Environment → IK → path

- Spawn humanoid, bins, and graspables from manager-based configs
- Map wrist poses into joint targets without blowing limits or singularities
- Interpolate feasible trajectories: approach, align, close, lift, place

Frames from the teleop sessions:

![Approach](/images/humanoid/teleop-v1-15.jpg)

![Reach](/images/humanoid/teleop-v1-35.jpg)

![Grasp](/images/humanoid/teleop-v1-55.jpg)

![Place](/images/humanoid/teleop-v1-80.jpg)

![Kitchen approach](/images/humanoid/teleop-v2-15.jpg)

![Kitchen mid-path](/images/humanoid/teleop-v2-35.jpg)

![Kitchen grasp](/images/humanoid/teleop-v2-55.jpg)

![Kitchen retract](/images/humanoid/teleop-v2-80.jpg)
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
      "When transpose layouts waste 16× DRAM, rewrite the kernel — 65× peaks, 5.24× geomean on MI300X.",
    mdFile: "geak.md",
  },
  {
    slug: "abb-food-pipeline",
    title: "SynD · From 2D Photos to Robot Data",
    tag: "Robotics · Synthetic Data",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/food/results/biscuits-rgb.jpg",
    blurb:
      "Building simulation datasets used to take weeks. SynD cuts that down to a prompt — RGB, depth, masks, normals, live sim.",
    body: `## Catch line

_Building simulation datasets used to take weeks of manual work. We cut that down to a prompt._

You have a product. You want a robot to pick it up. Before that robot can learn anything, someone has to build the dataset: thousands of annotated images — every angle, every orientation, every realistic scene.

**SynD** flips that. Give it **two reference photos** and a plain-English scene description. It returns RGB renders, depth maps, instance masks, and surface normals — plus a physics-ready environment for simulators like Isaac Sim.

## What you bring

Two faces of the product (front / back) and a prompt like:

> Drop 25 objects randomly into the crate… objects near the centre should lie flat…

![Reference front](/images/food/results/ref-front.jpg)

![Reference back](/images/food/results/ref-back.jpg)

## What you get

The four annotations perception and 6D pose actually need:

**RGB** — photoreal crates with natural stacking  
**Depth** — per-pixel depth that resolves walls and packs  
**Masks** — clean instances for graspable objects  
**Normals** — approach angles for each visible face

### ParVida biscuits — dense layout

![Biscuits RGB](/images/food/results/biscuits-rgb.jpg)

![Biscuits depth](/images/food/results/biscuits-depth.jpg)

![Biscuits masks](/images/food/results/biscuits-mask.jpg)

![Biscuits normals](/images/food/results/biscuits-normals.jpg)

### Toprika chips — wall lean

![Chips RGB](/images/food/results/chips-rgb.jpg)

![Chips depth](/images/food/results/chips-depth.jpg)

![Chips masks](/images/food/results/chips-mask.jpg)

![Chips normals](/images/food/results/chips-normals.jpg)

## Not just a dataset — a live sim

The same run that paints the crate injects poses into the physics engine. No separate placement step. Prompt → annotated data → interactive world.

## Want more?

Full write-up media, prompts, and pipeline notes are **available on request**.
`,
  },
  {
    slug: "quantization-systems",
    title: "Dheyo Dynamic Quantization",
    tag: "Inference · Reasoning Models",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/quant/gpqa_pass1_benchmark.jpg",
    blurb:
      "Smaller DeepSeek-R1 distill GGUFs that still reason — Dheyo baseline hits 31.8% GPQA vs Unsloth Q8's 18.2%.",
    body: `## Catch line

**Compress the model. Keep the brain.**

I worked on **Dheyo dynamic quantization** for \`DeepSeek-R1-Distill-Qwen-1.5B\` — shipping GGUF variants on Hugging Face that sit in the accuracy–size sweet spot.

## The cast

| Model | GPQA Diamond | Math500 | Size |
|---|---|---|---|
| Full BF16 DeepSeek | 33.8% | 83.9% | 3.39 GB |
| **Dheyo baseline** | **31.82%** | 79.8% | 1.74 GB |
| **Dheyo pct5** | 28.28% | 80.2% | 1.57 GB |
| Unsloth Q8_0 | 18.19% | 81.4% | 1.89 GB |
| Unsloth Q5_K_M | 19.7% | 76.8% | 1.29 GB |

Dheyo baseline posts the **highest GSM8K (78.92%)** among compared variants and crushes Unsloth Q8 on factual GPQA despite being smaller.

![GPQA vs size](/images/quant/gpqa_pass1_benchmark.jpg)

![Math500 vs size](/images/quant/math500_pass1_benchmark.jpg)

![GSM8K](/images/quant/gsm8k_benchmark.jpg)

![AIME cons@64](/images/quant/aime_cons_64_benchmark_plot.jpg)

## Why it matters

Quantization that only wins on size is a party trick. These runs show you can keep **reasoning benchmarks** alive while cutting memory nearly in half.

Models live on Hugging Face under **DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF**.

## Want more?

Training recipes and deeper ablations are **available on request**.
`,
  },
  {
    slug: "oscar-cosmos",
    title: "OSCAR & Cosmos · Sim Video Experiments",
    tag: "World Models · Isaac Sim",
    year: "2026",
    featured: true,
    requestDetails: true,
    cover: "/images/oscar/frame-2.jpg",
    blurb:
      "Skeleton-controlled robot video with OSCAR, then Cosmos world-gen from Isaac Sim renders — physics first, pixels second.",
    body: `## Catch line

**Don't fake the joints. Fake the camera.**

I ran experiments on **OSCAR-2B** and **NVIDIA Cosmos** to see how far world models can dress up *physically valid* robot motion without inventing impossible physics.

## OSCAR — skeleton in, video out

OSCAR needs two things at inference:

1. An **input frame** of the robot
2. A **2D skeleton control video** of the motion

The skeleton pipeline projects real joint trajectories (Panda angles, gripper openness, camera intrinsics/extrinsics) into a Forge-style 2D skeleton. Then OSCAR follows that control across backgrounds — bun pickups, conveyor belts, kitchen cuts, mesh bins.

![OSCAR output frame](/images/oscar/frame-1.jpg)

![OSCAR mid action](/images/oscar/frame-2.jpg)

![OSCAR place](/images/oscar/frame-3.jpg)

### What worked

- Joint / skeleton tracking stays faithful
- Simple pickups (paper, chips, bun) look decent

### What broke

- **Drop physics** after release are often wrong
- Skeleton gen today is Panda + Robotiq — other robots need custom renderers
- LLMs can't invent accurate joint trajectories; kinematics must come from a simulator

### My proposal

Use **Isaac Sim** for physically valid motion. Use OSCAR as a **visual realism layer** on top — same trajectory, many lightings / assets / backgrounds. Not a physics replacement. A sim-to-real video amplifier.

## Cosmos — Isaac render → world video + actions

With Cosmos I conditioned on Isaac Sim renders (UR10 and Franka scenes) plus carefully worded prompts that insist cubes stay **rigid** (melting cubes were a real failure mode).

Outputs: photoreal-ish videos **and** action JSON (10D EE pose + gripper for Franka) that can be replayed with IK (RMPFlow) back in sim.

![UR10 Cosmos conditioning](/images/cosmos/ur10-input.jpg)

![Franka Isaac scene](/images/cosmos/franka-input.jpg)

### Lesson

Building a scene *from* Cosmos video alone is hard — object poses are unknown. The winning loop was:

**Isaac Sim scene → render → Cosmos video + action JSON → IK replay**

Physics stays upstream. Generation stays downstream.

## Want more?

Experiment notes, videos, and the OSCAR proposal PDF are **available on request**.
`,
  },
  {
    slug: "synd-realism",
    title: "Asset Realism & Pack Generation",
    tag: "3D · Generative",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/food/toprika_chips.jpg",
    blurb:
      "Blender packs and generative realism so synthetic crates look camera-ready — the visual half of SynD.",
    body: `## Catch line

**Simulators eat geometry. Robots eat pixels.**

I built and textured food packs, then ran realism passes so Blender renders read as photographs before they enter the SynD / pick-place stack.

![Toprika pack](/images/food/toprika_chips.jpg)

![Container reference](/images/food/container.jpg)

![Blender asset](/images/blender/asset-1.jpg)

![Asset detail](/images/blender/asset-3.jpg)

## Want more?

Asset pipelines and sample dumps are **available on request**.
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
      "When prompt expanders add scallions you never asked for — GRPO teaches constraints to stick.",
    body: `## Overview

Text-to-image models reward verbose prompts, but expanders often **break explicit constraints**. This work frames prompt enhancement as a **GRPO** policy trained with structured visual feedback.

![Generative imagery](/images/covers/prompt-gen.jpg)

## Outcome

Output coherence rose about **70%** vs untuned baselines.

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
      "Tiny encoder. Sharp boundaries. 91.86% mIoU without dragging Swin-UNet's FLOPs.",
    body: `## Overview

**LBA-Net** is a compact encoder–decoder with a boundary-attentive decoder and EMA self-distillation.

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
      "Saliency that hugs anatomy — radiomics guide the diffusion so explanations stop blobbing.",
    body: `## Overview

**RDIF** fuses Integrated Gradient seeds with radiomic texture gates and anisotropic diffusion.

![Explainable AI](/images/covers/explain-ai.jpg)

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
