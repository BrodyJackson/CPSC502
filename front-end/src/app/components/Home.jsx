import React from 'react';
import { Grid } from '@material-ui/core';
import HeaderCell from './HeaderCell.jsx'
import '../styles/Home.css'
import PersonForm from './PersonForm.jsx'


export default class Home extends React.Component {
    constructor(props){
        super(props)
    
    }

    determineActive(position) {
        return false
    }

    render(){
        return (
            <>
            <Grid container className='mainform'>
                <PersonForm></PersonForm>
            </Grid>
            {/* <Grid container className='body'>
                
            </Grid> */}
            </>
        )
    }
}