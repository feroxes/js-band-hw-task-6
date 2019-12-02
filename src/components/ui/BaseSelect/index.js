import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
    };
  }

  componentDidMount() {
    const { optionList } = this.props;
    this.setState({
      select: optionList[0],
    });
  }

  handleChange = e => {
    const { handlerFromParent } = this.props;
    const { value, name } = e.target;

    this.setState(
      {
        select: value,
      },
      () => handlerFromParent(value, name)
    );
  };

  render() {
    const { name, optionList, label, disabledFirstElement } = this.props;
    const { select } = this.state;
    return (
      <>
        <span className="font-weight-bold ">{label}</span>
        <select
          name={name}
          onChange={this.handleChange}
          className="custom-select text-capitalize"
          value={select}
        >
          {optionList.map((item, index) => {
            return (
              <option disabled={disabledFirstElement && !index} key={item} value={item}>
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
  label: PropTypes.string,
  disabledFirstElement: PropTypes.bool,
  optionList: PropTypes.instanceOf(Array).isRequired,
  handlerFromParent: PropTypes.func.isRequired,
};

BaseSelect.defaultProps = {
  label: null,
  disabledFirstElement: false,
};

export default BaseSelect;
