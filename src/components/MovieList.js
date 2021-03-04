import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import { moviesList } from "../movies";

function MovieList() {
  const [listMovies, setListMovies] = useState(moviesList);
  // Getting the newMovie from AddMovie Component
  const callbackAdd = (newMoviez) => {
    setListMovies([...listMovies, newMoviez]);
  };
  const callbackSearch = (searchedMovie, moviesInChild) => {
    console.log(moviesInChild);
    const filteredMovies = moviesInChild.filter(
      (thisMovie) => thisMovie.title === searchedMovie
    );
    console.log(filteredMovies);
    setListMovies(filteredMovies);
  };
  return (
    <div>
      <Filter movieprop={listMovies} callbackSearch={callbackSearch} />
      <AddMovie callbackAdd={callbackAdd} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {listMovies.map((thisMovie, index) => {
          return <MovieCard key={index} movieObj={thisMovie} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
