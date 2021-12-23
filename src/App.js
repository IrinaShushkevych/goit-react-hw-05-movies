import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Headers from "./components/Headers";
import { Container } from "./components/Container/Container";
import Loader from "./components/Loader";
import "./App.css";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

function App() {
  return (
    <Container>
      <Headers />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies/:id/*" element={<MovieDetailsPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
