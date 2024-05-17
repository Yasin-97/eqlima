"use client";
import BottomSheet from "@/app/_components/BottomSheet";
import TradeCard from "./TradeCard";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {};

const Trade = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center md:justify-center gap-5 md:flex-row w-full mt-40">
        <TradeCard tradeType="buy" />
        <TradeCard tradeType="sell" />
      </div>
    </>
  );
};

export default Trade;
