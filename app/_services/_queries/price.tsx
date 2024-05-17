"use client";
import { useState, useEffect } from "react";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { BASE_API_URL } from "@/app/_utils/checkEnv";
import { PriceType } from "@/app/_type/trade";

export const useGetPrice = () => {
  const [priceData, setPriceData] = useState<PriceType>();

  useEffect(() => {
    const fetchData = async () => {
      await fetchEventSource(`${BASE_API_URL}/prices`, {
        method: "GET",
        headers: {
          Accept: "text/event-stream",
        },
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client side error ", res);
          }
        },
        onmessage(event) {
          if (event.data) {
            const parsedData = JSON.parse(event.data);
            console.log("on message", parsedData);

            setPriceData(parsedData);
          }
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };
    fetchData();
  }, []);
  return priceData;
};
