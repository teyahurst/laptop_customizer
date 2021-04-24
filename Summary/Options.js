import React from 'react';
import USCurrencyFormat from '../../Currency';

function Options(props){
    const summary = Object.keys(props.state).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.state[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });

      return (
          <div>
              {summary}
              

              
          </div>
      )
}

export default Options;