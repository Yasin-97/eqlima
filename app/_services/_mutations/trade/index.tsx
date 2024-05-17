import { useMutation } from "@tanstack/react-query";
import { buyOrder, sellOrder } from "../../_api";
import { TradeType } from "@/app/_type/trade";
import { toast } from "react-toastify";

export function useSellOrder() {
  return useMutation({
    mutationFn: (data: TradeType) => sellOrder(data),

    onSuccess: () => {
      toast.success("فروش با موفقیت انجام شد");
    },
  });
}

export function useBuyOrder() {
  return useMutation({
    mutationFn: (data: TradeType) => buyOrder(data),

    onSuccess: () => {
      toast.success("خرید با موفقیت انجام شد");
    },
  });
}
