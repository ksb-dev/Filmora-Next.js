export async function getMovieDetails(id: string): Promise<MovieDetail> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const language = "en-US";
  const url = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=${language}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie detail!`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
