import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ from = 0, to = 23500, duration = 1 }) => {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    // Reset to starting value before every animation
    count.set(from);
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest).toLocaleString("en-IN"));
      },
    });
    return controls.stop;
  }, [from, to, duration, count]);

  return (
    <motion.span>
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;
