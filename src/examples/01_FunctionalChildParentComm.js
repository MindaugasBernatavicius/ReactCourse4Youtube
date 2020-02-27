import React from "react";

const ChildComp = (props) => <input
    onChange={props.printCallback}
    onClick={props.clickCallback}
    type="text" style={{margin: '50px'}}
/>;

export const FunctionalChildParentComm = () => {
    const parentCallback1 = (event) => console.log("text  ->" + event.target.value);
    const parentCallback2 = (event) => console.log("click ->" + event.target.width);
    return (<ChildComp printCallback={parentCallback1} clickCallback={parentCallback2}/>);
};