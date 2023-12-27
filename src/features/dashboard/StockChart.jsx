import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Spinner from "../../ui/Spinner";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function StockChart({ filterData, isLoading }) {
  const { isDarkMode } = useDarkMode();

  if (isLoading) return <Spinner />;

  const colors = isDarkMode
    ? {
        open: { stroke: "#c7c6e3", fill: "#6059da" },
        close: { stroke: "#2c58e7", fill: "#119240" },
        high: { stroke: "#c6f40e", fill: "#0cb4b4" },
        low: { stroke: "#830505", fill: "#158a78" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        open: { stroke: "#4f46e5", fill: "#c7d2fe" },
        close: { stroke: "#b80a0a", fill: "#a5b1e0" },
        high: { stroke: "#140443", fill: "#73dfcd" },
        low: { stroke: "#0dcd50", fill: "#ceafa4" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <ResponsiveContainer height={325} width="100%">
        <AreaChart data={filterData}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="open"
            type="monotone"
            stroke={colors.open.stroke}
            fill={colors.open.fill}
            strokeWidth={2}
            name="open"
            unit="$"
          />
          <Area
            dataKey="close"
            type="monotone"
            stroke={colors.close.stroke}
            fill={colors.close.fill}
            strokeWidth={2}
            name="close"
            unit="$"
          />
          <Area
            dataKey="high"
            type="monotone"
            stroke={colors.high.stroke}
            fill={colors.high.fill}
            strokeWidth={2}
            name="High"
            unit="$"
          />
          <Area
            dataKey="low"
            type="monotone"
            stroke={colors.low.stroke}
            fill={colors.low.fill}
            strokeWidth={2}
            name="Low"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default StockChart;
