import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import {
  fetchFilteredData,
  fetchTodayStockData,
} from "../../services/stockFilter";

// import { searchSymbol } from "../../services/stockList";

export function useFilterStocks() {
  const [searchParams] = useSearchParams();

  const numMonths = !searchParams.get("last")
    ? 1
    : Number(searchParams.get("last"));
  const range = `${numMonths}m`;

  const { isLoading, data: filterData } = useQuery({
    queryFn: () => fetchFilteredData({ name: "AAPL", range }),
    queryKey: ["filterData", "AAPL", range],
  });

  return { isLoading, filterData };
}

export function useTodaysData() {
  const { isLoading, data: todaysData } = useQuery({
    queryFn: () => fetchTodayStockData({ name: "AAPL" }),
    queryKey: ["todaysData", "AAPL"],
  });
  return { isLoading, todaysData };
}
