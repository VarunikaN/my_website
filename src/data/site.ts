export const site = {
  name: "Varunika Naini",
  brand: "varunika",
  role: "AI & ML Engineer",
  location: "Hyderabad",
  email: "varunikaanaini@gmail.com",
  phone: "+91 7032599534",
  github: "https://github.com/VarunikaN",
  resume: "/varunika_resume.pdf",
  tagline:
    "I make robots see food crates, make LLMs run faster, and make AMD kernels stop wasting DRAM.",
  summary:
    "AI & ML Intern at Dheyo AI · BTech CSE @ IIITDM Kurnool (GPA 8.62). Last year: sim-to-real food pick-and-place, Oscar + Isaac Sim, GEAK on MI300X, GRPO prompt RL, and CUDA/Numba quantization.",
};

export const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 — Present",
    highlights: [
      "Owned a 4-stage sim-to-real pipeline for robotic food pick-and-place — Gemini scene configs → physics-verified 3D placements → LoRA photoreal synthesis → DepthPro + SAM3 masks with priority pick targets.",
      "Cut manual image collection ~60–70% by generating LoRA corpora entirely in Blender (physics drops, UV assets, photoreal targets).",
      "Shipped GRPO prompt enhancement with custom rewards — +70% coherence vs untuned baselines.",
      "Dynamic per-layer quantization beating Unsloth by 2–4%; ~11,000× faster quantized LLM inference via CUDA + Numba kernels.",
      "Ran Oscar + Isaac Sim experiments; explored UR10, Franka Panda, and GR1T2 humanoid pick-and-place for sim-to-real transfer.",
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
  "Sim & 3D": ["Isaac Sim", "Isaac Lab", "Oscar", "Blender", "SynD"],
};

export const papers = [
  {
    title: "Enhancing Text-to-Image Prompts using Reinforcement Learning",
    venue: "White paper · Dheyo AI · 2026",
    authors: "Varunika Naini, Aakash Varma Nadimpalli",
    blurb:
      "GRPO-based, constraint-aware prompt enhancement with structured visual feedback for negation, counts, and compositional fidelity.",
    href: null as string | null,
  },
  {
    title:
      "RDIF: Radiomic-Guided Diffusion Framework for Explainable Medical Segmentation",
    venue: "BTech Project · IIITDM Kurnool · 2026",
    authors: "Varunika Naini, Ganesh Mani Kumar Ananthaneni",
    blurb:
      "XAI fusing Integrated Gradient CAMs with radiomic texture gates via anisotropic diffusion — up to 15× mIoU vs LayerCAM.",
    href: null,
  },
  {
    title:
      "LBA-Net: Boundary-Aware Self-Distillation for Efficient Semantic Segmentation",
    venue: "Research · Medical & Natural Image Benchmarks",
    authors: "Varunika Naini et al.",
    blurb:
      "91.86% mIoU on THRS-RSNA at 13.88M params — 10× fewer FLOPs than Swin-UNet across six benchmarks.",
    href: null,
  },
];

/** Public Drive galleries shared for food / sim-to-real media */
export const driveGalleries = [
  "https://drive.google.com/drive/folders/1lKyLcsXwjXoOTejf07ax78nHSMu35a_r?usp=drive_link",
  "https://drive.google.com/drive/folders/15MUHNwG6IIGL4cEcEW0ZNQeZmYO-iKKc?usp=drive_link",
  "https://drive.google.com/drive/folders/14FEJhDs2fQDEpXdvQzjrrc-XjPPNHnjE?usp=drive_link",
  "https://drive.google.com/drive/folders/1qIz1UymQQI3ATI07W1Wv7JkwUfY6Atam?usp=drive_link",
  "https://drive.google.com/drive/folders/1wZ6exH7NLKIbis9NVaWKiOrTSD5E3sme?usp=drive_link",
  "https://drive.google.com/drive/folders/1GeDCC0mMwTXizb2b0jH2qBQmV-RGI4OL?usp=drive_link",
  "https://drive.google.com/drive/folders/1-7rhMrtXIUSyu7-2yoH9h8rCO2KFbbKh?usp=drive_link",
  "https://drive.google.com/drive/folders/1QqICbuacE7cPZLer1xc7LkqctR6VDh7N?usp=drive_link",
  "https://drive.google.com/drive/folders/13EH3pTn56GkfGsPe_U3y1YzgGFM3Lna4?usp=drive_link",
  "https://drive.google.com/drive/folders/1t4V05qriD0nwhtw1_SJBak-KJ3LHZ7we?usp=drive_link",
  "https://drive.google.com/drive/folders/1-5Tta0NTejSbyn4FezStTujUT4yEAcHO?usp=drive_link",
  "https://drive.google.com/drive/folders/1K3EWdaapkS-tMon4UOf7fzkjfKTWXFRd?usp=drive_link",
  "https://drive.google.com/drive/folders/1EUwnYag5C3rMZctuP9K6-2dhFdFC5eAv?usp=drive_link",
  "https://drive.google.com/drive/folders/1S8Ek5vrELj-Dym9TuqIe85hiUoYCeelt?usp=drive_link",
  "https://drive.google.com/drive/folders/1kxWD7ce2C5U47k4sX0iHYJFve6RE5t1G?usp=drive_link",
  "https://docs.google.com/spreadsheets/d/1K3gYFy-B6JXj0YYcHr0MQjmHVxRRCo9L6gIc3-AmBxY/edit?usp=drive_link",
  "https://drive.google.com/drive/folders/15tOfNbzzyB77cR2kVrlpiDnE9upXAMPC?usp=sharing",
  "https://drive.google.com/drive/folders/1wHkMuvcc4xP31EnGots8tE2jdSLOQiZG?usp=sharing",
  "https://drive.google.com/drive/folders/1vub2ELF9BWGIj_O4MWp81xXW5czvLBfz?usp=sharing",
];
