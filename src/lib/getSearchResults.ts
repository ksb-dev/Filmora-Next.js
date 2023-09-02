export async function getSearchResults(
  type: string,
  query: string
): Promise<SearchData> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&adult=false&query=${query}`
  );

  const data = await res.json();

  return data;
}
