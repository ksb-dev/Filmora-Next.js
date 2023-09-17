import { Metadata } from "next";

// lib
import { getMoviesOrTv } from "@/lib/getMoviesOrTv";

// components
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

interface Params {
  params: {
    type: string;
    category: string;
    page: number;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  let type = params.type.charAt(0).toUpperCase() + params.type.substring(1);

  if (params.category === "top_rated")
    return { title: `Filmora | Top Rated ${type}` };

  let category =
    params.category.charAt(0).toUpperCase() + params.category.substring(1);

  return {
    title: `Filmora | ${category} ${type === "Movies" ? "Movies" : "Shows"}`,
  };
}

export default async function Home({ params }: Params) {
  const { type, category, page } = params;

  let title = "";
  category === "top_rated"
    ? (title = "Top Rated")
    : (title = category.charAt(0).toUpperCase() + category.substring(1));

  const data = await getMoviesOrTv(category, page, type, title);

  return (
    <main className="main">
      <div className="flex items-center justify-between mb-[2rem]">
        <p className="max-w-fit font-[900] uppercase text-[1.25rem] md:text-[1.5rem] text-[#999]">
          {title} {type === "movies" ? "Movies" : "Shows"}
        </p>
        <p>Sort</p>
      </div>
      <div className="inner">
        {data.results.map((info: Card) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
      <Pagination />
    </main>
  );
}
