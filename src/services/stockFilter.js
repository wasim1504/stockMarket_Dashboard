import axios from "axios";
import { toast } from "react-hot-toast";
const baseUrl = "https://cloud.iexapis.com/stable";
const apiKey = "pk_8b66a7c668ad437c92721186d102732d";

export async function fetchFilteredData(name, range) {
  const apiUrl = `${baseUrl}/stock/${name}/chart/${range}?token=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = await response.data;
    return data;
  } catch (error) {
    toast.error("Please search by stock symbol");
    throw new Error(error.message);
  }
}

export async function fetchTodayStockData(name) {
  const apiUrl = `${baseUrl}/stock/${name}/quote?token=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    toast.error("Please search by stock symbol");
    throw new Error(error.message);
  }
}
