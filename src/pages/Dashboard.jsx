import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

import Row from "../ui/Row";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { searchSymbol } from "../services/stockFilter";
import Form from "../ui/Form";

function Dashboard() {
  const [query, setQuery] = useState("AAPL");
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) {
      const symbol = searchSymbol(input);
      symbol.then((val) => {
        console.log(val);
        setQuery(val);
      });

      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <Row type="virtical">
        <Form onSubmit={handleSearch}>
          <Input
            id="searchbar"
            type="text"
            placeholder="Search by symbol for better result"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Row>
      <Row type="horizontal">
        <DashboardFilter />
      </Row>
      <DashboardLayout query={query} />
    </>
  );
}

export default Dashboard;
