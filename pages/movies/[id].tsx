import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

type Movie = {
  title: string;
  year: number;
  poster: string;
  fullplot: string;
  _id: string;
  genres: Array<string>;
};

export default function Movie(): JSX.Element {
  const [data, setData] = useState<Movie | null>(null);
  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      axios
        .get(`http://localhost:4000/movies/${query.id}`)
        // .then((res) => res.json())
        .then((res) => setData(res.data));
    }
  }, [query.id]);
  console.log("data: ", data);
  return (
    <div>
      ID: {query.id}
      <div>
        <>
          <h2>{data?.title}</h2>
          <picture>
            <img src={data?.poster} alt="" />
          </picture>
        </>
      </div>
    </div>
  );
}
