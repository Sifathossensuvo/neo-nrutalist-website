import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";

const from = {
  up: { y: 40 },
  left: { x: -60 },
  right: { x: 60 },
  pop: { scale: 0.8, rotate: -4 },
};

export const Reveal = ({ children, v = "up", d = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, ...from[v] }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ type: "spring", stiffness: 120, damping: 16, delay: d }}
  >
    {children}
  </motion.div>
);

export const Sec = ({ id, bg = "bg-paper", children, className = "" }) => (
  <section id={id} className={`relative overflow-hidden border-b-4 border-ink px-5 py-16 sm:px-8 md:py-24 ${bg} ${className}`}>
    <div className="relative mx-auto max-w-6xl">{children}</div>
  </section>
);

export const Title = ({ children, sticker, color = "bg-butter" }) => (
  <Reveal v="pop" className="mb-10 flex flex-wrap items-center gap-4 md:mb-14">
    <h2 className="font-display text-4xl leading-none sm:text-5xl md:text-7xl">{children}</h2>
    {sticker && (
      <motion.span
        aria-hidden="true"
        className={`nb-sm inline-block px-3 py-1 text-2xl md:text-3xl ${color}`}
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {sticker}
      </motion.span>
    )}
  </Reveal>
);

export const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
};
