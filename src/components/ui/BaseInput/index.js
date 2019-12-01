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
    const { label, placeholder, name, id, type } = this.props;
    const { inputField } = this.state;
    return (
      <>
        <label htmlFor={id} className="w-100">
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
