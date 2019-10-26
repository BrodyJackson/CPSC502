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
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export default class LifestyleInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            exerciseValue: 0,
            sleepValue: 0,
            stressedValue: 0,
            smokingValue: '', 
            antiBioticsValue: '',
            countryValue: ''
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

    prepareCountryMenu = () => {
        let countryMenuItems = []
        CountryRegionData.forEach( (country) =>{
            countryMenuItems.push(<MenuItem value={`${country[0]}`}>{country[0]}</MenuItem>)
        })
        return countryMenuItems
    }
    
    
    render(){
        let countryMenuItems = this.prepareCountryMenu()
        console.log(countryMenuItems)
        return (
            <>
                <div className="formElement">
                    <Grid item>
                        <Typography variant='h5'>How many hours of exercise do you get per week?</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Hours'
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:5, label: '5'},
                                {value:10, label: '10'},
                                {value:15, label: '15'},
                            ]}
                            max={20}
                            min={0}
                            onChange={(event, value) => this.handleSliderChange(value, 'exercise') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>How many hours of sleep do you average per night?</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Hours of Sleep'
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:2, label: '2'},
                                {value:4, label: '4'},
                                {value:6, label: '6'},
                                {value:8, label: '8'},
                            ]}
                            max={10}
                            min={0}
                            onChange={(event, value) => this.handleSliderChange(value, 'sleep') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>How Stresed are you on a daily basis?</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Hours of Sleep'
                            defaultValue={0}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:2, label: '2'},
                                {value:4, label: '4'},
                                {value:6, label: '6'},
                                {value:8, label: '8'},
                            ]}
                            max={10}
                            min={0}
                            onChange={(event, value) => this.handleSliderChange(value, 'stressed') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className='formElement'>
                    <Grid container direction="row" justify="center">
                        <Grid container direction="column" xs={4}>
                            <Grid item >
                                <Typography variant='subtitle'>Do you smoke?</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl className={'test'}>
                                    <Select
                                        value={this.state.smokingValue}
                                        onChange={(event, value) => this.handleDropdownChange(value, 'smoking') }
                                        >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" xs={4}>
                            <Grid item >
                                <Typography variant='subtitle'>Have you taken Anti-Biotics in the last year?</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl className={'test'}>
                                    <Select
                                        value={this.state.antiBioticsValue}
                                        onChange={(event, value) => this.handleDropdownChange(value, 'antiBiotics') }
                                        >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value={'Yes'}>Yes</MenuItem>
                                        <MenuItem value={'No'}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" xs={4}>
                            <Grid item >
                                <Typography variant='subtitle'>Where do you live?</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl className={'test'}>
                                    <Select
                                        value={this.state.countryValue}
                                        onChange={(event, value) => this.handleDropdownChange(value, 'country') }
                                        >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        {countryMenuItems}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>           
                    </Grid>
                </div>  
            </>
        )
    }
}