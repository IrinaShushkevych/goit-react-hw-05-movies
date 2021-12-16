import { useNavigate, useLocation, Routes, Route } from "react-router";
import MovieInfo from "../components/MovieInfo";
import Button from "../components/Button";
import MovieReview from "../components/MovieReview";
import MovieCast from "../components/MovieCast";

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickButton = (type) => {
    const loc = location.state ? location.state.prevLoc : location.pathname;
    navigate(`${loc}/${type}`, { state: { prevLoc: loc } });
  };

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        {"<--"} GoBack
      </Button>
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

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="review" element={<MovieReview />} />
      </Routes>
    </>
  );
}
