import PropTypes from "prop-types";

export const pilotShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gunnery: PropTypes.string.isRequired,
  piloting: PropTypes.string.isRequired,
  mechType: PropTypes.string.isRequired,
});

export const listOfPilots = PropTypes.arrayOf(pilotShape);
