import React, {useState} from 'react';

const Words = (p) => {

    let words = [
        {lt: "šuo", en: "dog"},
        {lt: "katė", en: "cat"}
    ];

    const [color, setColor] = useState({id: -1, color: ''});

    return (<div style={{ display: 'inline-block'}}>{
            words.map((pair, idx) => {
                return <div key={idx} >
                    <p style={{ display: 'inline-block', margin: '10px', minWidth: '60px'}}>{pair.en}</p>
                    <input
                        onChange={(e) => {
                            if(e.target.value === pair.lt) setColor({id: idx, color: 'green'});
                            else if(e.target.value.length === 0) setColor({id: idx, color: ''});
                            else {
                                let incorrect = false;
                                for (var i = 0; i < e.target.value.length; i++) {
                                    if(e.target.value[i] !== pair.lt[i]) incorrect = true; break;
                                }
                                if(incorrect) setColor({id: idx, color: 'red'});
                                else setColor({id: idx, color: ''});
                            }

                        }}
                        style={{ display: 'inline-block', backgroundColor: idx === color.id ? color.color : ''}}
                    />
                </div>;
            })
        }</div>
    );
};

export default Words;
