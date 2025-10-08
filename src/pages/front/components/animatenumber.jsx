import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ from = 0, to = 23500, duration = 1 }) => {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest).toLocaleString("en-IN"));
      },
    });

    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span className="text-yellow-500 font-bold">
      ₹{displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;
