export async function getMoviesOrShows(category: string, type: string) {
  let res, data;

  if (category === "trending") {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&&language=en-US`
    );
    const data = await res.json();

    return data.results;
  }

  res = await fetch(
    `https://api.themoviedb.org/3/${type}/${category}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  data = await res.json();

  return data.results;
}
