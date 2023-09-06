import { Metadata } from "next";

// lib
import { getMovieDetails } from "@/lib/getMovieDetails";

interface Props {
  params: {
    id: string;
    type: string;
    category: string;
    page: number;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, type } = params;
  const detail = await getMovieDetails(id);
  return {
    title: `Filmora | ${detail.title}`,
  };
}

interface Params {
  params: {
    id: string;
    type: string;
  };
}

export default async function MovieDetail({ params }: Params) {
  const detail = await getMovieDetails(params.id);

  return <div>{JSON.stringify(detail)}</div>;
}
