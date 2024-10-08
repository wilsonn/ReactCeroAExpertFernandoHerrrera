import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";
import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "./hook/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>

      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
