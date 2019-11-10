import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import HeaderCell from './HeaderCell.jsx'
import '../styles/App.css'
import Heatmap from './chartComponents/Heatmap.jsx'



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
                <Grid container direction="column" className="loadingContainer" justify="center" spacing={5}>
                    <Grid item><Typography variant="h4">Your results will be available shortly</Typography></Grid>
                    <Grid item><CircularProgress size={150} ></CircularProgress></Grid>
                </Grid>
              }
              {this.state.loading == false &&
                <Grid container direction="column" className='resultsContainer' justify="space-evenly" spacing={5}>
                    <Grid item><Typography variant="h4">Here's a snapshot of what's affecting your gut</Typography></Grid>
                    <Grid item className='heatMap'><Heatmap></Heatmap></Grid>
                </Grid>
              }
            </>
        )
    }
}