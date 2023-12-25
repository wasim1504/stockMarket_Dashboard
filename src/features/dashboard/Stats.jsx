import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Stat from "./Stat";

function Stats({ latestTime, marketCap, iexOpen, iexClose }) {
  return (
    <>
      <Stat
        title="Opening Price"
        color="blue"
        icon={<HiOutlineBanknotes />}
        value={iexOpen}
      />
      <Stat
        title="Closing Price"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={iexClose}
      />
      <Stat
        title="Market Cap"
        color="indigo"
        icon={<RiMoneyDollarCircleLine />}
        value={marketCap}
      />
      <Stat
        title="Last opened"
        color="yellow"
        icon={<HiOutlineCalendarDays />}
        value={latestTime}
      />
    </>
  );
}

export default Stats;
