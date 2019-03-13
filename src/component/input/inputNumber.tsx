import * as React from 'react';
import withControlledInput from './withControlledInput';

const validator = (value: string) => {
  return /^([0-9]*)$/.test(value)
}

const InputNumber = withControlledInput(validator)

export default InputNumber
