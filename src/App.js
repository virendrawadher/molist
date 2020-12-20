import React, { useState } from "react";
import "./styles.css";
import molist from "./database.js";

export default function App() {
  const [movieList, setMovieList] = useState("All");
  function clickHandler(buttons) {
    setMovieList(buttons);
  }

  return (
    <div className="App">
      <h1>MoL!sT</h1>
      <div className="movieBody">
        <div className="movieBtn">
          {Object.keys(molist).map(function (buttons) {
            return (
              <button
                onClick={() => clickHandler(buttons)}
                key={buttons}
                className="movBtn"
              >
                {buttons}
              </button>
            );
          })}
        </div>
        <div className="movieList">
          {molist[movieList].map(function (movieL) {
            return (
              <div className="listOfMovie">
                <div className="movies">
                  <img
                    src={movieL.thumnails}
                    alt={movieL.movie_name}
                    className="movieImg"
                  ></img>
                  <p className="movie movieName">{movieL.movie_name} </p>
                  <p className="movie movieType">{movieL.type} </p>
                  <p className="movie movieRate">⭐ {movieL.rating} </p>
                  <p className="movie movieDesp">{movieL.description} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
