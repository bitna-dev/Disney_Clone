import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  let { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fecthData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fecthData();
  }, [movieId]);
  if (!movie) {
    return null;
  }
  return (
    <section>
      <img
        key={movie.id}
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.name}
      />
    </section>
  );
};

export default DetailPage;
