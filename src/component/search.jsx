import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieslice";
import MovieCard from "./moviecart";
const Search = () => {
  //   const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filter movies based on the search query using regex
    const regex = new RegExp(searchQuery, "i");
    const filtered = movies.filter((movie) => regex.test(movie.movie));
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" relative p-4">
      <input
        type="search"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300  text-black rounded-md px-4 py-2 mb-4"
      />
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && searchQuery !== "" && (
        <div className="absolute sm:-left-20 top-100 shadow-2xl rounded-xl z-50 w-[450px] max-h-96 overflow-y-scroll p-4 bg-white">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {filteredMovies.length === 0 && (
            <p className="text-black text-xl text-center">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
