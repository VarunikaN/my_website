export const site = {
  name: "Varunika Naini",
  brand: "VARUNIKA NAINI",
  role: "AI & ML Engineer",
  location: "Hyderabad",
  email: "varunikaanaini@gmail.com",
  phone: "+91 7032599534",
  github: "https://github.com/VarunikaN",
  linkedin: "https://www.linkedin.com/in/varunika-naini-631b5b2b3",
  resume: "/varunika_resume.pdf",
  photo: "/images/portrait/me.jpg",
  tagline:
    "I turn prompts into robot-ready worlds, and quantized models into ones that still reason.",
  summary:
    "AI & ML Intern at Dheyo AI · BTech CSE @ IIITDM Kurnool (GPA 8.62). Shipping voice-agent eval, SynD sim-to-real data, OSCAR/Cosmos experiments, and AMD kernels.",
  hooks: [
    "Sim-to-real is my love language.",
    "Two product photos → a physics-ready crate.",
    "Small models. Big reasoning. Less DRAM drama.",
    "Teleop the joints. Trust the IK.",
    "Catch the bug before the caller does.",
  ],
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Building an evaluation framework for voice agents — scenario generation, automated checks, and live coverage.",
      "SynD: from 2D product photos to physics-aware robot training datasets (RGB, depth, masks, normals).",
      "Dheyo dynamic quantization on DeepSeek-R1-Distill-Qwen-1.5B — GGUF models on Hugging Face beating Unsloth on GPQA.",
      "OSCAR + Cosmos experiments: skeleton-controlled video gen and Isaac Sim → world-model loops.",
      "Isaac Sim humanoid teleop: IK, joint control, path planning, and pick-place scene authoring.",
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
  "Sim & Agents": ["Isaac Sim", "Isaac Lab", "Blender", "Voice agents", "Eval harnesses"],
};
