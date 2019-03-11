import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface IState {
  value: string,
}

type IProps = InputProps

const withControlledInput = (validator?: (value: string) => boolean) => {
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
      if (validator && !validator(value)) {
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

  return ControlledInput
}

export default withControlledInput
