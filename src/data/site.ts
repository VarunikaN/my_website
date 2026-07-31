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
    "I fine-tune with LoRA, harden voice-agent prompts, and turn scenes into robot-ready worlds.",
  summary:
    "AI & ML Intern at Dheyo AI · BTech CSE @ IIITDM Kurnool (GPA 8.62). Voice prompt craft, voice eval, SynD sim-to-real, OSCAR/Cosmos, LoRA, AMD kernels.",
  hooks: [
    "LoRA that actually sticks to the task.",
    "Prompts that sound good on a phone.",
    "Eval that catches bugs before callers do.",
    "Sim-to-real is my love language.",
    "Two product photos → a physics-ready crate.",
    "Small models. Big reasoning. Less DRAM drama.",
  ],
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Voice-agent prompt enhancement — natural phone scripts, handoffs, TTS-friendly style (LoRA when needed).",
      "Voice-agent evaluation — scenario tests, guardrail red-teams, LLM judges, live coverage.",
      "LoRA / adapter fine-tunes for domain agents and generative pipelines.",
      "SynD: from 2D product photos to physics-aware robot training datasets (RGB, depth, masks, normals).",
      "Dynamic quantization with LIM & BAQ explorations — GGUF models on Hugging Face with strong GPQA/GSM8K.",
      "OSCAR skeleton-controlled video gen and Cosmos Isaac→world-video experiments.",
      "Isaac Sim humanoid teleop: target-frame control, IK, path planning, pick-place scenes.",
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
