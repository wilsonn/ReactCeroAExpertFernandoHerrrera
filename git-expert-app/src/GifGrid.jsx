import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";

const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3> {category} </h3>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
