import PropTypes from "prop-types";

export default function Pad(props) {
  return <button style={{ backgroundColor: props.color }}></button>;
}

Pad.propTypes = {
  color: PropTypes.string.isRequired,
};
