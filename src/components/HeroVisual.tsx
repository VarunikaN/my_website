export function HeroVisual() {
  return (
    <div
      className="relative h-full min-h-[52vh] w-full overflow-hidden md:min-h-screen"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#9eb8c9_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(13,115,119,0.28)_0%,transparent_50%),linear-gradient(160deg,#b7c9d6_0%,#dfe8ef_42%,#c9d7e2_100%)]" />
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className="noise" />

      <div className="animate-drift absolute -right-[8%] top-[12%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(13,115,119,0.22),transparent_68%)] blur-2xl" />
      <div className="absolute left-[8%] top-[18%] h-[42%] w-[42%] rounded-full bg-[radial-gradient(circle,rgba(196,92,38,0.16),transparent_70%)] blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07131f" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#0d7377" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c45c26" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="depthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d7377" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#07131f" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Depth-field bands */}
        {[120, 200, 280, 360, 440, 520, 600, 680].map((y, i) => (
          <path
            key={y}
            d={`M40 ${y} C 180 ${y - 18 - i * 2}, 340 ${y + 22 + i}, 500 ${y - 8}, 660 ${y + 16}, 780 ${y - 12}, 860 ${y + 6}`}
            fill="none"
            stroke="#07131f"
            strokeOpacity={0.06 + i * 0.015}
            strokeWidth="1.2"
          />
        ))}

        {/* Robotic arm silhouette */}
        <g fill="none" stroke="url(#armGrad)" strokeWidth="2.4" strokeLinecap="round">
          <path
            className="arm-path"
            d="M210 720 L290 560 L410 500 L520 360 L610 300"
          />
          <path
            className="arm-path"
            d="M410 500 L470 560 L560 580"
            style={{ animationDelay: "0.9s" }}
          />
          <circle cx="290" cy="560" r="10" fill="#dfe8ef" stroke="#0d7377" strokeWidth="2" />
          <circle cx="410" cy="500" r="10" fill="#dfe8ef" stroke="#0d7377" strokeWidth="2" />
          <circle cx="520" cy="360" r="10" fill="#dfe8ef" stroke="#c45c26" strokeWidth="2" />
          {/* Gripper */}
          <path
            className="arm-path"
            d="M610 300 L650 270 M610 300 L655 320"
            style={{ animationDelay: "1.3s" }}
          />
        </g>

        {/* Target crate / object */}
        <g transform="translate(640 250)">
          <rect
            x="0"
            y="0"
            width="90"
            height="70"
            rx="4"
            fill="url(#depthGrad)"
            stroke="#07131f"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <path
            d="M10 22 H80 M10 40 H80 M10 55 H55"
            stroke="#0d7377"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        </g>

        {/* Scan line */}
        <rect
          className="scanline"
          x="0"
          y="0"
          width="900"
          height="48"
          fill="url(#depthGrad)"
          opacity="0.35"
        />
      </svg>

      <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between gap-4 md:bottom-12 md:left-10 md:right-10">
        <p className="max-w-xs font-[family-name:var(--font-jetbrains)] text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ink/55">
          Depth · Pose · Priority pick
          <br />
          Sim-to-real synthetic atlas
        </p>
        <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.18em] text-ink/45">
          01 / Atlas
        </p>
      </div>
    </div>
  );
}
