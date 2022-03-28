/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';

import * as serviceWorker from './services/serviceWorker';
import Routes from './routes/index';
  

const Root = () => (    
    <Provider store={store}>                
        <Routes />            
    </Provider>    
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();