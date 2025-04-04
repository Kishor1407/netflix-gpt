import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-[-276px] relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList
          title={"Trending Movies"}
          movies={movies?.popularMovies}
        />{" "}
        //this is usePopularMovies but used Trending Movies API
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList
          title={"Most Watched Movies"}
          movies={movies?.horrorMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
