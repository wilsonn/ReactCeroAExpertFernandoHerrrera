import PropTypes from "prop-types";
import { getGifs } from "./helpers/getGifs";
import { useEffect, useState } from "react";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3> {category} </h3>
      
      <div className="card-grid">
        {
            images.map((image) => {
                return <GifItem key={image.id} {...image } />
            })
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
