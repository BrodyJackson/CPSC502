import React from 'react';
import { Grid, CircularProgress, Typography, Button, Modal } from '@material-ui/core';
import HeaderCell from './HeaderCell.jsx'
import '../styles/App.css'
import Heatmap from './chartComponents/Heatmap.jsx'
import { ReactComponent as Bacteria } from '../resources/005-bacteria-2.svg'



export default class Results extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            explainModal: false
        }
        this.shouldBeLoading()
        console.log(this.props, ' props in results')
    }

    shouldBeLoading = () => {
        if (this.state.loading != 0){ 
           const timer = setTimeout(() => {
               this.setState({loading: false})
           }, 10000)
        }
    }

    explanationModal = () => {
        let current = this.state.explainModal ? false : true
        this.setState({
            explainModal: current
        })
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
                <>
                    <Grid container direction='row' className='resultsContainer' justify="space-around">
                        <Modal open={this.state.explainModal} onClose={() => this.explanationModal()}>
                            <Grid container className={'explanationModalContainer'}>

                            </Grid>
                        </Modal>
                        <Grid item lg={8} style={{marginTop:'5vh'}}>
                            <Grid container direction={'column'}>
                                <Grid item><Typography variant="h2" style={{ marginLeft: '10%', textAlign: 'start', color: '#52af77'}}>Nice to Meet You!</Typography></Grid>
                                <Grid item>
                                    <Typography variant='h6' style={{marginLeft:'10%', fontWeight:300, textAlign:'start' }}>
                                        Here's a snapshot of your microbiome! We've used the unique lifestyle information you provided to predict the diversity of different bacterial populations in your gut
                                    </Typography>
                                </Grid>
                                <Grid item style={{marginTop:'5vh', marginLeft:'10%', textAlign:'start'}}><Button color={'primary'} variant={'outlined'} onClick={() => this.explanationModal()}>What does this mean?</Button></Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2} style={{marginTop:'5vh'}}>
                            <Bacteria style={{width: '100%', maxHeight: '35vh'}}></Bacteria>
                        </Grid>
                    </Grid>
                    <Grid container direction='column' alignItems='space-evenly' style={{marginLeft:'11%', marginBottom:'5vh'}}>
                        <Grid item lg={8} style={{marginTop: '9vh'}}>
                            <Typography variant="h4" style={{  fontWeight:300, textAlign: 'start'}}>Bacterial Diversity</Typography>
                        </Grid>
                        <Grid item lg={6} style={{marginTop: '1vh'}}>
                            <Typography variant="h6" style={{ fontWeight:300, textAlign: 'start'}}>First, here's an broad overview of how your lifestyle choices are affecting diversity</Typography>
                        </Grid>
                    </Grid>
                    <Heatmap surveyResults={this.props.currentFormItems}></Heatmap>
                    <Grid container direction='column' alignItems='space-evenly' style={{marginLeft:'11%', marginBottom:'2vh'}}>
                        <Grid item lg={8} style={{marginTop: '5vh'}}>
                            <Typography variant="h4" style={{  fontWeight:300, textAlign: 'start'}}>Let's learn more about these bacteria!</Typography>
                        </Grid>
                        <Grid item lg={6} style={{marginTop: '1vh'}}>
                            <Typography variant="h6" style={{ fontWeight:300, textAlign: 'start'}}>To help you understand how these diversity scores translate to your personal health, select one of the bacterial species to learn more</Typography>
                        </Grid>
                    </Grid>

                </>
              }
            </>
        )
    }
}