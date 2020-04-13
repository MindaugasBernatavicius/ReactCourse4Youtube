import React, {useState} from "react";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {connect, Provider, useSelector} from "react-redux";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// 0. Create a simple react app
const WordsList = (props) => {
    // let initWordList = {
    //     'Jonas': 'Jan',
    //     'Petras': 'Piotr'
    // };
    // const [words, setWords] = useState(initWordList);
    const [newWordK, setNewWordK] = useState('');
    const [newWordV, setNewWordV] = useState('');

    console.log('WordsList props: ');
    console.log(props.words.wordReducer);

    return (<div style={{margin: '20px', display: 'inline-block'}}>
        <form onSubmit={(e) => {
            e.preventDefault();
            // setWords({...words, [newWordK]: newWordV});
            props.dispatch(createWordAction({[newWordK]: newWordV})); // calling redux action
            setNewWordK('');
            setNewWordV('');
        }}>
            <h2>Add word</h2>
            <input type={'text'} onChange={e => setNewWordK(e.target.value)} value={newWordK}/>
            <input type={'text'} onChange={e => setNewWordV(e.target.value)} value={newWordV}/>
            <input style={{width: '100%'}} type={'submit'} value={'Save'}/>
        </form>
        <div>
            {Object.keys(props.words.wordReducer).map(
                (k, i) => <div key={i}>{k} --> {props.words.wordReducer[k]}</div>)}
            {newWordK} {newWordV ? '--> ' + newWordV : ''}
        </div>
    </div>);
};

// 1. Define action creator
let createWordAction = (word) => {
    return {type: 'CREATE_WORD', word};
};

// 2. Create reducer (... which will handle the action)
// ... it accepts state and the action as argument
export let wordReducer = (state = {} , action) => {
    switch (action.type) {
        case 'CREATE_WORD':
            // has to be an immutable operation
            let key = Object.keys(action.word)[0];
            return {...state, [key] : action.word[key]};
        default:
            // has to have a default since all the reducers are invoked on every action
            return state;
    }
};

// 3. Combine all reducers for the store
export let rootReducer = () => {
    return combineReducers({wordReducer});
};

// // 4. Create store
// ... a simple one
// let configureStore = (initState) => createStore(rootReducer, initState);
// ... or a more complex one w/ npm install --save-dev redux-immutable-state-invariant
// let configureStore = (initState) => createStore(rootReducer, initState, applyMiddleware(reduxImmutableStateInvariant()));
// ... or even more crazy
export let configureStore = (initState) => {
    // add support for redux dev tools
    const composeEnhancers = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    return createStore(rootReducer(), initState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
};

// 5. Configure store provider (App.js )

// 6. Connect the component to redux using connect();
let mapStateToProps = (storeState) => {
    return { words: storeState };
};
// export default connect(mapStateToProps)(WordsList);
export default connect(mapStateToProps)(WordsList);


// TODO::
//  - Initialize props - where is the proper place
//  - Try to use the redux debugging tools
//  - Rewrite this example w/ WordList not using redux (just state)
