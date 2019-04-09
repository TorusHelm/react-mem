import React from 'react';
import './style.scss';

function Joke(props) {

    return (
        <div className="joke">
            {props.question ? <h3 className="joke__title">{props.question}</h3> : ''}
            <h2 className={`joke__pounch ${props.question ? '' : 'joke__pounch_alone'}`}>{props.punchLine}</h2>
        </div>
    )
}

export default Joke;