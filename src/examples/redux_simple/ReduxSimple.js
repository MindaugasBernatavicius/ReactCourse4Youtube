import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";

const CourseList1 = (p) => {
    return <div style={containerStyle}>{p.input}</div>;
};

const CourseList2 = (p) => {
    return <table style={{...containerStyle, minWidth: '50px'}}>
        { p.input.map((d, i) =>
            <tr key={i}>
                <p style={{display:'inline-block', minWidth: '100px'}}>{d}</p>
                <button onClick={() => {p.dispatch(deleteInputAction(d))}}>DELETE</button>
            </tr>)
        }
    </table>;
};

const CreationForm = (p) => {
    const [ inp, setInp ] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (inp !== "") {
                p.dispatch(createInputAction(inp));
                setInp("");
            }}} style={{...containerStyle, display: 'inline-block'}}>
            <input onChange={e => setInp(e.target.value)} type={'text'} value={inp}/>
            <input style={{width: '100%'}} type={'submit'}/>
        </form>
    );
};

let createInputAction = (input) => ({type: 'CREATE_INPUT', input});
let deleteInputAction = (input) => ({type: 'DELETE_INPUT', input});

let inputReducer = (state = {input: []}, action) => {
    switch (action.type) {
        case 'CREATE_INPUT':
            return {input: [...state.input, action.input]};
        case 'DELETE_INPUT':
            return {input: state.input.filter((item) => {
                return item !== action.input
            })};
        default:
            return state;
    }
};

const ConnectedCreationForm = connect((s) => {return {input: s}})(CreationForm);
const ConnectedCourseList2 = connect((s) => s)(CourseList2);

let configureStore = (initState) => createStore(inputReducer, initState);

let buttonStyle = {margin: '5px'};
let containerStyle = {margin: '10px'};

const ReduxSimple = () => {
    return (
        <Provider store={configureStore({input: ["The Matrix", "Grounhog Day"]})}>
            <BrowserRouter>
                <nav>
                    <Link to={'/cl1'}><button style={buttonStyle}>CL1</button></Link>
                    <Link to={'/list'}><button style={buttonStyle}>List</button></Link>
                    <Link to={'/create'}><button style={buttonStyle}>Create</button></Link>
                </nav>
                <Switch>
                    <Route path={"/list"} component={() => <ConnectedCourseList2/>}/>
                    <Route path={"/create"} component={() => <ConnectedCreationForm/>}/>
                    <Route path={["/", "/cl1"]} component={() => <CourseList1 content={"CL1"}/>}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default ReduxSimple;
