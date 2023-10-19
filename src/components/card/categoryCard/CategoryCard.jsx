import { LazyLoadImage } from "react-lazy-load-image-component";
import "./categoryCard.css";
import PropTypes from "prop-types";

const CategoryCard = ({ name, image }) => {
  return (
    <a href={`#${name}`}>
      <div className="categoryCard">
        <div className="img-box">
          <LazyLoadImage  effect="blur" src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    </a>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
export default CategoryCard;
