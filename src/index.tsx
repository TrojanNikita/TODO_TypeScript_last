import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.scss';
import App from './components/app/app';


import configStore from './configStore';

// //по-умолчанию включена вкладка all
// //localStorage.setItem('route','1')
// if(!localStorage.getItem('route'))
//             localStorage.setItem('route', '1')

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
                < App />
    </Provider>,
  document.getElementById('root'));
