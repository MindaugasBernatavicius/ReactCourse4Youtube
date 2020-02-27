import React from "react";

// Old style function
// function Comp(props){
//     return(<p>{props.m}</p>)
// }

// const Comp = (props) => {
//     return(<p style={{margin: '50px'}}>{props.m}</p>)
// };

const ChildComp = (props) => <p style={{margin: '50px'}}>{props.m}</p>;

export const FunctionalParentChildComm = () => {
    let movie = "aaaa";
    return (<ChildComp m={movie}/>);
};