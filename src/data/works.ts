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

export const works: Work[] = [
  {
    slug: "vaakya-eval",
    title: "Vaakya · Voice Agent Eval Framework",
    tag: "Agents · Evaluation · Current",
    year: "2026",
    featured: true,
    blurb:
      "AOP validation for production voice agents — markdown specs → JSON cases → deterministic tool smoke, LLM judges, and live API coverage.",
    body: `## What I'm building now

At Dheyo I'm working on **Vaakya** — a customer-support voice/chat stack — and specifically the **AOP validation framework** that keeps agent operating procedures honest after every create or edit.

AOPs (agent operating procedures) describe flows like cancellation, booking, or parking support. When someone changes an AOP in Weaver, we need to know it still calls the right tools, handles sad paths, and doesn't invent success.

## Pipeline

\`\`\`text
AOP markdown → generate.py → cases/<aop>/*.json
                              ├─ deterministic tool smoke
                              ├─ LLM judge (Anthropic Session or OpenCode)
                              └─ live Way coverage suite (100% on tools + client)
\`\`\`

1. **Generate** — turn AOP markdown into structured conversation cases (happy + sad moods, expected tool args, expected outputs).
2. **Deterministic** — replay tool turns from JSON against the agent tools; score the last tool \`output\`.
3. **LLM mode** — run user turns through a live session (Anthropic or OpenCode \`way-parking\` agent) and compare tools + outputs to the gold JSON.
4. **Coverage** — \`aop_suite.py\` drives contracts and live Way staging sequences so \`tools.py\` + \`way_client.py\` hit 100% line coverage (mock mode for CI without network).

## Why it matters

Voice agents fail quietly: wrong tool order, missing identity checks, hallucinated confirmations. This harness makes regressions visible before they hit Twilio callers — generate, pytest, optional LLM, coverage HTML under \`results/\`.

## Stack

Python · pytest · OpenCode agents · Anthropic · Way Decagon staging API · Vaakya Weaver/Operator UI
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
      "Authoring pick-place scenes in Isaac Sim, solving IK for GR1T2 joints, and teleoperating reach-to-grasp trajectories with path planning.",
    body: `## The setup

I worked with **Fourier GR1T2** in **Isaac Sim / Isaac Lab (LeIsaac)** — building pick-and-place environments, wiring the humanoid into manager-based tasks, and driving it through **keyboard teleoperation** with Pinocchio-backed kinematics.

The goal was not a demo gif. It was to understand how a high-DOF humanoid reaches, orients, and grasps when the scene, the joints, and the controller all have to agree.

## Environment creation in Isaac Sim

Scenes were authored as Isaac Lab tasks (\`Isaac-PickPlace-GR1T2-Abs-v0\` and kitchen variants):

- Spawn the GR1T2 USD, bins / KLT containers, and graspable objects via env configs (\`pickplace_gr1t2_env_cfg\`)
- Inspect and debug prims with scene inspection scripts before teleop
- Add new objects by extending the manager-based pick-place config rather than hand-hacking the stage every run
- Enable **Pinocchio** so IK / FK stay consistent with the articulated model

That pipeline — config → stage → teleop script — is how new props and targets entered the loop without breaking joint limits.

## Inverse kinematics & joint motion

Teleop does not send end-effector poses into the void. Commands map through **inverse kinematics** into joint targets:

- Desired wrist / hand pose in task space → IK solver → joint angles across the arm (and relevant torso DOFs)
- Joint trajectories must respect limits, avoid singularities, and keep the grasp frame stable as the hand approaches the object
- Absolute-pose task variants (\`Abs-v0\`) make the controller reason in Cartesian space while the plant still moves in joint space

Watching joint panels while teleoperating made failures obvious: elbow lock, over-rotation at the wrist, or a grasp that looked fine in camera but was out of reach for the kinematic chain.

## Path planning & teleoperation

Keyboard teleop (\`gr1t2_keyboard_teleop\`, kitchen teleop) was the outer loop:

1. Move the end-effector toward the target with incremental Cartesian / joint commands
2. Let the controller **plan a path** that interpolates through feasible joint configurations
3. Approach, align the grasp, close, lift, place
4. Compare that humanoid path to parallel-jaw arms (Franka / UR10) for sim-to-real intuition — more DOFs, more ways to fail, richer contact

Frames below are from teleop sessions — reach, hover, grasp, and place under Isaac Sim.

![Teleop — approach](/images/humanoid/teleop-v1-15.jpg)

![Teleop — reach](/images/humanoid/teleop-v1-35.jpg)

![Teleop — grasp alignment](/images/humanoid/teleop-v1-55.jpg)

![Teleop — place](/images/humanoid/teleop-v1-80.jpg)

![Kitchen teleop — approach](/images/humanoid/teleop-v2-15.jpg)

![Kitchen teleop — mid trajectory](/images/humanoid/teleop-v2-35.jpg)

![Kitchen teleop — grasp](/images/humanoid/teleop-v2-55.jpg)

![Kitchen teleop — retract](/images/humanoid/teleop-v2-80.jpg)

## Stack

Isaac Sim · Isaac Lab / LeIsaac · Pinocchio · GR1T2 · manager-based pick-place tasks · keyboard teleop

Related session media also lives in shared Drive galleries from the humanoid runs.
`,
  },
  {
    slug: "geak",
    title: "GEAK · AMD MI300X Kernels",
    tag: "GPU · HIP · Systems",
    year: "2026",
    featured: true,
    blurb:
      "Multi-agent GEMM optimization on AMD Instinct MI300X — LDS tiling, register micro-tiles, up to 65× on transpose layouts, 5.24× geomean.",
    mdFile: "geak.md",
  },
];

export type WritingPost = {
  slug: string;
  title: string;
  venue: string;
  authors: string;
  blurb: string;
  body: string;
};

/** Short overviews — full PDFs on request */
export const writing: WritingPost[] = [
  {
    slug: "grpo-prompt-enhancement",
    title: "Enhancing Text-to-Image Prompts with GRPO",
    venue: "Dheyo AI · 2026",
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
    blurb:
      "Compact segmentation with a dual-branch boundary decoder and EMA self-distillation — strong mIoU at low FLOPs.",
    body: `## Overview

**LBA-Net** is a MobileNetV2 encoder–decoder with a dual-branch boundary-attentive decoder and EMA-based self-distillation.

## Highlights

- **91.86% mIoU** on THRS-RSNA at **13.88M** parameters
- Roughly **10× fewer FLOPs** than Swin-UNet across six benchmarks
- +2.2% boundary IoU from the EMA teacher–student scheme

## Full PDF

Available on request. Related repo: [LBA-Net](https://github.com/VarunikaN/LBA-Net).
`,
  },
  {
    slug: "rdif",
    title: "RDIF: Radiomic-Guided Diffusion for Explainable Segmentation",
    venue: "IIITDM Kurnool · 2026",
    authors: "Varunika Naini, Ganesh Mani Kumar Ananthaneni",
    blurb:
      "Post-hoc XAI that fuses Integrated Gradient CAMs with radiomic texture gates via anisotropic diffusion.",
    body: `## Overview

**RDIF** seeds Integrated Gradient CAMs, gates them with radiomic texture cues (Gabor, LBP, GLCM), and diffuses with Perona–Malik anisotropy so saliency hugs anatomy.

## Highlights

- mIoU **0.556** on CVC-ClinicDB vs **0.036** for LayerCAM (~15×)
- Near-perfect Pointing Game scores on THRS Epiphysis and Montgomery

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

/** @deprecated alias */
export const research = writing;
export const getResearch = getWriting;
