export const site = {
  name: "Varunika Naini",
  brand: "VARUNIKA",
  role: "AI & ML Engineer",
  location: "Hyderabad",
  email: "varunikaanaini@gmail.com",
  phone: "+91 7032599534",
  github: "https://github.com/VarunikaN",
  resume: "/varunika_resume.pdf",
  tagline:
    "Building the bridge from synthetic worlds to real robots — quantization, LoRA, and sim-to-real pipelines.",
  summary:
    "AI & ML Intern at Dheyo AI · BTech CSE @ IIITDM Kurnool (GPA 8.62). Recent focus: voice-agent eval systems, humanoid teleop in Isaac Sim, GEAK on MI300X, and GRPO.",
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Building an AOP validation framework for voice agents (Vaakya) — deterministic cases, LLM judges, and live API coverage.",
      "Sim-to-real synthetic data for robotic food pick-and-place — details available on request.",
      "GRPO prompt enhancement with custom rewards — +70% coherence vs untuned baselines.",
      "Per-layer quantization and CUDA/Numba inference acceleration — details available on request.",
      "Isaac Sim / LeIsaac humanoid teleop: IK, joint control, path planning, and pick-place scene authoring.",
      "HIP GEMM optimization on AMD Instinct MI300X with GEAK — 5.24× geomean, up to 65× on transpose layouts.",
    ],
  },
  {
    company: "Suvidha Foundation",
    role: "Machine Learning Intern",
    period: "Jun 2024 — Jul 2024",
    highlights: [
      "Benchmarked KL-Sum, T5, Pegasus, BERT for abstractive summarization (ROUGE 0.45 / 0.52).",
      "Cut model error ~15% via tuning and ablation.",
    ],
  },
  {
    company: "Trainity",
    role: "Data Analyst Intern",
    period: "May 2024 — Jun 2024",
    highlights: [
      "Eight end-to-end analytics projects with Python, SQL, Power BI.",
      "Insights that improved client decision speed ~20%.",
    ],
  },
];

export const education = {
  school: "IIITDM Kurnool",
  degree: "BTech in Computer Science",
  gpa: "GPA 8.62",
  period: "Nov 2022 — Present",
};

export const skills = {
  Languages: ["Python", "C++", "SQL", "JavaScript", "R", "C"],
  "ML & Systems": [
    "PyTorch",
    "CUDA",
    "Numba",
    "LoRA",
    "vLLM",
    "OpenCV",
    "HIP / ROCm",
  ],
  "Sim & Agents": ["Isaac Sim", "Isaac Lab", "Blender", "Voice AOPs", "Eval harnesses"],
};

/** Selected Dheyo projects — details on request */
export const selectedProjects = [
  {
    title: "ABB Food · Pick-and-Place Pipeline",
    tag: "Robotics · Synthetic Data",
    blurb:
      "Sim-to-real stack for robotic food picking — layouts, assets, realism, depth/masks, priority picks.",
  },
  {
    title: "SynD · LoRA Realism Generation",
    tag: "Generative · 3D",
    blurb:
      "Blender corpora + LoRA / Gemini realism for simulation-ready food assets and crate scenes.",
  },
  {
    title: "Dynamic Quantization · CUDA & Numba",
    tag: "Inference · Systems",
    blurb:
      "Per-layer quantization schemas and CUDA/Numba kernel rewrites for quantized LLM inference.",
  },
  {
    title: "SceneSmith, Cosmos & Oscar",
    tag: "Simulation · World Models",
    blurb:
      "Environment generation, world-model experiments, and Oscar + Isaac Sim manipulation runs.",
  },
];
