import React from "react";

export default function Button({ onClickBtn }) {
  return (
    <button type="button" onClick={onClickBtn}>
      Load More
    </button>
  );
}
