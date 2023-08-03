import React, { useState, Suspense } from "react";
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

  const LazyImage = ({ src, alt }: any) => {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy" // Add lazy loading attribute
      />
    );
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
              <Suspense fallback={<div>Loading...</div>}>
                <LazyImage
                  src={movie?.primaryImage?.url}
                  alt={movie?.originalTitleText?.text}
                />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
