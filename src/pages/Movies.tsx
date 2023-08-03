import React, { useState } from "react";
import { POST } from "../utils/webService";
import { FETCH_ALL_MOVIES } from "../utils/apiUrls";

const Movies = () => {
  const [moviesData, setMoviesData] = useState<any[]>([]);
  console.log(moviesData);

  const handleFetchMovies = () => {
    POST(FETCH_ALL_MOVIES, {})
      .then((res) => {
        setMoviesData(res.data.movies.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Movies</h1>
      <button
        onClick={() => {
          handleFetchMovies();
        }}
      >
        Fetch Movies
      </button>

      <div>
        {moviesData.map((movie, index) => {
          return (
            <div key={index}>
              <h1>{movie?.originalTitleText?.text}</h1>
              <img
                src={movie?.primaryImage?.url}
                alt=""
                width="300px"
                height="300px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
