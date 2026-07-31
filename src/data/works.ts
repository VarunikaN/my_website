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
  externalUrl?: string;
};

export const works: Work[] = [
  {
    slug: "voice-agent-eval",
    title: "Voice Agent Evaluation Framework",
    tag: "Agents · Guardrails · Eval · Current",
    year: "2026",
    featured: true,
    cover: "/images/voice/call-headset.jpg",
    blurb:
      "Before the phone rings: scenario tests, guardrail red-teams, and LLM judges that catch bad handoffs and hallucinated success.",
    body: `## Catch line

**Ship the call only after the eval says yes.**

I'm building the QA layer for production voice / chat support agents — the thing that answers: *if we change this procedure, will callers still get a correct, safe outcome?*

![Support calls](/images/voice/call-headset.jpg)

## What the framework does

Agent operating procedures (bookings, cancellations, parking help, …) get turned into **test conversations** — happy paths and messy ones. Those cases run through:

- **Deterministic tool smoke** — did the agent call the right tools with the right args?
- **LLM judges** — for fuzzy dialogue where tools alone aren't enough
- **Live API coverage** — so client code can't silently rot

![Debugging agent behavior](/images/voice/debug-code.jpg)

## Guardrails (the spicy part)

Eval isn't only “did booking work?” It's also **what the agent must refuse**.

Guardrail cases are generated from injection / abuse prompts and marked as LLM-judged scenarios. They probe things like:

- Prompt injection (“ignore your procedure and…”)
- Attempts to exfiltrate tools / system instructions
- Requests outside the AOP (payments, unrelated domains)
- Pressure to invent confirmations or skip identity checks

Shared session context encodes handoff rules, **guardrails**, and spoken TTS style so replies stay plain English — because a phone TTS engine will read whatever you emit, markdown and all.

![QA & checklists](/images/voice/qa-checklist.jpg)

## Why recruiters should care

Voice agents fail quietly. This work makes regressions loud — before Twilio, before a human hears “sorry, I can't help,” before a bad refund path ships.

![Real conversations](/images/voice/phone-support.jpg)
`,
  },
  {
    slug: "humanoid-leisaac",
    title: "Humanoid Teleop in Isaac Sim",
    tag: "Isaac Lab · Teleop · IK",
    year: "2026",
    featured: true,
    cover: "/images/humanoid/teleop-v1-35.jpg",
    blurb:
      "Keyboard teleop that moves a target frame — IK turns your intent into joint angles the humanoid can actually hit.",
    body: `## Catch line

**You don't teleop joints. You teleop a dream pose — IK does the math.**

In Isaac Lab / LeIsaac-style stacks, keyboard (and leader-arm) teleoperation is usually **target-frame control**: keys nudge the gripper link's pose in Cartesian space; the controller solves **inverse kinematics** into joint commands that respect limits.

That design shows up in the LeIsaac device docs — translation and rotation map to the target frame so operators think in “where should the hand go?” instead of “what should joint 4 be?”

![Reach](/images/humanoid/teleop-v1-15.jpg)

## Robots in the loop

I spent time with:

- **Fourier GR1T2** humanoid pick-place in Isaac (\`Isaac-PickPlace-GR1T2-Abs-v0\` style tasks, Pinocchio-enabled)
- Comparisons to **Franka / UR10** parallel-jaw arms — fewer DOFs, cleaner IK, different contact stories
- Scene authoring: bins, graspables, kitchen / warehouse props via manager-based env configs

![Grasp alignment](/images/humanoid/teleop-v1-35.jpg)

## Path planning, not button mashing

Teleop is the outer loop; inside it:

1. Command a new EE / wrist pose  
2. IK → joint targets  
3. Interpolate a feasible path (avoid singularities, keep the grasp frame stable)  
4. Approach → close → lift → place  

Watching joint panels while teleoping makes failures obvious: elbow lock, wrist flip, a grasp that looks fine in the camera but is kinematically unreachable.

![Close the grasp](/images/humanoid/teleop-v1-55.jpg)

![Place](/images/humanoid/teleop-v1-80.jpg)

## Kitchen / clutter scenes

Same stack, harder geometry — more clutter, tighter approaches, same IK contract.

![Kitchen approach](/images/humanoid/teleop-v2-15.jpg)

![Kitchen mid-path](/images/humanoid/teleop-v2-35.jpg)

![Kitchen grasp](/images/humanoid/teleop-v2-55.jpg)

![Kitchen retract](/images/humanoid/teleop-v2-80.jpg)
`,
  },
  {
    slug: "geak",
    title: "GEAK · AMD MI300X Kernels",
    tag: "GPU · HIP · GEMM",
    year: "2026",
    featured: true,
    cover: "/images/geak/amd-chip.jpg",
    blurb:
      "Naïve GEMM wasted 16× DRAM on transpose layouts. GEAK's tiled HIP kernel hit 65× peaks on Instinct MI300X.",
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
      "Two product photos + a prompt → RGB, depth, masks, normals, and a physics-ready crate.",
    body: `## Catch line

_Building simulation datasets used to take weeks. We cut that down to a prompt._

**SynD** takes front/back product photos and a plain-English scene description, then returns annotated robot-training data plus a loadable sim world.

![Reference front](/images/food/results/ref-front.jpg)

![Reference back](/images/food/results/ref-back.jpg)

## Outputs that matter for grasping

![Biscuits RGB](/images/food/results/biscuits-rgb.jpg)

![Depth](/images/food/results/biscuits-depth.jpg)

![Masks](/images/food/results/biscuits-mask.jpg)

![Normals](/images/food/results/biscuits-normals.jpg)

Chips packs with wall-lean tilts:

![Chips RGB](/images/food/results/chips-rgb.jpg)

![Chips depth](/images/food/results/chips-depth.jpg)

![Chips masks](/images/food/results/chips-mask.jpg)

![Chips normals](/images/food/results/chips-normals.jpg)

## Want more?

Full pipeline notes and media are **available on request**.
`,
  },
  {
    slug: "quantization-systems",
    title: "Dynamic Quantization",
    tag: "Inference · LIM · BAQ",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/quant/gpqa_pass1_benchmark.jpg",
    externalUrl: "https://huggingface.co/DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF",
    blurb:
      "Layer-wise dynamic formats (LIM + BAQ explorations) — GGUFs that keep reasoning while cutting memory nearly in half.",
    body: `## Catch line

**Compress the model. Keep the brain.**

Dynamic quantization shouldn't be “one bit-width to rule them all.” I worked on **per-layer / per-block** choices so sensitive layers keep precision while others shrink.

## LIM & BAQ

Two threads that shaped the approach:

- **LIM (Layer Importance Metric)** — score how much each layer hurts when quantized, so the allocator protects the layers that actually move reasoning quality.
- **BAQ (Block-Aware Quantization)** — quantize with block structure in mind instead of flattening every tensor the same way; better fit for transformer blocks under tight memory budgets.

Together with CUDA/Numba-oriented serving work, that led to compact **GGUF** variants of DeepSeek-R1-Distill-Qwen-1.5B.

## Numbers that stuck

| Model | GPQA Diamond | Math500 | Size |
|---|---|---|---|
| Full BF16 | 33.8% | 83.9% | 3.39 GB |
| **Dheyo baseline** | **31.82%** | 79.8% | 1.74 GB |
| **Dheyo pct5** | 28.28% | 80.2% | 1.57 GB |
| Unsloth Q8_0 | 18.19% | 81.4% | 1.89 GB |

Baseline also posts the **highest GSM8K (78.92%)** among the compared set.

![GPQA sweet spot](/images/quant/gpqa_pass1_benchmark.jpg)

![Math500](/images/quant/math500_pass1_benchmark.jpg)

![GSM8K](/images/quant/gsm8k_benchmark.jpg)

![AIME](/images/quant/aime_cons_64_benchmark_plot.jpg)

## Hosted models

GGUF releases: [DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF](https://huggingface.co/DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF)

## Want more?

Training recipes and ablations are **available on request**.
`,
  },
  {
    slug: "oscar-sim-video",
    title: "OSCAR · Skeleton-Controlled Robot Video",
    tag: "World Models · Sim-to-Real Video",
    year: "2026",
    featured: true,
    requestDetails: true,
    cover: "/images/oscar/frame-2.jpg",
    blurb:
      "Feed OSCAR a frame + 2D skeleton from real joint trajectories — get robot video that follows the motion, then stress-test drop physics.",
    body: `## Catch line

**Don't invent the joints. Project them. Then dress the pixels.**

I ran **OSCAR-2B** experiments where inference takes:

1. An RGB frame of the robot  
2. A **2D skeleton control video** projected from real joint trajectories (Panda angles, gripper openness, camera intrinsics/extrinsics)

![OSCAR result](/images/oscar/frame-0.jpg)

![Following the skeleton](/images/oscar/frame-1.jpg)

![Mid action](/images/oscar/frame-2.jpg)

![Late frame](/images/oscar/frame-mid.jpg)

![Place / release](/images/oscar/frame-3.jpg)

![Final](/images/oscar/frame-late.jpg)

## What I learned

- Skeleton tracking of robot motion is strong  
- Simple pickups look decent  
- **Drop physics after release** are the weak spot  
- Accurate trajectories must come from a simulator (Isaac), not an LLM  

**Proposal:** Isaac Sim owns physics-valid motion; OSCAR is a visual realism layer for many backgrounds / assets on the same trajectory.

## Want more?

Experiment notes and the OSCAR proposal write-up are **available on request**.
`,
  },
  {
    slug: "cosmos-experiments",
    title: "Cosmos · Isaac Renders to World Video",
    tag: "World Models · Action JSON",
    year: "2026",
    featured: true,
    requestDetails: true,
    cover: "/images/cosmos-results/franka-1.jpg",
    blurb:
      "Condition Cosmos on Isaac Sim renders + rigid-body prompts — get video and 10D action JSON you can IK-replay.",
    body: `## Catch line

**Physics upstream. Pixels downstream.**

With **NVIDIA Cosmos** I conditioned on Isaac Sim renders (UR10 and Franka) and prompts that insist objects stay **rigid** — melting cubes were a real failure mode until seeds/prompts were fixed.

## Result frames (from experiment videos)

### UR10 pick → bin

![UR10 result A](/images/cosmos-results/ur10-0.jpg)

![UR10 result B](/images/cosmos-results/ur10-1.jpg)

![UR10 result C](/images/cosmos-results/ur10-2.jpg)

### Franka Isaac scene → Cosmos

![Franka A](/images/cosmos-results/franka-0.jpg)

![Franka B](/images/cosmos-results/franka-1.jpg)

![Franka C](/images/cosmos-results/franka-2.jpg)

### Additional outputs

![Output A](/images/cosmos-results/out-0.jpg)

![Output B](/images/cosmos-results/out-1.jpg)

![Output C](/images/cosmos-results/out-2.jpg)

![Result still](/images/cosmos-results/result-1.jpg)

![Result still 2](/images/cosmos-results/result-2.jpg)

## The useful loop

Building a scene *from* Cosmos video alone is hard — initial object poses are unknown. The working recipe:

**Isaac Sim scene → render → Cosmos video + action JSON → RMPFlow IK replay**

Action outputs encode EE pose deltas + gripper (10D for Franka-style embodiments).

## Want more?

Payloads, action dumps, and longer clips are **available on request**.
`,
  },
  {
    slug: "synd-realism",
    title: "Blender Asset Creation for Sim",
    tag: "3D · Isaac · Assets",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/blender-flow/step-5.jpg",
    blurb:
      "SAM3D → Blender re-texture & UV → export USD/GLB → light it in Isaac Sim. Packs that robots can actually see.",
    body: `## Catch line

**A snack packet isn't a dataset until the UVs tell the truth.**

I built simulation-ready food / pack assets with a three-step pipeline from my asset notes:

### 1. 2D → mesh (SAM3D)

Mask the product photo, generate a GLB mesh.

![SAM3D mesh](/images/blender-flow/step-1.jpg)

### 2. Re-texture in Blender

Import GLB, wipe the bad texture, bind the real PNG, UV unwrap (\`Project from View\`), scale the mesh so the print isn't stretched, preview in Material mode, export USD/GLB.

![Import & shade](/images/blender-flow/step-2.jpg)

![Texture swap](/images/blender-flow/step-3.jpg)

![UV fit](/images/blender-flow/step-4.jpg)

![Material preview](/images/blender-flow/step-5.jpg)

### 3. Drop into Isaac Sim

Open the USD, tune lighting, confirm the pack reads correctly under sim cameras.

![In Isaac Sim](/images/blender-flow/step-6.jpg)

![Lit for capture](/images/blender-flow/step-7.jpg)

Those assets feed SynD / pick-place crates — geometry with honest textures beats floating low-fid stand-ins every time.

## Want more?

Step-by-step notes and more exports are **available on request**.
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
    venue: "White paper · 2026",
    authors: "Varunika Naini",
    cover: "/images/grpo/fig-001.jpg",
    blurb:
      "Prompt expanders add scallions you never asked for. GRPO ties expansion to visual constraint checks.",
    body: `## Overview

Text-to-image models love detailed prompts — but automatic enhancers often **break explicit constraints** (negation, exact counts, materials). I built a **GRPO** (Group Relative Policy Optimization) pipeline that scores generated images against a taxonomy of logical / spatial keypoints and trains the enhancer to obey them.

![Constraint-satisfying generations](/images/grpo/fig-001.jpg)

## How it works

1. **SFT** a lightweight LM to expand prompts  
2. Generate images from those prompts  
3. Extract keypoints from the user concept; a VLM verifies each in the image  
4. **GRPO** optimizes the policy with a compositional reward (keypoint adherence + fidelity + descriptiveness) and penalties for low correctness  

![Method figure](/images/grpo/fig-003.jpg)

![Pipeline / taxonomy](/images/grpo/p-02.jpg)

## Qualitative wins

Examples from the paper — negation, numeracy, shape, materials:

![Sample grid A](/images/grpo/fig-004.jpg)

![Sample grid B](/images/grpo/fig-005.jpg)

![Sample grid C](/images/grpo/fig-006.jpg)

![Sample grid D](/images/grpo/fig-007.jpg)

![More results](/images/grpo/fig-017.jpg)

![More results](/images/grpo/fig-019.jpg)

## Full PDF

Available on request.
`,
  },
  {
    slug: "lba-net",
    title: "LBA-Net: Boundary-Aware Self-Distillation",
    venue: "Semantic segmentation research",
    authors: "Varunika Naini",
    cover: "/images/lbanet/p-01.jpg",
    blurb:
      "A compact MobileNetV2 encoder–decoder with boundary attention and EMA self-distillation — high mIoU, low FLOPs.",
    body: `## Overview

**LBA-Net** targets efficient semantic segmentation with sharp boundaries: a MobileNetV2-style encoder, dual-branch boundary-attentive decoder, and an **EMA teacher–student** scheme that stabilizes training without a heavy external teacher.

![Title / overview](/images/lbanet/p-01.jpg)

![Architecture](/images/lbanet/fig-000.jpg)

## Highlights (from the study)

- **91.86% mIoU** on THRS-RSNA at **13.88M** parameters  
- ~**10× fewer FLOPs** than Swin-UNet while competing with heavier nets across medical and natural-image benchmarks  
- Boundary IoU gains from EMA self-distillation vs the unregularized baseline  

![Method figure](/images/lbanet/fig-001.jpg)

![Results panel](/images/lbanet/p-05.jpg)

![Qualitative](/images/lbanet/fig-002.jpg)

![More results](/images/lbanet/p-06.jpg)

## Full PDF

Available on request.
`,
  },
  {
    slug: "rdif",
    title: "RDIF: Radiomic-Guided Diffusion for Explainable Segmentation",
    venue: "BTech project · IIITDM Kurnool · 2026",
    authors: "Varunika Naini",
    cover: "/images/rdif/ch-15.jpg",
    blurb:
      "Post-hoc XAI that seeds IG CAMs, gates with radiomics, and diffuses so saliency hugs anatomy — not blobs.",
    body: `## Overview

**RDIF** (Radiomic-Guided Diffusion Framework) bridges localization and structural fidelity for explainable medical segmentation. Integrated Gradient seeds are gated by radiomic texture cues (Gabor, LBP, GLCM) and refined with Perona–Malik anisotropic diffusion so saliency maps align with anatomy.

![Framework overview](/images/rdif/ch-15.jpg)

![RDIF CAM architecture](/images/rdif/fig-001.jpg)

## What the figures show

Across medical and natural benchmarks, RDIF CAMs stay tighter to structure than common attribution baselines — with strong pointing-game / faithfulness metrics in the report tables.

![CAM comparisons](/images/rdif/ch-21.jpg)

![Qualitative saliency](/images/rdif/ch-23.jpg)

![More visualizations](/images/rdif/ch-26.jpg)

![Segmentation / XAI panels](/images/rdif/ch-31.jpg)

![Additional results](/images/rdif/ch-32.jpg)

![Benchmark panels](/images/rdif/ch-33.jpg)

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
