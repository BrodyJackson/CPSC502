import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import HeaderCell from './HeaderCell.jsx'
import '../styles/App.css'



export default class Results extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.shouldBeLoading()
    }

    shouldBeLoading = () => {
        if (this.state.loading != 0){ 
           const timer = setTimeout(() => {
               this.setState({loading: false})
           }, 10000)
        }
    }

    render(){
        return (
            <>
              {this.state.loading == true && 
                <Grid container direction="column" className="loadingContainer" justify="center">
                    <Grid item><Typography variant="h4">Your results will be available shortly</Typography></Grid>
                    <Grid item><CircularProgress size={150} ></CircularProgress></Grid>
                </Grid>
              }
            </>
        )
    }
}