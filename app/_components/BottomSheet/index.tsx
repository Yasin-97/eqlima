import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BottomSheetType = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
};

const BottomSheet = ({
  children,
  title,
  isOpen,
  handleClose,
  className,
}: BottomSheetType) => {
  const bottomSheetRef = useRef(null);

  function useOutsieClick(ref: any) {
    useEffect(() => {
      function handleClickOutside(evnet: any) {
        if (ref.current && !ref.current.contains(evnet.target)) {
          handleClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsieClick(bottomSheetRef);

  return (
    <div className={className}>
      <motion.div
        animate={
          isOpen ? { opacity: 0.6, zIndex: 3 } : { opacity: 0, display: "none" }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 bottom-0 right-0 left-0 h-full w-screen bg-[#000015d7]"
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: "100%", height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className=" fixed z-10 w-full rounded-t-3xl left-0 right-0 bottom-0 bg-[#1c1c24]"
          >
            <div ref={bottomSheetRef} className=" p-4 pb-8">
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
    </div>
  );
};

export default BottomSheet;
