import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import ApolloClient from 'apollo-client'
import * as reducers from 'reducers'

const loggerMiddleware = createLogger()
export const apolloClient = new ApolloClient()

const store = createStore(
  combineReducers({...reducers, apollo: apolloClient.reducer()}),
  applyMiddleware(apolloClient.middleware(), thunkMiddleware, loggerMiddleware)
)

export default store
