import React, {useState} from "react";

const Autocomplete = p => (
    <form style={{textAlign: 'center'}}>
        <p style={{display: 'inline-block', paddingRight: 5}}>Which movie would you like to look up:</p>
        <input type="text" onChange={p.moviePageCallback}/>
    </form>
);

const AutocompletesSibling = (p) => <p style={{textAlign: 'center'}}>{p.movie}</p>;

export const SiblingCommunication = () => {
    const [movie, setMovie] = useState('');
    const moviePageCallback = (e) => {
        console.log("->" + e.target.value);
        setMovie(e.target.value)
    };
    return (<>
        <Autocomplete moviePageCallback={moviePageCallback}/>
        <AutocompletesSibling movie={movie}/>
    </>);
};