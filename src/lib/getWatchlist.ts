export async function getWatchlist(): Promise<Watchlist[]> {
  try {
    const response = await fetch(
      "http://localhost:3000/api/get_watchlist_api",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch wishlist! ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
