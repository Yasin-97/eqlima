"use client";
import Button from "@/app/_components/Button";
import { useGetPrice } from "@/app/_services/_queries/price";
import { useBuyOrder, useSellOrder } from "@/app/_services/_mutations/trade";
import FormField from "@/app/_components/FormField";
import { FormEvent, useState } from "react";
import ModalSheet from "@/app/_components/ModalSheet";
import { toast } from "react-toastify";

type TradCardType = {
  tradeType: "buy" | "sell";
};
const TradeCard = ({ tradeType }: TradCardType) => {
  const [tradeAmount, setTradeAmount] = useState<string>("");

  const price = useGetPrice();
  const buyOrder = useBuyOrder();
  const sellOrder = useSellOrder();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tradeAmount !== "") {
      if (price && tradeType === "buy") {
        await buyOrder.mutateAsync({
          price: price.buyPrice,
          weight: tradeAmount!,
        });
        close();
        setTradeAmount("");
      }
      if (price && tradeType === "sell") {
        await sellOrder.mutateAsync({
          price: price.sellPrice,
          weight: tradeAmount!,
        });
        close();
        setTradeAmount("");
      }
    } else {
      toast.error("مقدار را وارد کنید.");
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="w-full max-w-[388px] flex flex-col items-center rounded-[15px] bg-[#1c1c24] p-4 pt-10">
      <h1 className=" font-semibold text-[18px] text-white text-left mb-8">
        {tradeType === "buy" ? "قیمت خرید" : "قیمت فروش"}
      </h1>
      <div className="flex gap-1 mb-12">
        {price && (
          <>
            <h3 className="font-semibold leading-[26px] text-left text-white truncate">
              {tradeType === "buy"
                ? price?.buyPrice.toLocaleString()
                : price?.sellPrice.toLocaleString()}
            </h3>
            <span className="font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              ریال
            </span>
          </>
        )}
        {!price && (
          <h3 className="font-semibold leading-[26px] text-left text-[#b2b3bd] truncate">
            درحال بارگذاری...
          </h3>
        )}
      </div>
      <Button
        className={`mt-5 w-full font-semibold text-[20px] ${
          tradeType === "buy" ? "bg-green-400" : "bg-red-400"
        }`}
        title={tradeType === "buy" ? "خرید" : "فروش"}
        handleClick={() => (modalOpen ? close() : open())}
      />
      <ModalSheet
        title={`ثبت سفارش ${tradeType === "buy" ? "خرید" : "فروش"}`}
        handleClose={close}
        isOpen={modalOpen}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full mt-[65px] flex flex-col gap-[30px]"
        >
          <FormField
            labelName="مقدار"
            placeholder="مقدار را به گرم وارد کنید"
            inputType="text"
            maxLength={5}
            value={tradeAmount}
            handleChange={(e) => setTradeAmount(e.target.value)}
          />
          <div className="flex justify-center items-center mt-[40px] gap-5">
            <Button
              btnType="submit"
              isLoading={buyOrder.isPending || sellOrder.isPending}
              title={tradeType === "buy" ? "خرید" : "فروش"}
              className={`${
                tradeType === "buy" ? "bg-green-400" : "bg-red-400"
              } flex-[2]`}
            />
            <Button
              btnType="button"
              title="انصراف"
              className="flex-1 bg-gray-500"
              handleClick={close}
            />
          </div>
        </form>
      </ModalSheet>
    </div>
  );
};

export default TradeCard;
