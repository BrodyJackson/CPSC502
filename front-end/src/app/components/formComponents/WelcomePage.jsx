import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../styles/Forms.css'
import { ReactComponent as Bacteria1 } from '../../resources/001-bacteria.svg'
import { ReactComponent as Bacteria2 } from '../../resources/bifidobacterium.svg'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



export default class WelcomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <>
        <Grid className='formElement'>
          <Grid container className={'welcomeHeaderContainer'} justify={'space-around'}>
            <Grid item md style={{textAlign:'start', paddingLeft: '10%'}}>
              <Typography className={'welcomeMessage'} variant='h1'>Welcome!</Typography>
              <Typography variant='h4' style={{marginTop:'3vh'}}>Let's learn about your gut health</Typography>
              <Typography variant='h6' style={{ marginTop:'3vh', fontWeight:300 }}>New links between the gut microbiome and human health are being discovered everyday. This tool helps to identify how your individual lifestyle factors contribute to your microbiome, and provides personalized insights into the bacterial environment of your gut.</Typography>
            </Grid>
            <Grid item md>
              <Bacteria1 style={{ width: '100%', maxHeight: '35vh'}}></Bacteria1>
            </Grid>
          </Grid>
          <Grid container style={{marginTop: '20vh'}} className={'flexController'}>
            <Grid item md>
              <Bacteria2 style={{width: '100%', maxHeight: '35vh'}}></Bacteria2>
            </Grid>
            <Grid item md>
              <Typography variant='h4' style={{color:'#74c7c5'}}>Why do I need this?</Typography>
              <Typography variant='h6' style={{ marginTop:'3vh', marginLeft:'10%', fontWeight:300, textAlign:'start' }}>
                Changes in lifestyle are increasingly being associated with differences in the bacterial species present in the gut. We now understand that different factors such as diet, medication, or exercise alter the gut environment making it more or less hospitable to different bacterial species. Depending on the species, these bacterial populations can have both positive and negative affects on our overall health, contributing to a wide variety of human process such as metabolic function or development of chronic disease. <br></br><br></br>
                The goal of this project, which began as an undergraduate reasearch project at the University of Calgary is to provide personal insights into gut health. The hope is that this will help educate individuals on how the choices they make concerning lifestyle factors are impacting these bacterial populations, and the health impacts these populations have been tied to. Ideally,  a user of the tool will then be better equipped to make informed decisions that promote a healthy gut microbiome.
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{marginTop:'8vh'}}>
            <Grid md>
              <Typography variant='h5'>So Let's get to know each other with a short survey</Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}