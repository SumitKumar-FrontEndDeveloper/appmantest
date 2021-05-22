// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import getStore from "./store";
import { Provider } from "react-redux";
import App from './App'
const store = getStore();


//ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );