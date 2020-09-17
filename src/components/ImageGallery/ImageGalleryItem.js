import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ tags, webformatURL, id, onClickItem }) => {
  const imgId = (id) => {
    onClickItem(id);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => imgId(id)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
