import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import '../../styles/Forms.css'
import {PrettoSlider, classes} from '../../styles/Forms.js'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';



export default class DietInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            exerciseValue: 0,
            sleepValue: 0,
            smokingValue: null, 
            antiBioticsValue: null,
            countryValue: null,
            foodCheckbox: false
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

    handleCheckboxChange(value, blah){
        console.log('gender changed to ', value, blah)
        this.setState({
            foodCheckbox: value
        })
        console.log(this.state)
    }

    render(){
        return (
            <>
                <div className="formElement">
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant='h5'>How servings of fresh Fruit and Vegetables do you eat per day?</Typography>
                        </Grid>
                        <Grid container justify="space-evenly">
                            <Grid item xs={5}>
                                <Typography variant='subtitle'>Vegetables</Typography>
                                <PrettoSlider
                                    className="slider"
                                    aria-label=''
                                    defaultValue={0}
                                    valueLabelDisplay="auto"
                                    marks={[
                                        {value:2, label: '2'},
                                        {value:4, label: '4'},
                                        {value:6, label: '6'},
                                    ]}
                                    max={10}
                                    min={0}
                                    onChange={(event, value) => this.handleSliderChange(value, 'vegetables') }
                                ></PrettoSlider>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant='subtitle'>Fruits</Typography>
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
                                    onChange={(event, value) => this.handleSliderChange(value, 'fruits') }
                                ></PrettoSlider>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>Please seelect all of the following which you eat regularily</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Yogurt"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Sauerkraut"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Kefir"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Kimchi"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Tempeh"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Miso"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>What percentage of your total diet is contributed to the following?</Typography>
                    </Grid>
                    <Typography variant='subtitle'>Proteins</Typography>
                    <Grid container justify="space-evenly">
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Animal Based Proteins</Typography>
                            <PrettoSlider
                                className="slider"
                                aria-label=''
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                marks={[
                                    {value:2, label: '2'},
                                    {value:4, label: '4'},
                                    {value:6, label: '6'},
                                ]}
                                max={10}
                                min={0}
                                onChange={(event, value) => this.handleSliderChange(value, 'animalProtein') }
                            ></PrettoSlider>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Plant Based Proteins</Typography>
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
                                onChange={(event, value) => this.handleSliderChange(value, 'plantProtein') }
                            ></PrettoSlider>
                        </Grid>
                    </Grid>
                    <Typography variant='subtitle'>Carbohydrates</Typography>
                    <Grid container justify="space-evenly">
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Complex Carbohydrates</Typography>
                            <PrettoSlider
                                className="slider"
                                aria-label=''
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                marks={[
                                    {value:2, label: '2'},
                                    {value:4, label: '4'},
                                    {value:6, label: '6'},
                                ]}
                                max={10}
                                min={0}
                                onChange={(event, value) => this.handleSliderChange(value, 'complexCarbs') }
                            ></PrettoSlider>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Refined Carbohydrates</Typography>
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
                                onChange={(event, value) => this.handleSliderChange(value, 'refinedCarbs') }
                            ></PrettoSlider>
                        </Grid>
                    </Grid>
                    <Typography variant='subtitle'>Fats</Typography>
                    <Grid container justify="space-evenly">
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Saturated Fats</Typography>
                            <PrettoSlider
                                className="slider"
                                aria-label=''
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                marks={[
                                    {value:2, label: '2'},
                                    {value:4, label: '4'},
                                    {value:6, label: '6'},
                                ]}
                                max={10}
                                min={0}
                                onChange={(event, value) => this.handleSliderChange(value, 'saturatedFats') }
                            ></PrettoSlider>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Unsaturated Fats</Typography>
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
                                onChange={(event, value) => this.handleSliderChange(value, 'unsaturatedFats') }
                            ></PrettoSlider>
                        </Grid>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>Do you associate with any of the following diets?</Typography>
                    </Grid>
                    <Grid container justify="space-evenly">
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Mediterranean"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Gluten Free"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Vegitarian"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Vegan"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.handleCheckboxChange(value, event)} value="checkedA" />
                                }
                                label="Western"
                            />
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}