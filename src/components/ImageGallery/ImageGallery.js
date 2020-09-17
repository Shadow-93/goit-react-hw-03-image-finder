import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ items, onOpenItem, onItemClick }) => {
  return (
    <ul className="ImageGallery" onClick={onOpenItem}>
      {items.map((item) => {
        const { id } = item;
        return (
          <ImageGalleryItem key={id} {...item} onClickItem={onItemClick} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onOpenItem: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
