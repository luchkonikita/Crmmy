import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import UsersTable from './UsersTable'
import UsersFilter from './UsersFilter'
import {setFilter} from 'reducers/usersFilter'

export class Users extends Component {
  static propTypes = {
    data: PropTypes.shape({
      users: PropTypes.array,
      loading: PropTypes.bool
    }).isRequired,
    setFilter: PropTypes.func.isRequired
  }

  render () {
    const {data: {users, loading}, setFilter} = this.props
    return (
      <div className='Users'>
        <div className='Users-filter'>
          <UsersFilter onChange={setFilter} />
        </div>

        <div className='Users-table'>
          {loading ? <span>Loading...</span> : <UsersTable users={users} />}
        </div>
      </div>
    )
  }
}

const query = gql`
  query Users ($country: String) {
    users (country: $country) {
      id
      email
      fullName
      country
      city
      zip
      messages {
        text
      }
    }}
`

const queryOptions = (ownProps) => {
  return {
    variables: {
      country: ownProps.filter.country || null
    }
  }
}

const mapStateToProps = (state) => {
  return {filter: state.usersFilter}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(query, {options: queryOptions})(Users)
)
