import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
    };
  }

  handleChange = e => {
    const { select } = this.state;
    const { handlerFromParent } = this.props;
    this.setState({
      select: e.target.value,
    });
    handlerFromParent(select, e.target.name);
  };

  render() {
    const { name, optionList } = this.props;
    return (
      <>
        <select name={name} onChange={this.handleChange} className="custom-select text-capitalize">
          {optionList.map(item => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

BaseSelect.propTypes = {
  name: PropTypes.string.isRequired,
  optionList: PropTypes.instanceOf(Array).isRequired,
  handlerFromParent: PropTypes.func.isRequired,
};

export default BaseSelect;
