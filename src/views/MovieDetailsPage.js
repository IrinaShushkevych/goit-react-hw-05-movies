import { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import Button from "../components/Button";
import MovieReview from "../components/MovieReview";
import MovieCast from "../components/MovieCast";

export default function MovieDetailsPage() {
  const [typeInfo, setTypeInfo] = useState("");
  const onClickButton = (type) => {
    if (typeInfo === type) {
      setTypeInfo("");
      return;
    }
    setTypeInfo(type);
  };

  return (
    <>
      <MovieInfo />
      <div>
        <Button
          onClick={() => {
            onClickButton("cast");
          }}
        >
          Cast
        </Button>
        <Button
          onClick={() => {
            onClickButton("review");
          }}
        >
          Review
        </Button>
      </div>
      {typeInfo === "cast" && <MovieCast />}
      {typeInfo === "review" && <MovieReview />}
    </>
  );
}
