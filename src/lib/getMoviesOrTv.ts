interface Props {
  page: number;
  results: Card[];
  total_pages: number;
  total_results: number;
}

export async function getMoviesOrTv(
  category: string,
  page: number,
  type: string,
  title: string
): Promise<Props> {
  const mediaType = type === "movies" ? "movie" : "tv";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const language = "en-US";

  let url;

  if (category === "trending") {
    url = `${baseUrl}/${category}/${mediaType}/day?api_key=${apiKey}&language=${language}&page=${page}`;
  } else {
    url = `${baseUrl}/${mediaType}/${category}?api_key=${apiKey}&language=${language}&page=${page}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${title} ${type}!`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
