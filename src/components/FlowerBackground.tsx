import { motion } from "framer-motion";
import { useMemo } from "react";

const FlowerBackground = () => {
  const flowers = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        top: `${8 + Math.random() * 80}%`,
        left: `${5 + Math.random() * 85}%`,
        size: 30 + Math.random() * 50,
        opacity: 0.06 + Math.random() * 0.06,
        rotation: Math.random() * 360,
        duration: 12 + Math.random() * 10,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {flowers.map((f) => (
        <motion.svg
          key={f.id}
          className="absolute text-flower"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
          }}
          initial={{ opacity: 0, rotate: f.rotation }}
          animate={{
            opacity: f.opacity,
            y: [0, -15, 0, 10, 0],
            rotate: [f.rotation, f.rotation + 20, f.rotation - 10, f.rotation],
          }}
          transition={{
            opacity: { duration: 2, delay: f.delay },
            y: { duration: f.duration, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: f.duration * 1.3, repeat: Infinity, ease: "easeInOut" },
          }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse key={angle} cx="50" cy="30" rx="18" ry="25" transform={`rotate(${angle} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="12" />
        </motion.svg>
      ))}
    </div>
  );
};

export default FlowerBackground;
