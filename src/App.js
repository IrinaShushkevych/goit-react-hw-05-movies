import { Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import { Container } from "./components/Container/Container";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <Container>
      <Headers />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id/*" element={<MovieDetailsPage />}>
          {/* <Route path="cast" element={<h2>111</h2>} /> */}
        </Route>
        <Route path="movies" element={<MoviesPage />} />
      </Routes>
    </Container>
  );
}

export default App;
