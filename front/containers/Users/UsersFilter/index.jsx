import React, {Component, PropTypes} from 'react'

export default class UsersFilter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='UsersFilter'>
        {this._renderCountrySelect()}
      </div>
    )
  }

  _renderCountrySelect () {
    return (
      <label className='UsersFilter-label'>
        Country
        <select name='country' className='UsersFilter-select' onChange={this._handleChange}>
          <option value=''>Please choose</option>
          <option value='Angola'>Angola</option>
          <option value='Belgium'>Belgium</option>
          <option value='Germany'>Germany</option>
          <option value='Oman'>Oman</option>
          <option value='Uganda'>Uganda</option>
        </select>
      </label>
    )
  }

  _handleChange = (e) => {
    const {target: {name, value}} = e
    this._query = Object.assign({}, this._query, {
      [name]: value
    })
    this.props.onChange(this._query)
  }
}
