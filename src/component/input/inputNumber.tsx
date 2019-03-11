import * as React from "react";
import ControlledInput from "./controlledInput";

const validator = (value: string) => {
  return /^([0-9]*)$/.test(value)
}

const InputNumber = <ControlledInput validator={validator}/>

export default InputNumber
