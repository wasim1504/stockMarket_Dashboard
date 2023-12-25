import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "3", label: "Last 3 Month" },
        { value: "6", label: "Last 6 Months" },
        { value: "12", label: "Last 1 Year" },
        { value: "36", label: "Last 3 Year" },
        { value: "60", label: "Last 5 Year" },
      ]}
    />
  );
}

export default DashboardFilter;
