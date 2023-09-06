interface genres {
  genre: {
    id: number;
    name: string;
  };
}

interface companies {
  company: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  };
}

interface countries {
  country: {
    iso_3166_1: string;
    name: string;
  };
}

interface languages {
  language: {
    english_name: string;
    iso_639_1: string;
    name: string;
  };
}

interface MovieDetail {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: companies[];
  production_countries: countiries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
