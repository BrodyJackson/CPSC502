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
            genderValue: null, 
        }
    }

    handleSliderChange(value){
        console.log('slider changed to ', value)
        this.setState({
            ageValue: value
        })
        console.log(this.state)
    }

    handleGenderChange(value){
        console.log('gender changed to ', value)
        this.setState({
            genderValue: value
        })
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
                            onChange={(event, value) => this.handleSliderChange(value) }
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
                            onChange={(event, value) => this.handleSliderChange(value) }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className='formElement'>
                    <FormControl className={'test'}>
                        <InputLabel htmlFor="age-auto-width">Gender</InputLabel>
                        <Select
                        value={this.state.genderValue}
                        onChange={(event, value) => this.handleGenderChange(value) }
                        inputProps={{
                            name: 'age',
                            id: 'age-auto-width',
                        }}
                        autoWidth
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        </Select>
                        
                    </FormControl>
                </div>
            </>
        )
    }
}