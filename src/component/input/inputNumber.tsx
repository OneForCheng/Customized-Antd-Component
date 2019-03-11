import * as React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface IState {
    value: string,
}

class InputNumber extends React.Component<InputProps, IState> {
    static getDerivedStateFromProps(nextProps: InputProps) {
        // Should be a controlled component.
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

    handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const reg = /^([0-9]*)$/
        if(!reg.test(value)) {
            return
        }
        if (!('value' in this.props)) {
            this.setState({ value })
        }
        this.triggerChange(e)
    }

    triggerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Should provide an event to pass value to Form.
        const { onChange } = this.props
        if (onChange) {
            onChange(e)
        }
    }

    render() {
        return (<Input {...this.props} value={this.state.value} onChange={this.handleNumberChange}/>)
    }
}

export default InputNumber
