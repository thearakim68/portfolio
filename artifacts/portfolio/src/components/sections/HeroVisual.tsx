import { motion } from "framer-motion";

// ─── Projection ──────────────────────────────────────────────
const W = 520, H = 580;
const LON_MIN = 90, LON_MAX = 148;
const LAT_MAX = 40, LAT_MIN = -12;

function proj(lon: number, lat: number): { x: number; y: number } {
  return {
    x: Math.round(((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W),
    y: Math.round(((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H),
  };
}

// ─── City Data ────────────────────────────────────────────────
type Anchor = "start" | "end" | "middle";

interface City {
  id: string;
  name: string;
  sub?: string;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: Anchor;
  primary?: boolean;
  research?: boolean;
}

// ASEAN 10 capitals + Timor-Leste + Japan research
const ppPos = proj(104.92, 11.55);  // Phnom Penh: (134, 318)

const cities: City[] = [
  { id: "pp",  name: "Phnom Penh", sub: "Cambodia · Kim's Base", ...ppPos, primary: true, lx: 13, ly: -9, anchor: "start" },
  { id: "bkk", name: "Bangkok",    ...proj(100.52, 13.75), lx: -10, ly:  0, anchor: "end" },
  { id: "han", name: "Hanoi",      ...proj(105.85, 21.03), lx:  10, ly: -5, anchor: "start" },
  { id: "jkt", name: "Jakarta",    ...proj(106.85, -6.21), lx:  10, ly: -4, anchor: "start" },
  { id: "kul", name: "Kuala Lumpur", ...proj(101.69, 3.14), lx: -10, ly:  0, anchor: "end" },
  { id: "sin", name: "Singapore",  ...proj(103.82,  1.36), lx:  10, ly:  6, anchor: "start" },
  { id: "npt", name: "Myanmar",    ...proj( 96.11, 19.76), lx:  10, ly: -7, anchor: "start" },
  { id: "mnl", name: "Manila",     ...proj(120.97, 14.60), lx:  10, ly: -4, anchor: "start" },
  { id: "vie", name: "Vientiane",  ...proj(102.63, 17.97), lx: -10, ly: -4, anchor: "end" },
  { id: "bsb", name: "Brunei",     ...proj(114.94,  4.94), lx:  10, ly: -4, anchor: "start" },
  { id: "dil", name: "Dili",       ...proj(125.57, -8.56), lx:  10, ly: -4, anchor: "start" },
  { id: "jpn", name: "Japan", sub: "Kagawa University", ...proj(134.04, 34.34), research: true, lx: -10, ly: -5, anchor: "end" },
];

// ─── Land Shapes (impressionistic, not cartographic) ──────────
const LANDS = [
  // Indochina Peninsula (Myanmar + Thailand + Laos + Cambodia + Vietnam + Malay Pen)
  "M 35,175 72,138 126,185 170,325 136,348 126,432 90,410 72,370 30,265 Z",
  // Borneo
  "M 170,368 212,348 255,352 278,374 280,422 262,468 228,488 192,478 168,448 162,408 168,378 Z",
  // Sumatra
  "M 44,388 82,362 148,476 112,508 Z",
  // Java
  "M 148,505 170,499 196,504 206,518 198,530 170,534 148,528 Z",
  // Philippines — Luzon
  "M 268,254 282,246 294,258 290,294 278,308 266,296 262,274 Z",
  // Philippines — Visayas
  "M 296,308 312,305 322,318 312,328 298,325 Z",
  // Philippines — Mindanao
  "M 300,342 318,337 335,350 332,374 312,380 300,365 Z",
  // Japan (Honshu + Kyushu)
  "M 360,96 372,82 396,60 420,40 446,22 452,28 426,46 396,62 374,84 357,100 Z",
  // Sulawesi
  "M 258,400 272,388 284,398 280,420 268,428 257,418 Z",
];

const TERRACOTTA = "#C85438";

export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        aria-label="Map of Southeast Asia showing Kim Theara's impact across 11 ASEAN jurisdictions"
      >
        {/* ── Graticule grid ── */}
        <g opacity={0.06} stroke={TERRACOTTA} strokeWidth={0.6} fill="none">
          {[-10, 0, 10, 20, 30].map(lat => {
            const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H;
            return <line key={`lat${lat}`} x1={0} y1={y} x2={W} y2={y} />;
          })}
          {[90, 100, 110, 120, 130, 140].map(lon => {
            const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W;
            return <line key={`lon${lon}`} x1={x} y1={0} x2={x} y2={H} />;
          })}
        </g>

        {/* ── Land masses ── */}
        {LANDS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="rgba(200,84,56,0.07)"
            stroke="rgba(200,84,56,0.18)"
            strokeWidth={0.8}
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 + i * 0.03 }}
          />
        ))}

        {/* ── Connection lines from Phnom Penh ── */}
        {cities
          .filter(c => c.id !== "pp")
          .map((city, i) => (
            <motion.path
              key={`line-${city.id}`}
              d={`M ${ppPos.x},${ppPos.y} L ${city.x},${city.y}`}
              stroke={city.id === "jpn" ? "rgba(139,110,94,0.35)" : "rgba(200,84,56,0.22)"}
              strokeWidth={0.8}
              strokeDasharray="3 5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: "easeOut" }}
            />
          ))}

        {/* ── Phnom Penh pulse rings (opacity-only, avoids r=undefined bug) ── */}
        {[
          { delay: 0.6, initialOpacity: 0.55 },
          { delay: 1.5, initialOpacity: 0.35 },
        ].map(({ delay, initialOpacity }, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={ppPos.x}
            cy={ppPos.y}
            r={26}
            fill="none"
            stroke={TERRACOTTA}
            strokeWidth={1.2}
            initial={{ scale: 0.28, opacity: initialOpacity }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay }}
            style={{ originX: `${ppPos.x}px`, originY: `${ppPos.y}px` }}
          />
        ))}

        {/* ── City dots and labels ── */}
        {cities.map((city, i) => {
          const isPrimary = city.primary === true;
          const isResearch = city.research === true;
          const dotColor = isResearch ? "#8B6E5E" : TERRACOTTA;
          const dotR = isPrimary ? 5.5 : 3.5;
          const lx = city.x + city.lx;
          const ly = city.y + city.ly;

          return (
            <motion.g
              key={city.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.45 + i * 0.055 }}
            >
              {/* Halo behind primary dot */}
              {isPrimary && (
                <circle cx={city.x} cy={city.y} r={11} fill="rgba(200,84,56,0.13)" />
              )}

              {/* Dot */}
              <circle cx={city.x} cy={city.y} r={dotR} fill={dotColor} />

              {/* Outer ring for secondary dots */}
              {!isPrimary && (
                <circle
                  cx={city.x} cy={city.y} r={dotR + 2.2}
                  fill="none" stroke={dotColor} strokeWidth={0.7} opacity={0.35}
                />
              )}

              {/* Primary label */}
              {isPrimary && (
                <>
                  <text
                    x={lx} y={ly}
                    fontSize={9} fontWeight="700"
                    fill={TERRACOTTA}
                    textAnchor={city.anchor}
                    fontFamily="Inter, sans-serif"
                    letterSpacing="0.04em"
                  >
                    PHNOM PENH
                  </text>
                  {city.sub && (
                    <text
                      x={lx} y={ly + 11}
                      fontSize={6.5} fontWeight="400"
                      fill="#6B6860"
                      textAnchor={city.anchor}
                      fontFamily="Inter, sans-serif"
                    >
                      {city.sub}
                    </text>
                  )}
                </>
              )}

              {/* Secondary label */}
              {!isPrimary && (
                <>
                  <text
                    x={lx} y={ly}
                    fontSize={7} fontWeight={isResearch ? "600" : "500"}
                    fill={isResearch ? "#8B6E5E" : "#111111"}
                    textAnchor={city.anchor}
                    fontFamily="Inter, sans-serif"
                    opacity={0.85}
                  >
                    {city.name}
                  </text>
                  {city.sub && (
                    <text
                      x={lx} y={ly + 9}
                      fontSize={6} fontWeight="400"
                      fill="#6B6860"
                      textAnchor={city.anchor}
                      fontFamily="Inter, sans-serif"
                    >
                      {city.sub}
                    </text>
                  )}
                </>
              )}
            </motion.g>
          );
        })}

        {/* ── Stat callout box — top-left (clear of all city labels) ── */}
        <motion.g
          transform="translate(8, 10)"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <rect
            width={163} height={62} rx={6}
            fill="rgba(250,250,248,0.94)"
            stroke="rgba(200,84,56,0.18)" strokeWidth={0.8}
          />
          <text
            x={10} y={18} fontSize={7} fontWeight={700}
            fill={TERRACOTTA} fontFamily="Inter, sans-serif" letterSpacing="0.08em"
          >
            ASEAN REACH
          </text>
          <text x={10} y={31} fontSize={7} fill="#111111" fontFamily="Inter, sans-serif">
            <tspan fontWeight="700">11</tspan>{"  jurisdictions tracked"}
          </text>
          <text x={10} y={43} fontSize={7} fill="#111111" fontFamily="Inter, sans-serif">
            <tspan fontWeight="700">317+</tspan>{"  policy resources"}
          </text>
          <text x={10} y={55} fontSize={7} fill="#111111" fontFamily="Inter, sans-serif">
            <tspan fontWeight="700">3,000+</tspan>{"  students taught"}
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
