import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddComment from './AddComment';
import DisplayComment from './DisplayComment';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
	commentList: []
};

function reducer(state = initialState, action) {

	console.log(action);
	
	switch (action.type) {
		case "AddComment": 
			//console.log(JSON.stringify(state));
			return {
				commentList: state.commentList.concat(action.payload)
			};
		default:
			return state
	} 
	//return state;
}

const store = createStore(reducer);
 
ReactDOM.render(
	<div>
		<Provider store={store}>
			<AddComment />
		</Provider>
		<br/>
		<Provider store={store}>
			<DisplayComment commentList={this.commentList} />
		</Provider>
	</div>
	, document.getElementById('root'));

