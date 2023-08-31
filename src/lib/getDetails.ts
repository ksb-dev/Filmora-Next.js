export async function getDetails(id: string, type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      type === "movies" ? "movie" : "tv"
    }/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  );

  const data = await res.json();

  return data;
}
