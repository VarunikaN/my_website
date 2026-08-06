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
    slug: "voice-prompt-enhancement",
    title: "Voice Agent Prompt Enhancement",
    tag: "Agents · Prompts · LoRA",
    year: "2026",
    featured: true,
    cover: "/images/voice/phone-call.jpg",
    blurb:
      "Teach the agent to sound human on a phone — clearer procedures, calmer handoffs, zero markdown for TTS.",
    body: `Phone agents don't get a second draft. Whatever you put in the prompt is what the caller hears — awkward pauses, weird tool talk, or a surprisingly good answer.

I spend time **rewriting and enhancing voice-agent prompts** so they feel natural: crisp booking / cancel / parking flows, clear handoff rules, and replies that stay plain English (because TTS will cheerfully read your \`**bold**\` markers out loud).

Sometimes that means LoRA / adapters so the model actually sticks to the house style. Sometimes it's just ruthless editing until the script stops sounding like a wiki.

![On the line](/images/voice/phone-support.jpg)

The goal is simple: when someone calls, the agent already knows how to talk.
`,
  },
  {
    slug: "voice-agent-eval",
    title: "Voice Agent Evaluation",
    tag: "Agents · Guardrails · Eval",
    year: "2026",
    featured: true,
    cover: "/images/voice/call-headset.jpg",
    blurb:
      "A separate loop: stress-test the agent before a real caller does — scenarios, red-teams, judges.",
    body: `Enhancing a prompt is half the story. The other half is proving it still works when someone gets creative, confused, or adversarial.

I build the **evaluation side** — fake conversations that walk through happy paths and messy ones, plus guardrail red-teams that try prompt injection, tool fishing, and “just invent a confirmation code for me.”

![Debugging the call path](/images/voice/debug-code.jpg)

Judges (tools when it's crisp, LLMs when dialogue is fuzzy) score whether the agent stayed useful *and* safe. Live checks keep client APIs from rotting quietly.

![QA before go-live](/images/voice/qa-checklist.jpg)

Ship the call only after the harness says yes.
`,
  },
  {
    slug: "humanoid-leisaac",
    title: "Humanoid Teleop in Isaac Sim",
    tag: "Robots · Isaac · Teleop",
    year: "2026",
    featured: true,
    cover: "/images/humanoid/teleop-v1-35.jpg",
    blurb:
      "Drive a humanoid like a video game — reach, grasp, place — while the sim keeps the physics honest.",
    body: `Imagine puppeteering a tall kitchen robot with a keyboard. You nudge where the hand should go; the robot figures out the joints. That's the vibe.

I've been living in Isaac scenes with humanoids and arms — bins, graspables, cluttered counters — practicing pick-and-place until the motion feels intentional instead of lucky.

![Reach for it](/images/humanoid/teleop-v1-15.jpg)

![Close the grasp](/images/humanoid/teleop-v1-55.jpg)

![Set it down](/images/humanoid/teleop-v1-80.jpg)

Kitchen clutter is the fun boss fight:

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
      "Make matrix multiply on AMD Instinct stop wasting time — tiled HIP kernels that actually fly.",
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
    body: `_Building simulation datasets used to take weeks. We cut that down to a prompt._

**SynD** takes front/back product photos and a plain-English scene description, then returns annotated robot-training data plus a loadable sim world.

![Reference front](/images/food/results/ref-front.jpg)

![Reference back](/images/food/results/ref-back.jpg)

## Outputs that matter for grasping

Depth, masks, and normals for the biscuits crate:

![Depth](/images/food/results/biscuits-depth.jpg)

![Masks](/images/food/results/biscuits-mask.jpg)

![Normals](/images/food/results/biscuits-normals.jpg)

Chips packs with wall-lean tilts:

![Chips RGB](/images/food/results/chips-rgb.jpg)

![Chips depth](/images/food/results/chips-depth.jpg)

![Chips masks](/images/food/results/chips-mask.jpg)

![Chips normals](/images/food/results/chips-normals.jpg)

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
      "Shrink the model without shrinking the brain — smarter layer bit budgets, GGUFs on Hugging Face.",
    body: `Small models are cute until they forget how to reason. I work on **dynamic quantization** that treats layers differently — protect the ones that carry hard thinking, squeeze the ones that don't.

Two ideas I keep coming back to:

- **LIM** — how much does this layer actually change the signal? Important layers keep more precision.
- **BAQ** — allocate bits with sensitivity in mind, not a blunt “everything is 4-bit” hammer.

Alpha / WeightWatcher-style scores and a calibration-free cousin (ZD) rounded out the comparison. LIM loved compression; ZD punched up on GPQA; BAQ sat in the balanced middle.

![Method pages](/images/quant/alpha/p-2.jpg)

![Accuracy charts](/images/quant/alpha/p-7.jpg)

![Trade-off heatmaps](/images/quant/alpha/p-8.jpg)

Try the GGUFs: [DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF](https://huggingface.co/DheyoAI/DeepSeek-R1-Distill-Qwen-1.5B-GGUF)

![GSM8K](/images/quant/gsm8k_benchmark.jpg)

![AIME](/images/quant/aime_cons_64_benchmark_plot.jpg)

Deeper recipes are **available on request**.
`,
  },
  {
    slug: "oscar-sim-video",
    title: "OSCAR · Skeleton-Controlled Robot Video",
    tag: "World Models · Video",
    year: "2026",
    featured: true,
    requestDetails: true,
    cover: "/images/oscar/result-3.jpg",
    blurb:
      "Give OSCAR a still + a dancing stick-figure of the arm — get a video that follows the move.",
    body: `OSCAR is a little magical: show it a robot frame and a **2D skeleton** of the motion you want, and it paints a video that tries to dance along.

I ran episodes from my experiment folder — input frame, \`skeleton_viz\` stick figure, then the generated \`rgb\` clip of a Franka chasing a blue cube.

![Starting frame](/images/oscar/input-frame0.jpg)

![Skeleton control](/images/oscar/skel-2.jpg)

![Skeleton on the scene](/images/oscar/overlay-2.jpg)

![Generated mid-move](/images/oscar/result-1.jpg)

![Generated place](/images/oscar/result-2.jpg)

![Generated late](/images/oscar/result-4.jpg)

![Generated finish](/images/oscar/result-5.jpg)

It tracks joints beautifully. Objects after a drop? Still chaotic — that's the fun research cliff.

More notes **on request**.
`,
  },
  {
    slug: "cosmos-experiments",
    title: "Cosmos · Isaac Renders to World Video",
    tag: "World Models · Video",
    year: "2026",
    featured: true,
    requestDetails: true,
    cover: "/images/cosmos-results/franka-1.jpg",
    blurb:
      "Start in Isaac, ask Cosmos for a richer video — keep the physics, upgrade the pixels.",
    body: `Cosmos is a different toy from OSCAR. I condition it on Isaac Sim renders and ask for videos (and action hints) that keep objects **solid** — no melting cubes, please.

![UR10 A](/images/cosmos-results/ur10-0.jpg)

![UR10 B](/images/cosmos-results/ur10-1.jpg)

![UR10 C](/images/cosmos-results/ur10-2.jpg)

![Franka A](/images/cosmos-results/franka-0.jpg)

![Franka C](/images/cosmos-results/franka-2.jpg)

![Output A](/images/cosmos-results/out-0.jpg)

![Output B](/images/cosmos-results/out-1.jpg)

![Output C](/images/cosmos-results/out-2.jpg)

![Still](/images/cosmos-results/result-1.jpg)

![Still 2](/images/cosmos-results/result-2.jpg)

Recipe that worked for me: build the scene in Isaac first, *then* ask Cosmos to dream on top — not the other way around.

More clips **on request**.
`,
  },
  {
    slug: "synd-realism",
    title: "Blender Assets for Isaac Sim",
    tag: "3D · Sim",
    year: "2025–26",
    featured: true,
    requestDetails: true,
    cover: "/images/blender-flow/step-5.jpg",
    blurb:
      "We build the snack packs and props in Blender, then drop them into Isaac Sim for robot practice.",
    body: `Robots learn better when the shelf looks like a shelf — not a grey brick with “chips” written on it.

We **create the items in Blender**, get the textures and shapes feeling right, then **bring them into Isaac Sim** so the robot can practice picking in a world that looks familiar.

![Mesh start](/images/blender-flow/step-1.jpg)

![In Blender](/images/blender-flow/step-2.jpg)

![Texture pass](/images/blender-flow/step-3.jpg)

![UV fit](/images/blender-flow/step-4.jpg)

![Inside Isaac](/images/blender-flow/step-6.jpg)

![Lit for the camera](/images/blender-flow/step-7.jpg)

That's the whole vibe: craft in Blender → simulate in Isaac.

More exports **on request**.
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
    cover: "/images/grpo/paper-00.jpg",
    blurb:
      "You said no scallions. The enhancer added scallions. GRPO teaches it to stop doing that.",
    body: `You type a simple idea. An enhancer turns it into a fancy prompt. The image looks gorgeous — and quietly breaks your rules (“no scallions,” “exactly four dogs,” “made of ice”).

I built a **GRPO** loop that scores the *image*, not just the prose, and trains the enhancer to obey those constraints.

When the baseline enhancer fails negation:

![Negation fail A](/images/grpo/paper-01.jpg)

![Negation fail B](/images/grpo/paper-02.jpg)

When attributes stick (everyone in red):

![Attribute A](/images/grpo/paper-03.jpg)

![Attribute B](/images/grpo/paper-04.jpg)

More wins from the Drive set — numeracy, materials, weird shapes:

![Grid](/images/grpo/paper-05.jpg)

![Sample](/images/grpo/paper-06.jpg)

![Sample](/images/grpo/paper-07.jpg)

![Sample](/images/grpo/paper-08.jpg)

![Result](/images/grpo/result-00.jpg)

![Result](/images/grpo/result-02.jpg)

![Result](/images/grpo/result-03.jpg)

![Result](/images/grpo/result-05.jpg)

Full PDF **on request**.
`,
  },
  {
    slug: "lba-net",
    title: "LBA-Net: Boundary-Aware Self-Distillation",
    venue: "BTech report · IIITDM Kurnool",
    authors: "Varunika Naini",
    cover: "/images/lbanet/arch.jpg",
    blurb:
      "Boundary-aware segmentation that stays lightweight: sharper medical contours without a heavyweight model.",
    body: `Medical segmentation has a practical tension: the fine contours clinicians care about are often the first detail a compact model loses. **LBA-Net** was built to make that trade-off less severe.

## What we aimed to do

Build a segmentation system that is small enough to be practical, but reliable enough to preserve the delicate boundaries that matter in medical imagery. The goal was not to make the largest model; it was to improve structural precision without turning inference into a deployment problem.

At a high level, LBA-Net combines a lightweight visual backbone with boundary-aware reconstruction and a self-teaching training signal. The diagram below shows the student-teacher setup without exposing the full implementation recipe.

![LBA-Net student-teacher architecture](/images/lbanet/arch.jpg)

## Results

On the THRS-RSNA epiphysis benchmark, LBA-Net reached **91.86% mIoU** and **90.51% mDice** with a **13.88M-parameter** model. In the reported comparison, it delivered the strongest segmentation score among the evaluated methods while maintaining a practical efficiency profile.

The qualitative results tell the same story: the model keeps small anatomical regions and object contours more coherent instead of smoothing them away.

![Qualitative LBA-Net segmentation results](/images/lbanet/visual.jpg)

Across the broader evaluation, the work tested whether this balance held beyond a single setting: medical images with subtle boundaries as well as natural-scene segmentation benchmarks. The result was a consistent case for a lighter model that prioritizes clean structure, not just pixel accuracy.

## Conclusion

LBA-Net is a step toward segmentation models that are easier to deploy without giving up the boundaries that make predictions useful. The public release shares the project structure and core logic while keeping operational training recipes and deployment settings private.

Code: [LBA-Net on GitHub](https://github.com/VarunikaN/LBANet)

> **Patent notice.** LBA-Net and associated methods are patent-pending. The public repository is provided for research and evaluation; commercial use, implementation, or derivative work requires prior written permission.

`,
  },
  {
    slug: "rdif",
    title: "RDIF: Radiomic-Guided Diffusion for Explainable Segmentation",
    venue: "BTech project · IIITDM Kurnool · 2026",
    authors: "Varunika Naini",
    cover: "/images/rdif/arch.jpg",
    blurb:
      "Make the model point at the anatomy — not a mysterious glow in the corner.",
    body: `Accuracy without explanation is a hard sell in medicine. **RDIF** is about making the “why” look like anatomy: saliency that hugs structure instead of smearing into blobs.

![RDIF idea](/images/rdif/pipeline.jpg)

![XAI view](/images/rdif/xai.jpg)

![Medical panels](/images/rdif/medical.jpg)

![Epiphysis](/images/rdif/epiphysis.jpg)

![JSRT](/images/rdif/jsrt.jpg)

![Clinic](/images/rdif/clinic.jpg)

![Cross-data](/images/rdif/crossdata.jpg)

![Review](/images/rdif/review.jpg)

Images from the Overleaf report. Full PDF **on request**.
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
