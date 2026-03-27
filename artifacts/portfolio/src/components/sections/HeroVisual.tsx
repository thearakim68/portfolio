import { motion } from "framer-motion";

const tags = [
  { label: "UX Design", angle: 35, orbit: 1 },
  { label: "AI Research", angle: 130, orbit: 0.8 },
  { label: "Cambodia", angle: 225, orbit: 1.1 },
  { label: "Educator", angle: 310, orbit: 0.9 },
];

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: "100%", height: "100%" }}>

      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full rounded-[2rem]"
        style={{
          border: "1px dashed rgba(200, 84, 56, 0.18)",
        }}
      />

      {/* Middle counter-spin ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute"
        style={{
          width: "75%",
          height: "75%",
          borderRadius: "50%",
          border: "1px solid rgba(200, 84, 56, 0.12)",
        }}
      />

      {/* Inner pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          border: "1.5px solid rgba(200, 84, 56, 0.25)",
        }}
      />

      {/* Soft gradient background glow */}
      <div
        className="absolute"
        style={{
          width: "55%",
          height: "55%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,84,56,0.1) 0%, rgba(200,84,56,0.03) 60%, transparent 100%)",
        }}
      />

      {/* Floating discipline tags — orbit outer ring */}
      {tags.map((tag, i) => {
        const rad = (tag.angle * Math.PI) / 180;
        const radius = 42; // percent of container
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);

        return (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary border border-primary/20 whitespace-nowrap shadow-sm"
              style={{ boxShadow: "0 2px 12px rgba(200,84,56,0.08)" }}
            >
              {tag.label}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Dot on outer ring — rotates with it */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
        style={{ borderRadius: "2rem" }}
      >
        <div
          className="absolute"
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "rgba(200,84,56,0.5)",
            top: "50%",
            right: -5,
            marginTop: -5,
          }}
        />
      </motion.div>

      {/* Center monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        {/* Subtle card backdrop */}
        <div
          className="absolute"
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(242, 237, 231, 0.9)",
            backdropFilter: "blur(8px)",
          }}
        />

        <span
          className="font-serif font-bold text-foreground relative z-10 select-none leading-none"
          style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          KT
        </span>
        <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.18em] relative z-10 mt-1">
          Kim Theara
        </span>
      </motion.div>

      {/* Bottom badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 text-xs font-medium text-muted-foreground shadow-sm whitespace-nowrap"
        style={{ zIndex: 20 }}
      >
        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
        Based in Phnom Penh, Cambodia
      </motion.div>

    </div>
  );
}
