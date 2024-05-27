import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/movieslice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="hover:shadow-xl hover:rounded-xl bg-white transition-all ease-in-out duration-300  hover:scale-105 border rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:items-center">
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHaEUyG223_QNGEfxIvMxUHtpByeFPsSKPw&usqp=CAU`}
        alt={movie.movie}
        className="w-full md:w-1/4 object-cover rounded-lg" // Add object-cover for responsive images
      />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl font-bold text-gray-800">{movie.movie}</h2>
        <p className="mt-2 text-yellow-500 font-semibold">
          Rating: {movie.rating}
        </p>
        <div className="mt-4 my-2 flex items-center">
          <button
            className={`py-2 px-4 rounded-lg text-white font-medium focus:outline-none ${
              isFavorite
                ? "bg-red-500 hover:bg-red-600"
                : "bg-slate-600 hover:bg-slate-700"
            }`}
            onClick={() => dispatch(toggleFavorite(movie))}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
          <a
            href={movie.imdb_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 py-2 px-4 rounded-lg text-white font-medium bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
