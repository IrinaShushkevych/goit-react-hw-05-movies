import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMovieReviews } from "../../services/api";
import { Title, TitleParagraph, Text } from "./Title.styled";

export default function MovieReview() {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieReviews(idMovie).then((data) => {
      setMovie(data);
    });
  }, [idMovie]);

  return (
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
  );
}
