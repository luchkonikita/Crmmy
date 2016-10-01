import React, {Component, PropTypes} from 'react'

export default class UsersTable extends Component {
  static propTypes = {
    users: PropTypes.array
  }

  render () {
    const {users} = this.props
    return (
      <div className='UsersTable'>
        <table>
          <tbody>
            {users && users.map(this._renderUser)}
          </tbody>
        </table>
      </div>
    )
  }

  _renderUser = (user, i) => {
    const columns = ['id', 'fullName', 'email', 'country', 'city', 'zip']
    return (
      <tr key={i} className='UsersTable-row'>
        {columns.map(this._renderColumn.bind(null, user))}
      </tr>
    )
  }

  _renderColumn = (user, column) => {
    return (
      <th key={column} className={`UsersTable-cell is-${column}`}>
        {user[column]}
      </th>
    )
  }
}
