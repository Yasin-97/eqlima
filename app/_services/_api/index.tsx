import { TradeType } from "@/app/_type/trade";
import { axiosInstance } from "@/app/_utils/axiosInstance";

export const buyOrder = async (data: TradeType) => {
  await axiosInstance.post("order/buy", data);
};

export const sellOrder = async (data: TradeType) => {
  await axiosInstance.post("order/sell", data);
};
