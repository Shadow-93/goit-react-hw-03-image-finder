import React from "react";

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

export default ImageGalleryItem;
