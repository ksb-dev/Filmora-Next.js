import { Metadata } from "next";

// lib
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";

// components
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

interface Params {
  params: {
    type: string;
    category: string;
    page: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  let type = params.type.charAt(0).toUpperCase() + params.type.substring(1);

  if (params.category === "top_rated")
    return { title: `Filmora | Top Rated ${type}` };

  let category =
    params.category.charAt(0).toUpperCase() + params.category.substring(1);

  return { title: `Filmora | ${category} ${type}` };
}

export default async function Home({ params }: Params) {
  const { type, category, page } = params;
  const data = await getMoviesOrShows(category, type, page);

  if (!data.results) throw new Error(`Failed to fetch ${category} movies!`);

  return (
    <main className="main">
      <span className="mb-[2rem] max-w-fit uppercase font-bold">
        Popular Movies
      </span>
      <div className="inner">
        {data.results.map((info: Card) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
