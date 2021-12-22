import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "./Img.styled";
import noImg from "../../images/no-image.jpg";
import { Title } from "./Title.styled";

export default function MovieCard({ movie }) {
  const location = useLocation();

  return (
    <Link
      to={`/movies/${movie.id}`}
      state={{ goBackPage: location.pathname, goBackSearch: location.search }}
    >
      <Image
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : noImg
        }
        alt={movie.original_name ? movie.original_name : movie.original_title}
      ></Image>
      <Title>
        {movie.original_name ? movie.original_name : movie.original_title}
      </Title>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
