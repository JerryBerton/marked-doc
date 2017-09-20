
import 'react-hot-loader/patch'
import 'styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'




import App from 'components/app'

const root = document.getElementById('root')
const render = Component => ReactDOM.render( <Component />, root)
render(App)
if (module.hot) {
  module.hot.accept('./components/app', () => {
     const NextRootContainer = require('./components/app').default
    render(NextRootContainer)
  })
}
