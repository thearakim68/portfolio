import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const T  = "#C85438";
const CR = "#F2EDE7";
const BK = "#111111";
const MU = "#8A857D";

const ROLES = ["Design", "Research", "Educate"] as const;
const CYCLE_MS = 4200;

const fv = {
  enter:  { opacity: 0, scale: 0.97 },
  center: { opacity: 1, scale: 1    },
  exit:   { opacity: 0, scale: 1.02 },
};

// ─────────────────────────────────────────────────────────────────────
// Frame 1 — Product Designer: annotated UI card
// ─────────────────────────────────────────────────────────────────────
function DesignFrame({ reduced }: { reduced: boolean }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" aria-label="Product design wireframe">
      {/* background grid */}
      <g opacity={0.03} stroke={T} strokeWidth={0.8}>
        {[0,50,100,150,200,250,300,350,400].map(v => (
          <g key={v}>
            <line x1={v} y1={0} x2={v} y2={400} />
            <line x1={0} y1={v} x2={400} y2={v} />
          </g>
        ))}
      </g>

      {/* ── UI Card ── */}
      <motion.rect x={90} y={70} width={220} height={155} rx={12}
        fill="white" stroke={T} strokeWidth={0.8} strokeOpacity={0.22}
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ filter: "drop-shadow(0 4px 16px rgba(200,84,56,0.07))" }}
      />

      {/* Header bar */}
      <clipPath id="hdr-clip"><rect x={90} y={70} width={220} height={36} rx={12} /></clipPath>
      <rect x={90} y={70} width={220} height={36} fill={T} clipPath="url(#hdr-clip)" />
      <rect x={90} y={92} width={220} height={14} fill={T} />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14 }}>
        <circle cx={108} cy={88} r={4.5} fill="rgba(255,255,255,0.28)" />
        <circle cx={122} cy={88} r={4.5} fill="rgba(255,255,255,0.28)" />
        <circle cx={136} cy={88} r={4.5} fill="rgba(255,255,255,0.28)" />
        <text x={200} y={92} textAnchor="middle" fontSize={9} fontWeight="600" fill="white" fontFamily="Inter, sans-serif">Dashboard</text>
        <circle cx={286} cy={88} r={9} fill="rgba(255,255,255,0.18)" />
      </motion.g>

      {/* Image placeholder */}
      <motion.rect x={100} y={116} width={200} height={52} rx={5} fill={CR}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}
      />
      <g opacity={0.1}>
        <line x1={100} y1={116} x2={300} y2={168} stroke={T} strokeWidth={0.5} />
        <line x1={300} y1={116} x2={100} y2={168} stroke={T} strokeWidth={0.5} />
      </g>

      {/* Text lines */}
      <motion.g initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32 }}>
        <rect x={100} y={180} width={112} height={7} rx={3} fill={CR} />
        <rect x={100} y={193} width={78}  height={5.5} rx={2.5} fill={CR} opacity={0.65} />
      </motion.g>

      {/* CTA button */}
      <motion.rect x={234} y={178} width={66} height={25} rx={7} fill={T}
        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.42, type: "spring", stiffness: 220, damping: 18 }}
      />
      <text x={267} y={194} textAnchor="middle" fontSize={7.5} fontWeight="600" fill="white" fontFamily="Inter, sans-serif">View more</text>

      {/* ── Annotations ── */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
        {/* Width */}
        <line x1={90}  y1={245} x2={310} y2={245} stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <line x1={90}  y1={241} x2={90}  y2={249} stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <line x1={310} y1={241} x2={310} y2={249} stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <text x={200} y={260} textAnchor="middle" fontSize={7.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.55}>220</text>
        {/* Height */}
        <line x1={322} y1={70}  x2={322} y2={225} stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <line x1={318} y1={70}  x2={326} y2={70}  stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <line x1={318} y1={225} x2={326} y2={225} stroke={T} strokeWidth={0.7} strokeOpacity={0.4} />
        <text x={338} y={152} textAnchor="middle" fontSize={7.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.55}
          transform="rotate(90, 338, 152)">155</text>
        {/* Corner radius */}
        <path d="M 90 97 Q 90 70 117 70" fill="none" stroke={T} strokeWidth={0.7} strokeOpacity={0.38} strokeDasharray="2 2.5" />
        <text x={54} y={92} fontSize={6.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.5}>rx:12</text>
      </motion.g>

      {/* ── Color tokens ── */}
      <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>
        {[T, CR, BK, "#B8B0A8"].map((c, i) => (
          <g key={c}>
            <circle cx={116 + i * 44} cy={308} r={14} fill={c} />
            <circle cx={116 + i * 44} cy={308} r={14} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={0.8} />
          </g>
        ))}
        <text x={200} y={336} textAnchor="middle" fontSize={8}   fill={MU} fontFamily="Inter, sans-serif">Design tokens</text>
        <text x={200} y={354} textAnchor="middle" fontSize={8.5} fontWeight="600" fill={T} fontFamily="Inter, sans-serif">ABA Bank · Figma · UX Research</text>
      </motion.g>

      {/* ── Animated cursor ── */}
      {!reduced && (
        <>
          <motion.circle r={4.5} fill={T} opacity={0.85}
            initial={{ cx: 267, cy: 191 }}
            animate={{ cx: [267, 150, 150, 200, 267], cy: [191, 188, 230, 308, 191] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* click flash at initial button position */}
          <motion.circle cx={267} cy={191} r={16} fill={T}
            animate={{ opacity: [0, 0.18, 0, 0, 0] }}
            transition={{ duration: 8, repeat: Infinity, times: [0, 0.04, 0.12, 0.5, 1] }}
          />
        </>
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Frame 2 — AI Researcher: ASEAN policy network
// ─────────────────────────────────────────────────────────────────────
const NODES = [
  { id: "pp", x: 200, y: 196, label: "PHNOM PENH", r: 10, primary: true },
  { id: "bk", x: 118, y: 152, label: "Bangkok",    r: 5.5 },
  { id: "hn", x: 258, y: 108, label: "Hanoi",      r: 5.5 },
  { id: "kl", x: 136, y: 268, label: "KL",         r: 5.5 },
  { id: "jk", x: 218, y: 316, label: "Jakarta",    r: 5.5 },
  { id: "mn", x: 294, y: 148, label: "Manila",     r: 5.5 },
  { id: "sg", x: 308, y: 266, label: "Singapore",  r: 5.5 },
  { id: "vt", x: 100, y: 232, label: "Vientiane",  r: 5   },
  { id: "tk", x: 322, y: 78,  label: "Tokyo",      r: 4.5, research: true },
] as const;

const PARTICLES = [
  { fi: 0, ti: 1, delay: 0.0 },
  { fi: 0, ti: 2, delay: 0.8 },
  { fi: 0, ti: 5, delay: 1.6 },
  { fi: 3, ti: 0, delay: 2.4 },
] as const;

function ResearchFrame({ reduced }: { reduced: boolean }) {
  const pp = NODES[0];
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" aria-label="ASEAN policy network graph">
      <defs>
        <radialGradient id="cg" cx="50%" cy="50%" r="42%">
          <stop offset="0%"   stopColor={T} stopOpacity={0.05} />
          <stop offset="100%" stopColor={T} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={400} height={400} fill="url(#cg)" />

      {/* Connection lines from PP to each city */}
      {NODES.slice(1).map((n, i) => (
        <motion.path key={n.id}
          d={`M ${pp.x},${pp.y} L ${n.x},${n.y}`}
          stroke={n.research ? "rgba(139,110,94,0.3)" : "rgba(200,84,56,0.22)"}
          strokeWidth={0.8} strokeDasharray="3 5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 + i * 0.07 }}
        />
      ))}
      {/* Cross-city connections */}
      {[
        [NODES[1], NODES[7]],
        [NODES[3], NODES[6]],
      ].map(([a, b], i) => (
        <motion.path key={`x${i}`}
          d={`M ${a.x},${a.y} L ${b.x},${b.y}`}
          stroke="rgba(200,84,56,0.12)" strokeWidth={0.6} strokeDasharray="2 5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 + i * 0.1 }}
        />
      ))}

      {/* Particles */}
      {!reduced && PARTICLES.map(({ fi, ti, delay }, i) => (
        <motion.circle key={i} r={2.5} fill={T}
          initial={{ cx: NODES[fi].x, cy: NODES[fi].y, opacity: 0 }}
          animate={{
            cx: [NODES[fi].x, NODES[ti].x],
            cy: [NODES[fi].y, NODES[ti].y],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}

      {/* PP pulse rings */}
      {!reduced && [0, 0.9, 1.8].map((delay, i) => (
        <motion.circle key={i} cx={pp.x} cy={pp.y} r={24}
          fill="none" stroke={T} strokeWidth={1.1}
          initial={{ scale: 0.3, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeOut" }}
          style={{ originX: `${pp.x}px`, originY: `${pp.y}px` }}
        />
      ))}

      {/* Nodes + labels */}
      {NODES.map((n, i) => {
        const col = n.research ? "#8B6E5E" : T;
        const lx  = n.x < 200 ? n.x - (n.r + 7) : n.x + (n.r + 7);
        return (
          <motion.g key={n.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 200, damping: 18 }}
          >
            {n.primary && <circle cx={n.x} cy={n.y} r={17} fill="rgba(200,84,56,0.1)" />}
            <circle cx={n.x} cy={n.y} r={n.r} fill={col} />
            {!n.primary && (
              <circle cx={n.x} cy={n.y} r={n.r + 2.5} fill="none" stroke={col} strokeWidth={0.7} opacity={0.3} />
            )}
            <text
              x={lx} y={n.y + 3}
              fontSize={n.primary ? 7.5 : 6.5}
              fontWeight={n.primary ? "700" : "500"}
              fill={n.primary ? T : (n.research ? "#8B6E5E" : BK)}
              textAnchor={n.x < 200 ? "end" : "start"}
              fontFamily="Inter, sans-serif" opacity={0.9}
            >{n.label}</text>
          </motion.g>
        );
      })}

      {/* Stats callout */}
      <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <rect x={72} y={356} width={256} height={22} rx={5} fill="rgba(200,84,56,0.06)" />
        <text x={200} y={371} textAnchor="middle" fontSize={8} fontWeight="600" fill={T} fontFamily="Inter, sans-serif">
          11 jurisdictions · 317+ policies · 3,000+ students
        </text>
      </motion.g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Frame 3 — Educator: typographic specimen
// ─────────────────────────────────────────────────────────────────────
const TYPE_SCALE = [
  { label: "H1",      size: "96", w: 150 },
  { label: "H2",      size: "72", w: 113 },
  { label: "H3",      size: "48", w:  75 },
  { label: "Body",    size: "20", w:  32 },
  { label: "Small",   size: "14", w:  22 },
  { label: "Caption", size: "11", w:  17 },
] as const;

function EducateFrame({ reduced: _ }: { reduced: boolean }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" aria-label="Typography specimen">
      {/* Lined paper bg */}
      <g opacity={0.04} stroke={T} strokeWidth={0.8}>
        {[88,110,132,154,176,198,220,242].map(y => (
          <line key={y} x1={40} y1={y} x2={360} y2={y} />
        ))}
      </g>

      {/* Section header */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
        <text x={45} y={60} fontSize={8} fontWeight="700" fill={T} fontFamily="Inter, sans-serif" letterSpacing="0.1em">TYPE SCALE</text>
        <line x1={45} y1={66} x2={178} y2={66} stroke={T} strokeWidth={0.7} strokeOpacity={0.35} />
      </motion.g>

      {/* Type scale bars */}
      {TYPE_SCALE.map((ts, i) => (
        <motion.g key={ts.label}
          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
        >
          <text x={45} y={91 + i * 22} fontSize={7}   fill={MU} fontFamily="Inter, sans-serif">{ts.label}</text>
          <text x={80} y={91 + i * 22} fontSize={7}   fontWeight="600" fill={BK} fontFamily="Inter, sans-serif">{ts.size}</text>
          <motion.rect x={104} y={83 + i * 22} height={9} rx={2} fill={T} opacity={0.72}
            initial={{ width: 0 }} animate={{ width: ts.w }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
          />
        </motion.g>
      ))}

      {/* Large "Aa" letterform */}
      <motion.text x={268} y={248} textAnchor="middle" fontSize={128} fontWeight="700"
        fill={CR} fontFamily="Fraunces, serif"
        initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        style={{ originX: "268px", originY: "184px" }}
      >Aa</motion.text>

      <motion.text x={268} y={248} textAnchor="middle" fontSize={128} fontWeight="700"
        fill="none" stroke={BK} strokeWidth={0.5} strokeOpacity={0.1} fontFamily="Fraunces, serif"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}
      >Aa</motion.text>

      {/* Typographic annotation lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <line x1={186} y1={250} x2={358} y2={250} stroke={T} strokeWidth={0.8} strokeOpacity={0.45} />
        <text x={182} y={254} textAnchor="end" fontSize={6.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.55}>baseline</text>

        <line x1={186} y1={124} x2={358} y2={124} stroke={T} strokeWidth={0.6} strokeOpacity={0.25} strokeDasharray="2 3" />
        <text x={182} y={128} textAnchor="end" fontSize={6.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.42}>cap height</text>

        <line x1={186} y1={186} x2={358} y2={186} stroke={T} strokeWidth={0.6} strokeOpacity={0.18} strokeDasharray="2 3" />
        <text x={182} y={190} textAnchor="end" fontSize={6.5} fill={T} fontFamily="Inter, sans-serif" opacity={0.35}>x-height</text>
      </motion.g>

      {/* Stats */}
      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}>
        <text x={45} y={316} fontSize={44} fontWeight="700" fill={T} fontFamily="Inter, sans-serif">981</text>
        <text x={45} y={340} fontSize={10} fill={MU} fontFamily="Inter, sans-serif">claps · Typography on Medium</text>
        <rect x={45} y={350} width={200} height={1} fill={T} opacity={0.2} />
        <text x={45} y={364} fontSize={8} fontWeight="600" fill={T} fontFamily="Inter, sans-serif">@thearakim68 · Medium</text>
      </motion.g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────
export function HeroVisual() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion() ?? false;

  // Auto-cycle through roles
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActive(i => (i + 1) % 3), CYCLE_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const frames = [
    <DesignFrame   key="design"   reduced={reduced} />,
    <ResearchFrame key="research" reduced={reduced} />,
    <EducateFrame  key="educate"  reduced={reduced} />,
  ];

  return (
    <div className="relative w-full h-full flex flex-col select-none">

      {/* Frame area */}
      <div className="relative flex-1 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={fv}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            {frames[active]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Role tabs + progress bar */}
      <div className="flex flex-col gap-2 pt-3 px-1">
        <div className="flex gap-5">
          {ROLES.map((label, idx) => (
            <button key={label} onClick={() => setActive(idx)}
              className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 cursor-pointer ${
                idx === active ? "text-primary" : "text-muted-foreground/40 hover:text-muted-foreground/65"
              }`}
            >{label}</button>
          ))}
        </div>

        <div className="flex gap-2">
          {ROLES.map((_, idx) => (
            <div key={idx} className={`flex-1 h-[2px] rounded-full overflow-hidden ${idx < active ? "bg-primary" : "bg-border/50"}`}>
              {idx === active && (
                <motion.div
                  key={active}
                  className="h-full w-full bg-primary rounded-full origin-left"
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: reduced ? 0 : CYCLE_MS / 1000, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
