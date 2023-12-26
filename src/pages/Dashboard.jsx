import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

import Row from "../ui/Row";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";

function Dashboard() {
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    setQuery(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Row type="virtical">
        <Input
          id="searchbar"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Row>
      <Row type="horizontal">
        <DashboardFilter />
      </Row>
      <DashboardLayout query={query || "AAPL"} />
    </>
  );
}

export default Dashboard;
