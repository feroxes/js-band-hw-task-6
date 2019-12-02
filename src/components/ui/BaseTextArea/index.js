import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
    };
  }

  handleChange = e => {
    const { handlerFromParent } = this.props;
    const { value, name } = e.target;
    this.setState({
      inputField: value,
    });
    handlerFromParent(value, name);
  };

  render() {
    const { label, placeholder, name, id } = this.props;
    const { inputField } = this.state;
    return (
      <>
        <label htmlFor={id} className="w-100 font-weight-bold">
          {label || ''}
          <textarea
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

BaseTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  handlerFromParent: PropTypes.func.isRequired,
};

BaseTextArea.defaultProps = {
  label: null,
  placeholder: null,
};

export default BaseTextArea;
