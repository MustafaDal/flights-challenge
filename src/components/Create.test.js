import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Create from './Create'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Create />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
