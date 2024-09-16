import React, { useEffect, useState } from "react";

const API = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=11e9ed23e2d0f15d48b85041f8f144d0"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList, "movie");

  return (
    <div style={{ display: "flex", overflowX: "scroll", padding: "20px" }}>
      {movieList.map((movie) => (
        <div
          key={movie.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "20px",
            maxWidth: "200px", 
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{
              height: "300px", 
              width: "100%",  
              objectFit: "cover", 
            }}
          />
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              maxWidth: "100%", 
              overflow: "hidden", 
              textOverflow: "ellipsis",
              whiteSpace: "nowrap", 
            }}
          >
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default API;
