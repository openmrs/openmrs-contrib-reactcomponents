import React from 'react';
import PropTypes from 'prop-types';
import {  FormControl } from 'react-bootstrap';
import '../../../assets/css/widgets.css';

const FieldInput = ({
  input,
  mode,
  placeholder,
  displayValue,
  type,
  meta: { touched, error, warning }
}) => {

  const edit = (
    <FormControl
      {...input}
      placeholder={placeholder}
      type={type}
    />
  );

  const view = (
    <span
      className="field-input-view"
    >
      {displayValue}
    </span>
  );

  const validations = (
    <div className="div-error">
      <span
        className={error ? 'field-error' : 'field-warning'}
        style={{ visibility: (error || warning) ? 'visible' : 'hidden'}}
      >
        {error ? error : (warning ? warning : '_')}
      </span>
    </div>
  );

  return (
    <div>
      {!mode || mode === 'edit' ? edit : view}
      {validations}
    </div>
  );

};

FieldInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default FieldInput;



