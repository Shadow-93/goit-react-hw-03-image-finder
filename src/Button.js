import React from "react";

export default function Button({ onClickBtn }) {
  return (
    <button className="Button" type="button" onClick={onClickBtn}>
      Load More
    </button>
  );
}
