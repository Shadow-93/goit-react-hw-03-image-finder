import React from "react";

import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ items }) => {
  return (
    <ul className="ImageGallery">
      {items.map((item) => {
        const { id, webformatURL, tags } = item;
        return <ImageGalleryItem key={id} url={webformatURL} alt={tags} />;
      })}
    </ul>
  );
};

export default ImageGallery;
