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
          genderDropdown: 'None'
        }
    }

    //this is example of how dropdowns should be done so that the value is showing properly
    dropDownHandler(event, value) {
      console.log('dropdown handler')
      this.setState({genderDropdown : value.props.value})
      this.props.handleDropdown(value, 'gender')
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
                            onChange={(event, value) => this.props.handleSlider(value, 'age') }
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
                                {value:175, label: '175CM'},
                            ]}
                            max={200}
                            min={50}
                            onChange={(event, value) => this.props.handleSlider(value, 'height') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>What is your weight (Kg)</Typography>
                    </Grid>
                    <Grid item >
                        <PrettoSlider
                            className="slider"
                            aria-label='Height'
                            defaultValue={10}
                            valueLabelDisplay="auto"
                            marks={[
                                {value:50, label: '50 Kg'},
                                {value:100, label: '200 kg'},
                                {value:150, label: '300 kg'},
                            ]}
                            max={200}
                            min={10}
                            onChange={(event, value) => this.props.handleSlider(value, 'weight') }
                        ></PrettoSlider>
                    </Grid>
                </div>
                <div className='formElement'>
                    <Grid item >
                                <Typography variant='subtitle'>What is your Gender?</Typography>
                    </Grid>
                    <FormControl className={'test'}>
                        <Select
                            value={this.state.genderDropdown}
                            onChange={(event, value) => this.dropDownHandler(event, value) }
                            >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </>
        )
    }
}