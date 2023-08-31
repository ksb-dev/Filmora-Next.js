export async function getMoviesOrShows(
  category: string,
  type: string,
  page: number
) {
  let res, data;

  if (category === "trending") {
    const res = await fetch(
      `https://api.themoviedb.org/3/${category}/${
        type === "movies" ? "movie" : "tv"
      }/day?api_key=${
        process.env.NEXT_PUBLIC_TMDB_API_KEY
      }&language=en-US&page=${page}`
    );
    const data = await res.json();

    return data;
  }

  res = await fetch(
    `https://api.themoviedb.org/3/${
      type === "movies" ? "movie" : "tv"
    }/${category}?language=en-US&page=${page}&api_key=${
      process.env.NEXT_PUBLIC_TMDB_API_KEY
    }`
  );

  data = await res.json();

  return data;
}
