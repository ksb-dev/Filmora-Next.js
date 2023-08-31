import { getDetails } from "@/lib/getDetails";
import { getMoviesOrShows } from "@/lib/getMoviesOrShows";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
    type: string;
    category: string;
    page: number;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id, type } = params;
  const detail = await getDetails(id, type);
  return {
    title: `Filmora | ${type.charAt(0).toUpperCase() + type.substring(1)} | ${
      detail.title
    }`,
  };
}

// export async function generateStaticParams({ params }: Props) {
//   const { category, type, page } = params;

//   const data = await getMoviesOrShows(category, type, page);

//   //console.log(data);

//   return data.results?.map((info: Card) => ({
//     id: info.id.toString(),
//   }));
// }

interface Params {
  params: {
    id: string;
    type: string;
  };
}

export default async function Detail({ params }: Params) {
  const detail = await getDetails(params.id, params.type);

  return <div>{JSON.stringify(detail)}</div>;
}
