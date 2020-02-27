// import React, {useState} from "react";
//
// const Autocomplete = p => (
//     <form style={{textAlign: 'center'}}>
//         <p style={{display: 'inline-block', paddingRight: 5}}>Which movie would you like to look up:</p>
//         <input type="text" onChange={p.moviePageCallback}/>
//     </form>
// );
//
// const AutocompletesSibling = (props) => <p style={{textAlign: 'center'}}>{props.m}</p>;
//
// export const SiblingCommunication = () => {
//     // const [movie, setMovie] = useState('');
//     // const moviePageCallback = (e) => {
//     //     console.log("->" + e.target.value);
//     //     setMovie(e.target.value);
//     // };
//     let movie = "aaaa";
//     return (<>
//         {/*<Autocomplete moviePageCallback={moviePageCallback}/>*/}
//         <AutocompletesSibling m={movie}/>
//     </>);
// };


import React, {useState} from "react";

const ChildComp = (props) => <input
    onChange={props.printCallback}
    onClick={props.clickCallback}
    type="text" style={{margin: '50px'}}
/>;

export const SiblingCommunicationSimple = () => {
    // var text = "default text";
    // const x = useState(); // array destructuring
    const [text, setText] = useState(); // array destructuring
    const parentCallback1 = (event) => {
        console.log("text  ->" + event.target.value);
        // x[1](event.target.value);
        setText(event.target.value);
    };
    return (<>
        <ChildComp printCallback={parentCallback1}/>
        {/*<p style={{margin: '50px'}}>{x[0]}</p>*/}
        <p style={{margin: '50px'}}>{text}</p>
    </>);
};