import React from 'react';
import { format } from "date-fns";

import LocalizedMessage from "../../components/localization/LocalizedMessage";

const minValue = min => value =>
  value && value < min ? ( <span><LocalizedMessage
    id="reactcomponents.value.mustBeAtLeast"
    defaultMessage="Must be at least" />&nbsp;{min}</span> ) : undefined;

const maxValue = max => value =>
  value && value > max ? ( <span><LocalizedMessage
    id="reactcomponents.value.mustBeLessThanOrEqualTo"
    defaultMessage="Must be less than or equal to" />&nbsp;{max}</span> ) : undefined ;

const abnormalMaxValue = max => value =>
  value && value > max ? <LocalizedMessage
    id="reactcomponents.value.abnormal"
    defaultMessage="Abnormal value" /> : undefined ;

const abnormalMinValue = min => value => (value && value < min ? <LocalizedMessage
    id="reactcomponents.value.abnormal"
    defaultMessage="Abnormal value" /> : undefined);

const criticalMaxValue = max => value =>
  value && value > max ? <LocalizedMessage
    id="reactcomponents.value.critical"
    defaultMessage="Critical value" /> : undefined ;

const criticalMinValue = min => value => (value && value < min ? (<LocalizedMessage
  id="reactcomponents.value.critical"
  defaultMessage="Critical value" />) : undefined);

const isRequired = value => value ? undefined : <LocalizedMessage
  id="reactcomponents.value.required"
  defaultMessage="Required" />;

const allowDecimals = value => value => {
  let parsedValue = value ? value.toString().trim() : value;
  // if the value is empty OR
  // if the value contains any non-whitespace(\S) characters
  // and if no non-Digits(\D) characters are present
  // and if the value is a whole number
  if ( !parsedValue || (/\S/.test(parsedValue) && !(/\D/.test(parsedValue)) && parseInt(parsedValue,10) && ((parsedValue - Math.floor(parsedValue)) === 0))) {
    return undefined;
  } else {
    return `Decimals not allowed`;
  }
};

const dateToInt = dateStr => new Date(dateStr).getTime();

const maxDateValue = (maxDate, reference, customText) => value => {
  if (!value || typeof dateToInt(value) !== 'number') {
    return undefined;
  }
  if (value && (dateToInt(format(value, "YYYY-MM-DD"))) > (dateToInt(format(maxDate, "YYYY-MM-DD")))) {
    return reference ? `Date should be earlier or equal to ${reference} date` : customText;
  } else {
    return undefined;
  }
};

const minDateValue = (minDate, reference, customText) => value => {
  if (!value || typeof dateToInt(value) !== 'number') {
    return undefined;
  }
  if (value && (dateToInt(format(value, "YYYY-MM-DD")) < dateToInt(format(minDate, "YYYY-MM-DD")))) {
    return reference ? `Date should be later or equal to ${reference} date` : customText;
  } else {
    return undefined;
  }
};

const generateAllowDecimalsValidator = concept => {
  const {
    allowDecimal,
    datatype,
  } = concept;
  let allowDecimalValidation;

  if (typeof datatype !== 'undefined'
    && datatype !== null
    && typeof datatype.name !== 'undefined'
    && datatype.name === 'Numeric'
    && allowDecimal === false) {

    allowDecimalValidation = allowDecimals();
    return [allowDecimalValidation].filter(Boolean);
  } else {
    return [];
  }
};

const generateAbsoluteRangeValidators = concept => {
  const {
    hiAbsolute,
    lowAbsolute,
  } = concept;
  let hiAbsoluteRange, lowAbsoluteRange;

  hiAbsoluteRange = (typeof hiAbsolute !== 'undefined' && hiAbsolute !== null) ? maxValue(hiAbsolute) : undefined;
  lowAbsoluteRange = (typeof lowAbsolute !== 'undefined' && lowAbsolute !== null) ? minValue(lowAbsolute) : undefined;
  return [hiAbsoluteRange, lowAbsoluteRange].filter(Boolean);
};

const generateAbnormalAndCriticalWarningFunctions = concept => {
  const {
    hiNormal,
    hiCritical,
    lowCritical,
    lowNormal,
  } = concept;
  let hiNormalRange, lowNormalRange, hiCriticalRange, lowCriticalRange;

  hiNormalRange = (typeof hiNormal !== 'undefined' && hiNormal !== null) ? abnormalMaxValue(hiNormal) : undefined;
  lowNormalRange = (typeof lowNormal !== 'undefined' && lowNormal !== null) ? abnormalMinValue(lowNormal) : undefined;
  hiCriticalRange = (typeof hiCritical !== 'undefined' && hiCritical !== null) ? criticalMaxValue(hiCritical) : undefined;
  lowCriticalRange = (typeof lowCritical !== 'undefined' && lowCritical !== null) ? criticalMinValue(lowCritical) : undefined;
  return [hiCriticalRange, hiNormalRange, lowCriticalRange, lowNormalRange].filter(Boolean);

};

export default {
  minValue,
  maxValue,
  abnormalMaxValue,
  abnormalMinValue,
  criticalMinValue,
  criticalMaxValue,
  maxDateValue,
  minDateValue,
  generateAbsoluteRangeValidators,
  generateAbnormalAndCriticalWarningFunctions,
  generateAllowDecimalsValidator,
  isRequired
};
