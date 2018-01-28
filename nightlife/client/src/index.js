import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './assets/reducer';

let continousState = {account : undefined, search: undefined};
if(localStorage.cityNightAccount){
  continousState = { account : JSON.parse(localStorage.cityNightAccount), search : undefined};
}

export const store = createStore(reducer, continousState, applyMiddleware(thunkMiddleware));
localStorage.cityNightAccount = JSON.stringify(store.getState().account);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
