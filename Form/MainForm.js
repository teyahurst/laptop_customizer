import React from 'react';
import Specs from './Specs';
import FEATURES from '../../FEATURES'


function MainForm(props){
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
                <Specs 
                    FEATURES={FEATURES}
                    state={props.state}
                    updateFeature={props.updateFeature}/>
        </form>
    )
}

export default MainForm;