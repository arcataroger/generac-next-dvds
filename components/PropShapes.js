import PropTypes from "prop-types";

export const dvdPropShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.number,
  price: PropTypes.number,
  uuid: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
});
