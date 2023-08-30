export async function getMoviesOrShows(
  category: string,
  type: string,
  page: string | string[]
) {
  let res, data;

  if (category === "trending") {
    const res = await fetch(
      `https://api.themoviedb.org/3/${category}/${type}/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
    );
    const data = await res.json();

    return data;
  }

  res = await fetch(
    `https://api.themoviedb.org/3/${type}/${category}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=${page}`
  );

  data = await res.json();

  return data;
}
