import React, { useEffect, useState } from "react";
import Card from "../components/Card-C";
interface MovieType {
  title: string;
  year: number;
  poster: string;
  fullplot: string;
  _id: string;
  genres: Array<string>;
}

export default function About(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:4000/getMovies")
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);
  console.log("movies: ", movies);
  return (
    <div className="flex box-border flex-wrap">
      {movies?.map((movie: MovieType, index: number) => (
        <div className=" box-border" key={index}>
          <Card {...movie} />
        </div>
      ))}
    </div>
  );
}
