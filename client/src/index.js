import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
