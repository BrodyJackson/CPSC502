import React from 'react';
import { Grid, CircularProgress, Typography, Button, Modal, Select, FormControl, MenuItem } from '@material-ui/core';
import HeaderCell from './HeaderCell.jsx'
import '../styles/App.css'
import Heatmap from './chartComponents/Heatmap.jsx'
import { ReactComponent as Bacteria } from '../resources/005-bacteria-2.svg'
import { ReactComponent as Image1 } from '../resources/bifidobacterium.svg'
import { ReactComponent as Image2 } from '../resources/004-coccus-1.svg'
import { ReactComponent as Image3 } from '../resources/001-bacteria.svg'
import { ReactComponent as Image4 } from '../resources/002-bacteria-1.svg'
import { allGenusList, bacteriaInfo  } from '../configs/bacteriaInfo'

export default class Results extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            explainModal: false,
            allBacteria: allGenusList,
            selectedBacteria: 'bifidobacterium',
            values: [],
            image1: ['bifidobacterium', 'bilophila', 'enterococcus', 'streptococcus'],
            image2: ['lactobacillus', 'clostridium', 'faecalibacterium'],
            image3: ['bacteroides', 'roseburia', 'eschericiaColi'],
            image4: ['alistipes', 'eubacterium', 'helicobacterPylori']
        }
        this.shouldBeLoading()
        console.log(this.props, ' props in results')
    }

    setAPIResponse = (response) => {
        console.log('in parent value setter')
        this.setState({
            values: response
        })
        console.log(response, ' response from parent')
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

    generateSelection = () => {
        let returnArray = []
        this.state.allBacteria.forEach((bacteria) => {
            returnArray.push(<MenuItem value={bacteria}>{bacteria}</MenuItem>)
        })
        return returnArray
    }

    selectMenuChange = (event, value) => {
        this.setState({
            selectedBacteria: value.props.value
        })
    }

    determineAffecting = (currentlySelected) => {
        let increaseAttributes = []
        let decreaseAttributes = []
        this.state.values.forEach((attribute) => {
            console.log(attribute)
            attribute['data'].forEach((species) => {
                if (species['x'] === currentlySelected && species['y'] > 50) {
                    increaseAttributes.push(<p>{attribute['name']}</p>)
                }
                if (species['x'] === currentlySelected && species['y'] < 50) {
                    decreaseAttributes.push(<p>{attribute['name']}</p>)
                }
            })
        })
        console.log(increaseAttributes)
        return [increaseAttributes, decreaseAttributes]
    }

    determineHealthAffects = () => {
        let positive = []
        let negative = []
        bacteriaInfo[this.state.selectedBacteria]['health_benefits'].forEach( benefit => {
            positive.push(<p>{benefit}</p>)
        })
        bacteriaInfo[this.state.selectedBacteria]['health_impacts'].forEach( impact => {
            negative.push(<p>{impact}</p>)
        })
        return [positive, negative]
    }

    generateImage = () => {
        if (this.state.image1.includes(this.state.selectedBacteria)) {
            return <Image1 style={{marginTop:40, width: '100%', maxHeight: '20vh'}}></Image1>
        } else if (this.state.image2.includes(this.state.selectedBacteria)) {
            return <Image2 style={{marginTop:40, width: '100%', maxHeight: '20vh'}}></Image2>
        } else if (this.state.image3.includes(this.state.selectedBacteria)) {
            return <Image3 style={{marginTop:40, width: '100%', maxHeight: '20vh'}}></Image3>
        } else {
            return <Image4 style={{marginTop:40, width: '100%', maxHeight: '20vh'}}></Image4>
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
                    <Heatmap surveyResults={this.props.currentFormItems} valueSetter={(value) => this.setAPIResponse(value)}></Heatmap>
                    <Grid container direction='column'>
                        <Grid item xs={10}>
                            <Grid container direction='column' alignItems='space-evenly' style={{marginLeft:'13%', marginBottom:'2vh'}}>
                                <Grid item lg={8} style={{marginTop: '5vh'}}>
                                    <Typography variant="h4" style={{  fontWeight:300, textAlign: 'start'}}>Let's learn more about these bacteria!</Typography>
                                </Grid>
                                <Grid item lg={6} style={{marginTop: '3vh'}}>
                                    <Typography variant="h6" style={{ fontWeight:300, textAlign: 'start'}}>To help you understand how these diversity scores translate to your personal health, select one of the bacterial species to learn more</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{textAlign:'start', marginLeft: '11%'}}>
                            <FormControl variant='outlined' style={{marginTop: '3vh', width:'15%'}}>
                              <Select
                                value={this.state.selectedBacteria}
                                onChange={(event,value) => this.selectMenuChange(event,value)}
                                id={'speciesSelector'}
                              >
                                  {this.generateSelection()}
                              </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container direction='column' style={{marginTop:'5vh', marginBottom: '5vh'}} className={'bacteriaInfoContainer'}>
                        <Grid container direction='row' className={'bacteriaInfoItem'}>
                            <Grid item xs={8}>
                                <Typography variant="h4" style={{ color: '#52af77', fontWeight:300, textAlign: 'start'}}> Overview </Typography>
                                <Typography variant="h6" style={{ marginTop: 10, fontWeight:300, textAlign: 'start'}}> {bacteriaInfo[this.state.selectedBacteria]['description']} </Typography>
                                <Typography variant="h6" style={{ marginTop: 10, fontWeight:300, textAlign: 'start'}}> You should be attempting to <b style={{color:'#3f51b5'}}>{bacteriaInfo[this.state.selectedBacteria]['desired_outcome']}</b> the diversity of this bacteria, which is located in the: <b style={{color:'#3f51b5'}}>{bacteriaInfo[this.state.selectedBacteria]['location']}</b>  </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                {this.generateImage()}
                            </Grid>
                        </Grid>
                        <Grid container direction='row' className={'bacteriaInfoItem'}>
                            <Grid item xs={12}>
                                <Typography variant="h6" style={{ color: '#52af77', textAlign: 'start'}}>Based on your information, here are the lifestyle factors affecting diversity levels of this bacteria in your gut </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' className={'bacteriaInfoItem'}>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ fontWeight:300}}> Increasing </Typography>
                                {this.determineAffecting(this.state.selectedBacteria)[0]}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ fontWeight:300}}> Reducing  </Typography>
                                {this.determineAffecting(this.state.selectedBacteria)[1]}
                            </Grid>
                        </Grid>
                        <Grid container direction='row' className={'bacteriaInfoItem'}>
                            <Grid item xs={12}>
                                <Typography variant="h6" style={{ color: '#52af77', textAlign: 'start'}}>Here are some of the implications this could have on your health </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' className={'bacteriaInfoItem'}>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ fontWeight:300}}> Positive </Typography>
                                {this.determineHealthAffects()[0]}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" style={{ fontWeight:300}}> Negative  </Typography>
                                {this.determineHealthAffects()[1]}
                            </Grid>
                        </Grid>

                    </Grid>

                </>
              }
            </>
        )
    }
}