import React from "react";

const ImageGalleryItem = ({ alt, url }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
