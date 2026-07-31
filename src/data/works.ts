export type Work = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  cover?: string;
  featured?: boolean;
  github?: string;
  /** markdown file under content/work */
  mdFile?: string;
  /** inline markdown body if no mdFile */
  body?: string;
  drives?: boolean;
};

export const works: Work[] = [
  {
    slug: "food-pick-and-place",
    title: "Food Pick-and-Place · Sim-to-Real",
    tag: "Robotics · Synthetic Data · LoRA",
    year: "2025–26",
    featured: true,
    cover: "/images/food/toprika_chips.jpg",
    blurb:
      "End-to-end synthetic data for robotic food picking: Gemini layouts, Blender physics, LoRA photorealism, DepthPro + SAM3 masks, priority picks.",
    drives: true,
    body: `## The problem

Robots that pick food packets from crates need dense, labeled vision data — depth, instance masks, and a clear **priority pick** (usually the shallowest reachable item). Collecting that by hand is slow and brittle.

## What I built

A **4-stage sim-to-real pipeline** for food pick-and-place (ABB Food / SynD stack):

1. **Scene configs → placements** — Gemini turns high-level crate configs into physics-verified 3D placement JSONs (location, quaternion, face direction, spatial constraints).
2. **Blender corpora** — UV-textured per-face assets, physics drop sims, metadata extraction, photoreal targets. Fine-tuned with LoKr / LoRA at bf16.
3. **Photoreal synthesis** — Qwen Image Edit + LoRA (and Gemini realism passes) turn synthetic renders into camera-ready crate images.
4. **Depth + masks** — Apple DepthPro and SAM3 produce per-instance depth and segmentation, with a preferential flag marking the shallowest object as the robot’s priority pick.

## Impact

- Manual image collection cut by roughly **60–70%**
- Deterministic spatial control for downstream robot simulation
- Full asset path from biscuits / chips packs through realism generation

## Visuals

![Food pack asset](/images/food/toprika_chips.jpg)

![Crate / container reference](/images/food/container.jpg)

![Blender asset work](/images/blender/asset-1.jpg)

![Asset texturing](/images/blender/asset-3.jpg)

## Open galleries

Project media lives in shared Drive folders linked on this page — renders, depth maps, masks, and experiment dumps from the food pick-and-place runs.
`,
  },
  {
    slug: "oscar-isaac-sim",
    title: "Oscar + Isaac Sim",
    tag: "Simulation · Manipulation",
    year: "2026",
    featured: true,
    cover: "/images/humanoid/gr1t2-pickplace.jpg",
    blurb:
      "Running Oscar demos on Isaac Sim — skeleton rendering, Franka pick-place examples, and experiment dumps for manipulation research.",
    body: `## Why Oscar + Isaac Sim

Oscar sits on top of Isaac Sim for robotics experimentation — demos, skeleton visualization, and manipulation baselines. I used it alongside Isaac’s Franka pick-and-place examples and our internal experiment folders.

## What I ran

- Oscar public demos under \`/isaac-sim/oscar-public/demo\`
- Skeleton rendering over recorded samples (\`render_skeleton.py\` at 30 FPS)
- Isaac Sim Franka manipulator pick-place reference paths
- Experiment outputs under dated \`oscar_exps/\` runs for review and viz

## How it fits the rest of my work

Oscar + Isaac Sim is the **execution sandbox** next to the synthetic food pipeline: once crates and masks look right, the same spatial story has to survive in a physics simulator — joints, grippers, and pick trajectories.

## Related stack

- Isaac Sim / Isaac Lab
- LeIsaac GR1T2 humanoid pick-place teleop
- Franka & UR10 exploration for gripper vs humanoid transfer
`,
  },
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
    slug: "grpo-prompt-enhancer",
    title: "GRPO Prompt Enhancer",
    tag: "RL · Generative AI",
    year: "2026",
    featured: true,
    cover: "/images/misc/shot-1.jpg",
    blurb:
      "Constraint-aware text-to-image prompt enhancement with GRPO and structured visual rewards — negation, counts, composition.",
    body: `## The failure mode

Prompt expanders make images prettier and **break the user’s constraints** — “no scallions” becomes scallion garnish; “exactly four dogs” drifts.

## Approach

A **GRPO-based** prompt enhancement policy trained with structured visual feedback:

- Taxonomy of logical / spatial key points (negation, counts, attributes)
- Reward signals from evaluating generated images against that taxonomy
- Stronger adherence than supervised fine-tuning baselines

## Result

Coherence scores rose about **70%** vs untuned baseline prompts. White paper with Aakash Varma Nadimpalli (Dheyo AI, 2026) — available on request.

## Stack

Diffusion backbones (FLUX / Qwen-Image class), RL fine-tuning, custom eval harness for compositional constraints.
`,
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

## Why recruiters should care

This is the unsexy half of shipping models: not just “we quantized it,” but **which layers**, **which format**, and **kernels that actually move tokens**.

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
    cover: "/images/humanoid/gr1t2-pickplace.jpg",
    blurb:
      "GR1T2 humanoid pick-and-place in Isaac Lab / LeIsaac — teleop, scene inspection, and sim-to-real generalization studies.",
    body: `## Goal

Get a humanoid (GR1T2) to pick objects in simulation and understand how that compares to parallel-jaw arms for sim-to-real.

## What I did

- LeIsaac + Isaac Lab teleop (\`gr1t2_keyboard_teleop\`, kitchen teleop)
- Scene inspection / debug scripts for pick-place configs
- Added objects via Isaac Lab pick-place env configs
- Compared gripper vs humanoid manipulation for transfer

![GR1T2 pick-place](/images/humanoid/gr1t2-pickplace.jpg)

![Scene setup](/images/humanoid/gr1t2-scene.jpg)

## Stack

Isaac Sim 5.x, Isaac Lab Arena, LeRobot / LeIsaac, pinocchio-enabled tasks.
`,
  },
  {
    slug: "scenesmith-cosmos",
    title: "SceneSmith & Cosmos",
    tag: "Environment Gen · World Models",
    year: "2025–26",
    cover: "/images/blender/asset-5.jpg",
    blurb:
      "Environment generation with SceneSmith and experimentation on Cosmos — building worlds for downstream robot and vision pipelines.",
    body: `## SceneSmith

Worked on **environment generation** with SceneSmith — procedurally assembling scenes that feed synthetic data and robot sims instead of hand-authoring every crate and shelf.

## Cosmos

Contributed to **Cosmos** experiments — world-model / generative environment work that sits upstream of realism and policy data.

## How it connects

SceneSmith + Cosmos → richer environments → better SynD / food pick-and-place data → better Isaac / Oscar runs. One chain, not isolated demos.
`,
  },
  {
    slug: "abb-food-assets",
    title: "ABB Food Asset & Realism Pipeline",
    tag: "3D · Gemini Realism",
    year: "2025–26",
    cover: "/images/food/container.jpg",
    blurb:
      "Food asset generation end-to-end — Blender assets through Gemini realism generation for simulation-ready packs.",
    drives: true,
    body: `## Scope

ABB Food needed simulation-ready **food assets** and a path from Blender renders to camera-like images.

## Pipeline

- Blender asset creation (UV faces, drops, packs)
- Realism generator: Gemini image models convert \`render.png\` → \`realistic.png\` with container references
- Layout / depth / mask stages shared with the food pick-and-place SynD stack

![Container reference](/images/food/container.jpg)

![Blender pack](/images/blender/asset-2.jpg)

![Asset detail](/images/blender/asset-4.jpg)
`,
  },
];

export function getWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
