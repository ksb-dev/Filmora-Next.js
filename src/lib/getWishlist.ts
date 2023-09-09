export async function getWishlist() {
  try {
    const response = await fetch("http://localhost:3000/api/all_wishlist_api", {
      cache: "no-store",
    });

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
