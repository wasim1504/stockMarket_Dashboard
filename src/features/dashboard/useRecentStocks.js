import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import {
  fetchFilteredData,
  fetchTodayStockData,
  searchSymbol,
} from "../../services/stockFilter";

// import { searchSymbol } from "../../services/stockList";

export function useFilterStocks(query) {
  const [searchParams] = useSearchParams();

  const numMonths = !searchParams.get("last")
    ? 3
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

export function useSearchSymbol(input) {
  const { isLoading, data: symbol } = useQuery({
    queryFn: () => searchSymbol(input),
    queryKey: ["symbol", input],
  });
  return { isLoading, symbol };
}
