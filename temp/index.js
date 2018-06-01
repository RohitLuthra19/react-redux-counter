import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';
 
import { Provider } from 'react-redux';
var intialState = {
    count: 0
}
function counterReducer  (state = intialState, action)  {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(counterReducer);

const App = () => (
    <Provider store={store}>
        <Counter count={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
    </Provider>
)
ReactDOM.render(<App />, document.getElementById('root'));
