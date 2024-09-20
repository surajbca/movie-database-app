import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.movie}</h2>
            <p>Rating: {movie.rating}</p>
            <img
              src={movie.image}
              alt={movie.movie}
              style={{ width: "100px", height: "150px" }}
            />
            <p>
              <a
                href={movie.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb Link
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
