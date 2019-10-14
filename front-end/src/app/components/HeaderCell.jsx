import React from 'react';
import { Grid } from '@material-ui/core';
import '../styles/Home.css'


export default class HeaderCell extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Grid item className='headerCell'>
                <img src={require('../resources/person.svg')} onClick={()=> alert('hello')}></img>
            </Grid>
        )
    }
}