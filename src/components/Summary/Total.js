import React from 'react';
import USCurrencyFormat from '../../Currency';




function Total(props){
    const total = Object.keys(props.state).reduce(
    (acc, curr) => acc + props.state[curr].cost,
    0
  );


    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
        </div>
    )
}

export default Total;
