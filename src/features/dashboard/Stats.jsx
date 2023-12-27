import { HiOutlineBanknotes, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Stat from "./Stat";

function Stats({ companyName, marketCap, iexOpen, iexClose }) {
  const formattedMarketCap = (marketCap / 1000000000).toFixed(2);
  const open = !iexOpen ? "Insufficient data" : iexOpen;
  const close = !iexClose ? "Insufficient data" : iexClose;
  return (
    <>
      <Stat
        title="companyName"
        color="yellow"
        icon={<HiOutlineBuildingLibrary />}
        value={companyName}
      />
      <Stat
        title="Last opened"
        color="blue"
        icon={<HiOutlineBanknotes />}
        value={open}
      />
      <Stat
        title="Last closed"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={close}
      />
      <Stat
        title="Market Cap"
        color="indigo"
        icon={<RiMoneyDollarCircleLine />}
        value={marketCap ? `${formattedMarketCap} B` : "Insufficient data"}
      />
    </>
  );
}

export default Stats;
