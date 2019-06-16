import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import List from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}><List /></Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
