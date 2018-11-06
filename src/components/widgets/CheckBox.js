import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

class CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e, checkBoxValue) {
    const { input } = this.props;
    if (typeof input !== 'undefined') {
      if (e.target.checked) {
        this.props.input.onChange(checkBoxValue);
      } else {
        this.props.input.onChange('');
      }
    }
  }

  render() {

    const { title, input, checkBoxValue, mode, displayValue } = this.props;
    const viewModeValue = displayValue ? 'X' : '';

    let checkedStatus = false;
    if (typeof input !== "undefined") {
      checkedStatus = !!(input.value);
    }

    const edit = (
      <span>
        <span>{title}</span>
        <span>
          <Checkbox
            {...input}
            checked={checkedStatus}
            onChange={(e) => this.handleToggle(e, checkBoxValue)}
            title={title}
          />
        </span>
      </span>
    );

    const view = (
      <span>{title} : {viewModeValue} </span>
    );

    return (
      <div>
        {!mode || mode === 'edit' ? edit : view}
      </div>
    );
  }
}

CheckBox.defaultProps = {
  title: "",
  checkBoxValue: "",
};

CheckBox.propTypes = {
  checkBoxTitle: PropTypes.string,
  checkBoxValue: PropTypes.object.isRequired,
  displayValue: PropTypes.object,
  input: PropTypes.object,
  mode: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CheckBox;
