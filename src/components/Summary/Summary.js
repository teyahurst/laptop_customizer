import React from 'react';
import Options from './Options';

function Summary(props){
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Options 
                state={props.state}/>
        </section>
    )
}

export default Summary;