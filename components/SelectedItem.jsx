import React from "react";
import PropTypes from "prop-types";
import { dvdPropShape } from "./PropShapes";

export default function DVDCard({
  dvdData: { title, releaseYear, price },
  isInCart,
  clickHandler,
}) {
  return (
    <div className={`dvdCard ${isSelected && "selected"}`}>
      <h3>{title}</h3>
      <ul>
        <li>Released {releaseYear}</li>
        <li>Price: ${price}</li>
      </ul>
    </div>
  );
}

DVDCard.propTypes = {
  dvdData: dvdPropShape.isRequired,
  isInCart: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

DVDCard.defaultProps = {
  isInCart: false,
};
