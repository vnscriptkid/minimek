import PropTypes from "prop-types";

export const pilotShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gunnery: PropTypes.number.isRequired,
  piloting: PropTypes.number.isRequired,
  mechType: PropTypes.string.isRequired,
});

export const listOfPilots = PropTypes.arrayOf(pilotShape);
