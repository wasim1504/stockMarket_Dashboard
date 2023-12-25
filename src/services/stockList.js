const apiKey = "pk_8b66a7c668ad437c92721186d102732d";

export async function searchSymbol(query) {
  try {
    const url = `https://cloud.iexapis.com/stable/search/${query}?token=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("An error has occured:", err);
  }
}
