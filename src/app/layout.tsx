import type { Metadata } from "next";
import { JetBrains_Mono, Literata, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Varunika Naini — AI & ML Engineer",
  description:
    "Portfolio of Varunika Naini — sim-to-real robotics, quantization, LoRA, and generative AI systems. AI & ML Intern at Dheyo AI.",
  openGraph: {
    title: "Varunika Naini — AI & ML Engineer",
    description:
      "Building the bridge from synthetic worlds to real robots — quantization, LoRA, and sim-to-real pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${literata.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
