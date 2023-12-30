import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

import Row from "../ui/Row";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import Form from "../ui/Form";
import { searchSymbol } from "../services/stockFilter";

function Dashboard() {
  const [query, setQuery] = useState("AAPL");
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (input) {
      searchSymbol(input)
        .then((symbols) => {
          setSearchResults(symbols);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      setSearchResults([]);
    }
  }, [input]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSymbolSelect();
    }
  };
  const handleSymbolSelect = (symbol) => {
    setQuery(symbol);
    setInput("");
  };

  return (
    <>
      <Row type="virtical">
        <Form>
          <Input
            id="searchbar"
            type="text"
            placeholder="Search stocks..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button type="button" onClick={() => handleSymbolSelect()}>
            search
          </Button>
          {searchResults.length > 0 && (
            <div>
              <ul>
                {searchResults.map((stock) => (
                  <li
                    key={stock.symbol}
                    onClick={() => handleSymbolSelect(stock.symbol)}
                    style={{ cursor: "pointer", listStyle: "none" }}
                  >
                    <span>
                      {stock.symbol}--{stock.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
