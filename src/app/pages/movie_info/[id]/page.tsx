interface Props {
  params: {
    id: string;
  };
}

export default async function MovieInfo({ params }: Props) {
  console.log(params);
  return <div>Movie Info</div>;
}
