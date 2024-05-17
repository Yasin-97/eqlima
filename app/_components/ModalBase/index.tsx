import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "./Backdrop";
import { ReactNode } from "react";

type ModalBaseType = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
};
const ModalBase = ({
  className,
  children,
  title,
  isOpen,
  handleClose,
}: ModalBaseType) => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <motion.div
          className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-[#000015d7]"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className=" w-[450px] p-4  rounded-[15px] bg-[#1c1c24] ">
            <div className="flex justify-between pb-2 mb-2 border-b-2 border-gray-600">
              <h3 className="font-semibold text-[18px] leading-[26px] text-left text-gray-100 truncate">
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="font-semibold text-[18px] text-gray-200"
              >
                X
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalBase;
