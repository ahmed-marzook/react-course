import PropTypes from "prop-types";

function JokeComponent(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>
        <strong>Punchline:</strong> {props.punchline}
      </p>
      <hr />
    </div>
  );
}

JokeComponent.propTypes = {
  setup: PropTypes.string,
  punchline: PropTypes.string.isRequired,
};

export default JokeComponent;
