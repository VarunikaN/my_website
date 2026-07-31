export const site = {
  name: "Varunika Naini",
  brand: "VARUNIKA",
  role: "AI & ML Engineer",
  location: "Hyderabad, India",
  email: "varunikaanaini@gmail.com",
  phone: "+91 7032599534",
  github: "https://github.com/VarunikaN",
  resume: "/varunika_resume.pdf",
  tagline:
    "Building the bridge from synthetic worlds to real robots — quantization, LoRA, and sim-to-real pipelines.",
  summary:
    "AI & ML Intern at Dheyo AI. BTech CSE at IIITDM Kurnool. I design synthetic data systems, fine-tune generative models, and push LLM inference to the edge with CUDA and Numba.",
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Designed a 4-stage sim-to-real synthetic data pipeline for robotic grocery picking — Gemini scene configs → physics-verified 3D placements → LoRA photoreal synthesis → DepthPro + SAM3 masks with priority pick targets.",
      "Cut manual image collection ~60–70% by generating LoRA training corpora entirely in Blender with physics drop sims and photoreal target synthesis.",
      "Built a GRPO-based prompt enhancement framework with custom reward signals, raising coherence scores by 70% vs. untuned baselines.",
      "Dynamic per-layer quantization outperforming Unsloth by 2–4%; accelerated quantized LLM inference ~11,000× via CUDA and Numba kernel rewrites.",
      "Explored UR10, Franka Panda, and GR1T2 humanoid platforms in Isaac Sim for pick-and-place and sim-to-real generalization.",
    ],
  },
  {
    company: "Suvidha Foundation",
    role: "Machine Learning Intern",
    period: "Jun 2024 — Jul 2024",
    highlights: [
      "Benchmarked KL-Sum, T5, Pegasus, and BERT for abstractive summarization — ROUGE 0.45 (DUC 2001) and 0.52 (CNN/Daily Mail).",
      "Lowered model error rates by 15% through hyperparameter tuning and architectural ablation.",
    ],
  },
  {
    company: "Trainity",
    role: "Data Analyst Intern",
    period: "May 2024 — Jun 2024",
    highlights: [
      "Delivered 8 data analysis projects with Python, SQL, and Power BI spanning cleaning, transformation, and dashboards.",
      "Surfaced patterns that improved client decision-making efficiency by ~20%.",
    ],
  },
];

export const projects = [
  {
    title: "Sim-to-Real Grocery Pipeline",
    tag: "Robotics · Synthetic Data",
    blurb:
      "End-to-end crate picking: physics-verified placements, Blender LoRA corpora, Qwen Image Edit synthesis, and DepthPro + SAM3 masks for priority picks.",
  },
  {
    title: "GRPO Prompt Enhancer",
    tag: "RL · Generative AI",
    blurb:
      "Constraint-aware prompt enhancement with structured visual feedback — stronger adherence to negation, counts, and compositional instructions.",
  },
  {
    title: "Dynamic Quantization + CUDA/Numba",
    tag: "Systems · Inference",
    blurb:
      "Per-layer optimal quantization schemas and kernel rewrites delivering ~11,000× faster quantized LLM inference with GGUF-parity throughput.",
  },
  {
    title: "GEAK Kernel Optimization",
    tag: "GPU · AMD Instinct",
    blurb:
      "Multi-agent GEMM kernel optimization for AMD Instinct MI GPUs — profiling, parallel engineer patches, verified speedups.",
  },
  {
    title: "ABB Food Asset Pipeline",
    tag: "3D · Simulation",
    blurb:
      "Food asset generation through a complete end-to-end realism pipeline for robotic simulation environments.",
  },
  {
    title: "Humanoid Manipulation",
    tag: "Isaac Sim",
    blurb:
      "Simulating humanoid pick-up behaviors and comparing parallel-jaw vs. humanoid manipulation for sim-to-real transfer.",
  },
  {
    title: "LBA-Net",
    tag: "Medical Vision",
    blurb:
      "Boundary-aware self-distillation for efficient semantic segmentation — 91.86% mIoU on THRS-RSNA at 13.88M params, 10× fewer FLOPs than Swin-UNet.",
    href: "https://github.com/VarunikaN/LBA-Net",
  },
  {
    title: "Gesture Game Controller",
    tag: "CV · Hardware",
    blurb:
      "OpenCV + MediaPipe gesture interface with Arduino actuation — 30% lower input latency than keyboard controls.",
  },
];

export type Paper = {
  title: string;
  venue: string;
  authors: string;
  blurb: string;
  href?: string | null;
};

export const papers: Paper[] = [
  {
    title: "Enhancing Text-to-Image Prompts using Reinforcement Learning",
    venue: "White paper · Dheyo AI · 2026",
    authors: "Varunika Naini, Aakash Varma Nadimpalli",
    blurb:
      "GRPO-based, constraint-aware prompt enhancement with structured visual feedback for negation, counts, and compositional fidelity.",
    href: null,
  },
  {
    title:
      "RDIF: Radiomic-Guided Diffusion Framework for Explainable Medical Segmentation",
    venue: "BTech Project Report · IIITDM Kurnool · 2026",
    authors: "Varunika Naini, Ganesh Mani Kumar Ananthaneni",
    blurb:
      "Post-hoc XAI fusing Integrated Gradient CAMs with radiomic texture gates via anisotropic diffusion — up to 15× mIoU gain vs. LayerCAM.",
    href: "/papers/RDIF.pdf",
  },
  {
    title:
      "LBA-Net: Boundary-Aware Self-Distillation for Efficient Semantic Segmentation",
    venue: "Research · Medical & Natural Image Benchmarks",
    authors: "Varunika Naini et al.",
    blurb:
      "MobileNetV2 encoder-decoder with dual-branch boundary-attentive decoder and EMA self-distillation across six segmentation benchmarks.",
    href: "/papers/LBA-Net.pdf",
  },
  {
    title: "GEAK: GEMM Kernel Optimization Report",
    venue: "Technical report · AMD Instinct · 2026",
    authors: "Varunika Naini",
    blurb:
      "Multi-agent workflow for optimizing Triton/HIP GEMM kernels on AMD Instinct MI GPUs with verified geomean speedups.",
    href: "/papers/GEAK_kernel_report.pdf",
  },
];

export const education = {
  school: "IIITDM Kurnool",
  degree: "BTech in Computer Science",
  gpa: "GPA 8.62",
  period: "Nov 2022 — Present",
};

export const skills = {
  Languages: ["Python", "R", "SQL", "C", "C++", "JavaScript"],
  "ML & Systems": [
    "PyTorch",
    "TensorFlow",
    "CUDA",
    "Numba",
    "LoRA",
    "vLLM",
    "OpenCV",
  ],
  "Sim & Tools": ["Isaac Sim", "Blender", "PostgreSQL", "Git", "Power BI"],
};
