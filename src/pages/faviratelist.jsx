import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../component/moviecart";

const FavoriteList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="p-4">
      {favorites.length === 0 ? (
        <p className="text-2xl text-center capitalize">No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
