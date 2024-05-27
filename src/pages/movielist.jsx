import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieslice";
import MovieCard from "../component/moviecart";
fetchMovies;

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  return (
    <div className="p-5 sm:p-20">
      <p className="text-3xl text-center my-5 font-bold font-serif capitalize">
        movies list
      </p>
      {status === "loading" && (
        <div className="flex items-center justify-center h-80">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      )}
      {status === "failed" && (
        <p className="text-red-700 text-xl text-center">Error: {error}</p>
      )}
      {status === "succeeded" && (
        <div className="grid space-y-3 space-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
