import { Metadata } from "next";

// lib
import { getTvDetails } from "@/lib/getTvDetails";

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
  const detail = await getTvDetails(id);
  return {
    title: `Filmora | ${detail.name}`,
  };
}

interface Params {
  params: {
    id: string;
    type: string;
  };
}

export default async function TvDetail({ params }: Params) {
  const detail = await getTvDetails(params.id);

  return <div>{JSON.stringify(detail)}</div>;
}
