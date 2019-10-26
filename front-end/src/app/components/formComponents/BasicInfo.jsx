import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import '../../styles/Forms.css'
import {PrettoSlider, classes} from '../../styles/Forms.js'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class BasicInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ageValue: 0,
            heightValue: 0,
            genderValue: null, 
        }
    }

    handleSliderChange(value, id){
        console.log(this.state)
        console.log('slider changed to ', value)
        let currentState = this.state
        currentState[`${id}Value`] = value
        this.setState(currentState)
        console.log(this.state)
    }

    handleDropdownChange(value, id){
        console.log(this.state)
        console.log('dropdown changed to ', value)
        let currentState = this.state
        currentState[`${id}Value`] = value.props.value
        this.setState(currentState)
        console.log(this.state)
    }
    
    render(){
        return (
            <>
                <div className="formElement">
                    <Grid item>
                        <Typography variant='h5'>What's your age?</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Age'
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:25, label: '25'},
                                {value:50, label: '50'},
                                {value:75, label: '75'},
                            ]}
                            max={100}
                            min={5}
                            onChange={(event, value) => this.handleSliderChange(value, 'age') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>How Tall are you? (CM)</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Height'
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:75, label: '75CM'},
                                {value:125, label: '100CM'},
                                {value:150, label: '150CM'},
                            ]}
                            max={200}
                            min={50}
                            onChange={(event, value) => this.handleSliderChange(value, 'height') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className='formElement'>
                    <Grid item >
                                <Typography variant='subtitle'>What is your Gender?</Typography>
                    </Grid>
                    <FormControl className={'test'}>
                        <Select
                            value={this.state.genderValue}
                            onChange={(event, value) => this.handleDropdownChange(value, 'gender') }
                            >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'Yes'}>Male</MenuItem>
                            <MenuItem value={'No'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </>
        )
    }
}