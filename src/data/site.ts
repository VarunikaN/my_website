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
    "AI & ML Intern at Dheyo AI · BTech CSE @ IIITDM Kurnool (GPA 8.62). Last year: company sim-to-real systems, Oscar + Isaac Sim, GEAK on MI300X, GRPO, and CUDA/Numba quantization.",
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Designed sim-to-real synthetic data pipelines for robotic food pick-and-place (company work — details on request).",
      "Built GRPO-based prompt enhancement with custom rewards — +70% coherence vs untuned baselines.",
      "Dynamic per-layer quantization beating Unsloth by 2–4%; ~11,000× faster quantized LLM inference via CUDA + Numba kernels.",
      "Oscar + Isaac Sim experiments; UR10, Franka Panda, and GR1T2 humanoid pick-and-place for sim-to-real transfer.",
      "Optimized HIP GEMM kernels on AMD Instinct MI300X with GEAK — 5.24× geomean, up to 65× on transpose layouts.",
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
  "Sim & 3D": ["Isaac Sim", "Isaac Lab", "Oscar", "Blender"],
};

/** Company / client projects — listed publicly, details on request */
export const companyWork = [
  {
    title: "ABB Food · Pick-and-Place Pipeline",
    tag: "Robotics · Synthetic Data",
    blurb:
      "End-to-end sim-to-real stack for robotic food picking — layouts, assets, realism, depth/masks, priority picks.",
  },
  {
    title: "SynD · LoRA Realism Generation",
    tag: "Generative · 3D",
    blurb:
      "Blender corpora + LoRA / Gemini realism for simulation-ready food assets and crate scenes.",
  },
  {
    title: "SceneSmith & Cosmos",
    tag: "Environment Gen",
    blurb:
      "Environment generation and world-model experiments feeding downstream robot and vision pipelines.",
  },
  {
    title: "Oscar + Isaac Sim (company runs)",
    tag: "Simulation",
    blurb:
      "Oscar demos and Isaac Sim manipulation experiments in the company stack — skeleton viz, pick-place baselines.",
  },
];
