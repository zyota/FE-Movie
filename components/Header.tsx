import React from "react";

export default function Header(): JSX.Element {
  return (
    <>
      <img src="../public/rotten.png" alt="" />
      <input type="text" />
      <div>
        <div>MOVIES</div>
        <div>TV SHOWS</div>
        <div>MOVIE TRIVIA</div>
        <div>NEWS</div>
        <div>SHOWTIMES</div>
      </div>
    </>
  );
}
