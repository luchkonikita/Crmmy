import React, {Component} from 'react'
import Users from 'containers/Users'
import {ApolloProvider} from 'react-apollo'
import store, {apolloClient} from 'store'

export default class App extends Component {

  render () {
    return (
      <div className='App'>
        <ApolloProvider client={apolloClient} store={store}>
          <Users />
        </ApolloProvider>
      </div>
    )
  }
}
