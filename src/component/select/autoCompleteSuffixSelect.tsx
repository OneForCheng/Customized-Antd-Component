import * as React from 'react'
import { isEmpty, uniq } from 'lodash'
import { SelectProps } from 'antd/lib/select'
import { Select } from 'antd';

interface IState {
  selectOptions: string[],
}

interface IPassProps {
  suffixes?: string[],
}

type IProps = SelectProps & IPassProps

const completeSuffix = (target: string, suffix: string) => {
  const targetLength = target.length
  const minLength = Math.min(targetLength, suffix.length)
  for(let index = minLength - 1; index >= 0; index--) {
    if(target.substr(targetLength - index - 1, index + 1) === suffix.substr(0, index + 1)) {
      return target + suffix.substr(index + 1)
    }
  }
  return ''
}

const getAutoCompleteSuffixes = (target: string, presetSuffixes: string[] | undefined) => {
  if(target && presetSuffixes) {
    const prepSuffixes = uniq(presetSuffixes.filter((item) => !isEmpty(item)))
    return prepSuffixes.map((suffix) => completeSuffix(target, suffix)).filter((item) => !isEmpty(item))
  }
  return []
}

class AutoCompleteSuffixSelect extends React.Component<IProps, IState> {
  state: IState = {
    selectOptions: [],
  }

  handleSearch = (value: string) => {
    const selectOptions = getAutoCompleteSuffixes(value, this.props.suffixes)
    this.setState({
      selectOptions
    }, () => {
      this.triggerSearch(value)
    })
  }

  triggerSearch = (value: string) => {
    const { onSearch } = this.props
    if (onSearch) {
      onSearch(value)
    }
  }

  renderSelectOptions = () => {
    return this.state.selectOptions.map((value, index) => (
      <Select.Option value={value} key={index}>{value}</Select.Option>
    ))
  }

  render() {
    return (
      <Select
        {...this.props}
        mode="tags"
        onSearch={this.handleSearch}>
        {this.renderSelectOptions()}
      </Select>
    )
  }
}

export default AutoCompleteSuffixSelect
