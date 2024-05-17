import React, { ReactNode } from "react";
import ModalBase from "../ModalBase";
import BottomSheet from "../BottomSheet";
import { useMediaQuery } from "react-responsive";

type ModalSheetType = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
};

const ModalSheet = ({
  children,
  title,
  isOpen,
  handleClose,
}: ModalSheetType) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <>
      {isMobile && (
        <BottomSheet handleClose={handleClose} isOpen={isOpen} title={title}>
          {children}
        </BottomSheet>
      )}
      {!isMobile && (
        <ModalBase handleClose={handleClose} title={title} isOpen={isOpen}>
          {children}
        </ModalBase>
      )}
    </>
  );
};

export default ModalSheet;
