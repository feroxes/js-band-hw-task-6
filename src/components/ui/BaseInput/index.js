import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
    };
  }

  handleChange = e => {
    const { handlerFromParent } = this.props;
    const { value, name } = e.target;
    this.setState(
      {
        inputField: value,
      },
      () => handlerFromParent(value, name)
    );
  };

  render() {
    const { label, placeholder, name, id, type } = this.props;
    const { inputField } = this.state;
    return (
      <>
        <label htmlFor={id} className="w-100 font-weight-bold">
          {label || ''}
          <input
            type={type}
            id={id}
            className="form-control"
            name={name}
            value={inputField}
            onChange={this.handleChange}
            placeholder={placeholder}
          />
        </label>
      </>
    );
  }
}

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  handlerFromParent: PropTypes.func.isRequired,
};

BaseInput.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null,
};

export default BaseInput;
