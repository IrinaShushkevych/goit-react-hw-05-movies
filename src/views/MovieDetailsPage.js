import { lazy, Suspense } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router";

import MovieInfo from "../components/MovieInfo";
import Button from "../components/Button";
import Loader from "../components/Loader";

const MovieCast = lazy(() => import("../components/MovieCast"));
const MovieReview = lazy(() => import("../components/MovieReview"));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickButton = (type) => {
    const loc = location.state.prevLoc
      ? location.state.prevLoc
      : location.pathname;
    navigate(`${loc}/${type}`, { state: { ...location.state, prevLoc: loc } });
  };

  const onGoBack = () => {
    const strLoc = `${location.state.goBackPage ?? "/"}${
      location.state.goBackSearch ?? ""
    }`;
    navigate(strLoc);
  };

  return (
    <>
      <Button onClick={onGoBack}>Go Back</Button>
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

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<MovieReview />} />
        </Routes>
      </Suspense>
    </>
  );
}
