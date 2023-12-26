import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import {
  fetchFilteredData,
  fetchTodayStockData,
} from "../../services/stockFilter";

// import { searchSymbol } from "../../services/stockList";

export function useFilterStocks(query) {
  const [searchParams] = useSearchParams();

  const numMonths = !searchParams.get("last")
    ? 1
    : Number(searchParams.get("last"));
  const range = `${numMonths}m`;

  const { isLoading, data: filterData } = useQuery({
    queryFn: () => fetchFilteredData(query, range),
    queryKey: ["filterData", query, range],
  });

  return { isLoading, filterData };
}

export function useTodaysData(query) {
  const { isLoading, data: todaysData } = useQuery({
    queryFn: () => fetchTodayStockData(query),
    queryKey: ["todaysData", query],
  });
  return { isLoading, todaysData };
}
