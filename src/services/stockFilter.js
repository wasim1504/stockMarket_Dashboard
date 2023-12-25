import axios from "axios";

export async function fetchFilteredData({ name, range }) {
  const apiUrl = `https://cloud.iexapis.com/stable/stock/${name}/chart/${range}`; // hardcoded for apple
  const apiKey = "pk_8b66a7c668ad437c92721186d102732d"; // Replace YOUR_API_TOKEN with your actual IEX Cloud API token

  try {
    const response = await axios.get(apiUrl, { params: { token: apiKey } });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching stock data:", error.message);
  }
}

export async function fetchTodayStockData({ name }) {
  const apiKey = "pk_8b66a7c668ad437c92721186d102732d";
  const apiUrl = `https://cloud.iexapis.com/stable/stock/${name}/quote?token=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching todays stock data:", error.message);
    throw error;
  }
}
