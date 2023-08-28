interface Props {
  params: {
    id: string;
  };
}

export default async function MovieInfo({ params }: Props) {
  console.log(params);
  return <div className="main">Movie Info</div>;
}
