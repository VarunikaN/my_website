export type Work = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  metric?: string;
  githubUrl?: string;
  confidential?: boolean;
  body?: string;
};

export const works: Work[] = [
  {
    slug: "lba-net",
    title: "LBA-Net",
    category: "Medical image segmentation",
    summary: "A lightweight, boundary-aware approach to segmentation where fine structure matters.",
    metric: "91.86 mIoU | 13.88M parameters",
    githubUrl: "https://github.com/VarunikaN/LBANet",
    body: `## The question

How can a segmentation model preserve difficult boundaries without becoming impractical to run?

## The approach

LBA-Net explores boundary-aware learning in a compact segmentation architecture. The work prioritizes structural detail alongside efficient model size, making the accuracy-deployment tradeoff explicit.

## Result

The model reached **91.86 mIoU** with **13.88M parameters**. The project is available as an open-source implementation for inspection and experimentation.

## Research paper

The research paper and additional technical details are available on request: [contact me](mailto:varunikaanaini@gmail.com?subject=LBA-Net%20research%20paper).`,
  },
  {
    slug: "rdif",
    title: "RDIF",
    category: "Explainable AI",
    summary: "A radiomic-guided explanation method designed to make segmentation evidence easier to inspect.",
    metric: "mIoU .556 vs .036 with LayerCAM",
    githubUrl: "https://github.com/VarunikaN/RDIF",
    body: `## The question

Can explanation maps better align with the image structures behind a segmentation decision?

## The approach

RDIF combines radiomic cues with diffusion-based refinement to produce more structured visual explanations. Rather than treating interpretability as an afterthought, the method focuses on the spatial evidence practitioners need to evaluate.

## Result

RDIF achieved **.556 mIoU**, compared with **.036** for LayerCAM in the reported comparison.

## Research paper

The research paper and additional technical details are available on request: [contact me](mailto:varunikaanaini@gmail.com?subject=RDIF%20research%20paper).`,
  },
  {
    slug: "saarthi",
    title: "Saarthi",
    category: "Retrieval systems",
    summary: "A grounded retrieval experience that brings fragmented information into one useful path.",
    metric: "20 sources | 9 domains | 100% Recall@1 across 7 cases",
    githubUrl: "https://github.com/VarunikaN/Saarthi",
    body: `## The question

How can research and information retrieval remain reliable when a question spans multiple domains?

## The approach

Saarthi organizes retrieval across **20 sources** in **9 domains**, with an emphasis on surfacing the right evidence quickly and clearly.

## Result

In seven evaluated cases, Saarthi recorded **100% Recall@1**.`,
  },
  {
    slug: "wattwise",
    title: "WattWise",
    category: "Forecasting",
    summary: "A practical forecasting project for turning energy data into decisions with a shorter feedback loop.",
    metric: "MAE .335 | RMSE .487 | 6,837 forecasts",
    githubUrl: "https://github.com/VarunikaN/WattWise",
    body: `## The question

How can a forecasting workflow make energy demand easier to anticipate and act on?

## The approach

WattWise is built around a clear forecasting pipeline and evaluation loop, treating accuracy and operational clarity as equally important outputs.

## Result

Across **6,837 forecasts**, the project recorded **MAE .335** and **RMSE .487**.`,
  },
  {
    slug: "hydro-change-net",
    title: "HydroChangeNet",
    category: "Change detection",
    summary: "A vision project for identifying meaningful hydrological change from image data.",
    metric: ".6287 IoU | .7433 F1 vs baseline",
    githubUrl: "https://github.com/VarunikaN/HydroChangeNet",
    body: `## The question

Can a change-detection model distinguish hydrological shifts more reliably than a baseline?

## The approach

HydroChangeNet applies image-based learning to detect change while retaining a focused evaluation against the baseline.

## Result

The reported evaluation reached **.6287 IoU** and **.7433 F1**, outperforming the baseline.`,
  },
  {
    slug: "retail-operations-analytics",
    title: "Retail Operations Analytics",
    category: "Data analytics",
    summary: "A retail intelligence workflow that connects sales, profitability, and inventory risk to decision-ready dashboards.",
    metric: "PostgreSQL warehouse | Streamlit | Power BI | Tableau",
    githubUrl: "https://github.com/VarunikaN/retail-performance-intelligence",
    body: `## The question

How can fragmented retail records become a reliable operating view for sales, margin, and inventory decisions?

## The approach

This project builds a dimensional PostgreSQL warehouse from retail order data, then publishes reusable KPI views for daily sales, store performance, category contribution, fulfillment, and stockout risk. A Streamlit application and BI-ready exports make the analysis usable across different decision contexts.

## Result

The result is a complete analytics workflow: source data through transformation, warehouse modeling, KPI definitions, and interactive reporting in Streamlit, Power BI, and Tableau.`,
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    category: "Predictive analytics",
    summary: "A machine-learning workflow for identifying customers at risk of churn from account and service-history signals.",
    metric: "0.79 accuracy | Random Forest + XGBoost",
    githubUrl: "https://github.com/VarunikaN/Customer-Churn-Prediction",
    body: `## The question

How can historical customer behavior be used to identify likely churn before it happens?

## The approach

The project compares Random Forest and XGBoost models using demographic, account, and service-usage features. It evaluates accuracy, precision, recall, and F1 score so that the classifier is assessed beyond one headline metric.

## Result

XGBoost reached **0.79 accuracy**, with both models recording an **F1 score of 0.59**. The repository includes the preprocessing, training, evaluation, and exploratory-analysis workflow.`,
  },
  {
    slug: "ava",
    title: "AVA",
    category: "Health-support web application",
    summary: "A web application that brings period, thyroid, and mental-health support resources into one accessible experience.",
    metric: "Web application | Health resources | User accounts",
    githubUrl: "https://github.com/VarunikaN/ava",
    body: `## The question

How can an accessible web experience bring common health-support resources together without making the user navigate disconnected pages?

## The approach

AVA combines account flows with dedicated resources for period and thyroid support, a calculator, educational blogs, and mental-health information covering topics such as anxiety, depression, ADHD, and postpartum depression.

## Result

The project demonstrates end-to-end web application development around a user-centered health-information experience, from authentication screens through topic-specific support pages.`,
  },
  {
    slug: "dynamic-quantization",
    title: "Dynamic quantization",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "grpo",
    title: "GRPO workflows",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "parameter-efficient-fine-tuning",
    title: "Parameter-efficient fine-tuning",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "quantization-aware-training",
    title: "Quantization-aware training",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "eyoh-safety",
    title: "EYOH safety and guardrails",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "physical-ai",
    title: "Physical AI and sim-to-real",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "synthetic-data",
    title: "Synthetic data systems",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "blender-simulation",
    title: "Blender simulation and scene generation",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "gpu-kernel-optimization",
    title: "GPU kernel optimization",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
  {
    slug: "voice-agent-validation",
    title: "Voice agent validation",
    category: "Company work",
    summary: "Available on request.",
    confidential: true,
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
