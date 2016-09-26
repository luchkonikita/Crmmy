import React from 'react'
import ReactDOM from 'react-dom'

import App from 'containers/App'

function boot () {
  ReactDOM.render(React.createElement(App), document.getElementById('app'))
}

document.addEventListener('DOMContentLoaded', boot)
