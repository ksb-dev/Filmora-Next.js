interface Props {
  params: {
    id: string;
  };
}

export default async function ShowInfo({ params }: Props) {
  console.log(params);
  return <div>Show Info</div>;
}
