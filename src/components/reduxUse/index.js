import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp)

export default function() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

// import React from 'react'
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import rootReducer from './reducers'

// const store = createStore(rootReducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )