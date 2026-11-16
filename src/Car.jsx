import { motion } from "framer-motion";

const Wheel = ({ cx }) => (
  <motion.g
    style={{ transformBox: "fill-box", transformOrigin: "center" }}
    animate={{ rotate: 360 }}
    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
  >
    <circle cx={cx} cy="84" r="20" fill="#1b1b1f" />
    <circle cx={cx} cy="84" r="11" fill="#BFF2D0" stroke="#1b1b1f" strokeWidth="3" />
    <path d={`M${cx} 74V94M${cx - 10} 84H${cx + 10}`} stroke="#1b1b1f" strokeWidth="3" />
  </motion.g>
);

export default function Car({ className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 330 112"
      className={className}
      role="img"
      aria-label="Pastel sports car driving"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      <path
        d="M8 84 V66 Q8 58 20 56 L74 48 Q100 22 146 20 H204 Q240 24 262 48 L304 54 Q322 58 322 72 V84 Z"
        fill="#FFB6D3" stroke="#1b1b1f" strokeWidth="5" strokeLinejoin="round"
      />
      <path
        d="M100 46 Q116 30 146 28 H170 V46 Z M180 28 H204 Q226 32 240 46 H180 Z"
        fill="#B5E3FF" stroke="#1b1b1f" strokeWidth="4" strokeLinejoin="round"
      />
      <path d="M292 64 H316" stroke="#FFF1A8" strokeWidth="8" strokeLinecap="round" />
      <path d="M14 68 H30" stroke="#ff6b6b" strokeWidth="7" strokeLinecap="round" />
      <Wheel cx={82} />
      <Wheel cx={246} />
    </motion.svg>
  );
}
