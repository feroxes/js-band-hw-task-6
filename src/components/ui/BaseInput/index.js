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
    const { inputField } = this.state;
    const { handlerFromParent } = this.props;
    this.setState({
      inputField: e.target.value,
    });
    handlerFromParent(inputField, e.target.name);
  };

  render() {
    const { label, placeholder, name } = this.props;
    const { inputField } = this.state;
    return (
      <>
        <label htmlFor="base-input" className="w-100">
          {label || ''}
          <input
            type="text"
            id="base-input"
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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handlerFromParent: PropTypes.func.isRequired,
};

BaseInput.defaultProps = {
  label: null,
  name: null,
  placeholder: null,
};

export default BaseInput;
