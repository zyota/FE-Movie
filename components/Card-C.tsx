import React from "react";
import Link from "next/link";

type Movie = {
  title: string;
  year: number;
  poster: string;
  fullplot: string;
  _id: string;
  genres: Array<string>;
};

export default function Card(prop: Movie): JSX.Element {
  console.log(prop);
  return (
    <div className="w-fit ">
      <Link href={`/movies/${prop._id}`}>
        <div className="flex justify-center ">
          <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <img
              className="rounded-t-lg h-2/3 w-full"
              src={prop.poster}
              alt=""
            />

            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {prop.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {/* {prop.fullplot} */}
              </p>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {prop.year}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
