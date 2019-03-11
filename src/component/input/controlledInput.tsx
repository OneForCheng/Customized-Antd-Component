import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface IState {
  value: string,
}

interface IPassProps {
  validator?: (value: string) => boolean
}

type IProps = InputProps & IPassProps

class ControlledInput extends React.Component<IProps, IState> {
  static getDerivedStateFromProps(nextProps: IProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      }
    }
    return null
  }

  state: IState = {
    value: '',
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (this.props.validator && !this.props.validator(value)) {
      return
    }
    if (!('value' in this.props)) {
      this.setState({value})
    }
    this.triggerChange(e)
  }

  triggerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e)
    }
  }

  render() {
    return (<Input {...this.props} value={this.state.value} onChange={this.handleChange}/>)
  }
}

export default ControlledInput
