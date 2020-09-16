import React from "react";

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

export default ImageGallery;
