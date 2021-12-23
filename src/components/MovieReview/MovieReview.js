import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieReviews } from "../../services/api";
import { onWarning } from "../../services/messages";
import { Title, TitleParagraph, Text } from "./Title.styled";

export default function MovieReview() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieReviews(idMovie)
      .then((data) => {
        if (data.results.length === 0) {
          onWarning("No such information");
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
          <Title>Reviews</Title>
          {movie.results &&
            movie.results.map((el) => {
              return (
                <div key={el.id}>
                  <TitleParagraph>Author: {el.author}</TitleParagraph>
                  <Text>{el.content}</Text>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}
