import styled from "styled-components";
// import { useRecentStays } from "./useRecentStays";
import { useFilterStocks, useTodaysData } from "./useRecentStocks";
// import { useTodaysData } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
// import Stats from "./Stats";
// import { useCabins } from "../cabins/useCabins";
import StockChart from "./StockChart";
import Stats from "./Stats";
// import DurationChart from "./DurationChart";
// import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { filterData, isLoading: isLoading1 } = useFilterStocks();
  const { todaysData, isLoading: isLoading2 } = useTodaysData();
  // const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  // const { cabins, isLoading: isLoading3 } = useCabins();

  // if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  if (isLoading1 || isLoading2) return <Spinner />;
  // console.log(filterData);
  console.log(todaysData);

  return (
    <StyledDashboardLayout>
      <Stats {...todaysData} />
      <StockChart filterData={filterData} isLoading={isLoading1} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
