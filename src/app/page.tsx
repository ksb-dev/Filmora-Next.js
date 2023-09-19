// components
import Card from "@/components/Card/Card";

const getAllTrending = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data ! ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default async function Home() {
  const data = await getAllTrending();

  return (
    <main className="main">
      <div className="flex items-center justify-between mb-[2rem]">
        <p className="max-w-fit font-[700] uppercase">Trending Today</p>
        <p>Sort</p>
      </div>
      <div className="inner">
        {data.results.map((info: Card) => (
          <Card key={info.id} info={info} type={info.media_type} />
        ))}
      </div>
    </main>
  );
}
