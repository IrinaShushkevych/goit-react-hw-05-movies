//created by Irina Shushkevych
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieVideos } from "../../services/api";
import { onWarning } from "../../services/messages";
import { Title, TitleParagraph, Text } from "./Title.styled";

export default function MovieTrailers() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieVideos(idMovie)
      .then((data) => {
        if (data.results.length === 0) {
          onWarning("No such information");
          return;
        }
        setMovie(data);
      })
      .catch((error) => {
        onWarning(error.message);
      });
  }, [idMovie]);

  return (
    <>
      {movie.results && movie.results.length !== 0 && (
        <>
          <Title>Trailers</Title>
          {movie.results &&
            movie.results.map((el) => {
              console.log(el);
              return (
                <div key={el.id}>
                  <iframe
                    // class={s.trailer}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${el.key}`}
                    title={el.name}
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}
