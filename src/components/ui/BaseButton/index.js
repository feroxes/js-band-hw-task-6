import React from 'react';
import PropTypes from 'prop-types';

function BaseButton({ name, text, handleClick }) {
  return (
    <>
      <button type="button" name={name} onClick={handleClick} className="btn btn-light">
        {text}
      </button>
    </>
  );
}

BaseButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BaseButton;
