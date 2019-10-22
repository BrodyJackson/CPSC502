import React from 'react';
import { Grid } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import '../../styles/Forms.css'



export default class LifestyleInfo extends React.Component {
    constructor(props){
        super(props)
    }

    
    render(){
        return (
            <>
            <Slider></Slider>
            </>
        )
    }
}