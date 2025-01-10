import PropTypes from "prop-types";

export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={() => props.onHandle(props.id)}
      className={props.on ? "on" : undefined}
    ></button>
  );
}

Pad.propTypes = {
  color: PropTypes.string.isRequired,
  onHandle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  on: PropTypes.bool.isRequired,
};
