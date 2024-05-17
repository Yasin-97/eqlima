import { motion } from "framer-motion";
import { ReactNode } from "react";
type BackdropType = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};
const Backdrop = ({ className, children, onClick }: BackdropType) => {
  return (
    <motion.div
      onClick={onClick}
      className={`backdrop ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
