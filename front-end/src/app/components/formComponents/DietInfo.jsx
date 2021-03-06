import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../styles/Forms.css'
import {PrettoSlider, classes} from '../../styles/Forms.js'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default class DietInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            foodCheckbox: false,
            animalProteinValue: 0,
            plantProteinValue: 0,
            carbsValue: 0,
            sugarValue: 0,
            saturatedFatsValue: 0, 
            unsaturatedFatsValue: 0
        }
    }

    // TODO: fix this function based on changes made to state being in home component
    checkDietPercentages(){
        let values = ['animalProteinValue', 'plantProteinValue', 'carbsValue', 'sugarValue', 'saturatedFatsValue', 'unsaturatedFatsValue']
        let totalPercentage = 0
        values.forEach( (entry) => {
            let state = this.state
            let number = state[entry]
            totalPercentage = totalPercentage + number
        })
        if ((totalPercentage !== 0) && (totalPercentage !== 100)) {
            return <Typography variant='caption'>Individual Percentages Must Sum to 100%</Typography>
        }
        return <></>
    }

    render(){
        return (
            <>
                <div className="formElement">
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant='h5'>How many servings of fresh fruit and vegetables do you eat per day?</Typography>
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
                                        {value:5, label: '5'},
                                    ]}
                                    max={10}
                                    min={0}
                                    onChange={(event, value) => this.props.handleSlider(value, 'vegetables') }
                                />
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
                                    ]}
                                    max={10}
                                    min={0}
                                    onChange={(event, value) => this.props.handleSlider(value, 'fruits') }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>Please select all of the following which you eat regularly</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'yogurt', event)} value="yogurt" />
                                }
                                label="Yogurt"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'sauerkraut', event)} value="sauerkraut" />
                                }
                                label="Sauerkraut"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'kefir', event)} value="kefir" />
                                }
                                label="Kefir"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'kimchi', event)} value="kimchi" />
                                }
                                label="Kimchi"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'tempeh', event)} value="tempeh" />
                                }
                                label="Tempeh"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'foodCheckbox', 'miso', event)} value="miso" />
                                }
                                label="Miso"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="formElement">
                    <Grid item >
                        <Typography variant='h5'>Roughly how much of your diet is contributed to the following?</Typography>
                        {this.checkDietPercentages()}
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
                                    {value:100, label: '100g'},
                                    {value:200, label: '200g'},
                                    {value:300, label: '300g'},
                                ]}
                                max={400}
                                min={0}
                                onChange={(event, value) => this.props.handleSlider(value, 'animalProtein') }
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Plant Based Proteins</Typography>
                            <PrettoSlider
                               className="slider"
                               aria-label=''
                               defaultValue={0}
                               valueLabelDisplay="auto"
                               marks={[
                                   {value:100, label: '100g'},
                                   {value:200, label: '200g'},
                                   {value:300, label: '300g'},
                               ]}
                               max={400}
                               min={0}
                               onChange={(event, value) => this.props.handleSlider(value, 'plantProtein') }
                            />
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
                                    {value:100, label: '100g'},
                                    {value:200, label: '200g'},
                                    {value:300, label: '300g'},
                                ]}
                                max={400}
                                min={0}
                                onChange={(event, value) => this.props.handleSlider(value, 'carbs') }
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Sugar</Typography>
                            <PrettoSlider
                                className="slider"
                                aria-label=''
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                marks={[
                                    {value:100, label: '100g'},
                                    {value:200, label: '200g'},
                                    {value:300, label: '300g'},
                                ]}
                                max={400}
                                min={0}
                                onChange={(event, value) => this.props.handleSlider(value, 'sugar') }
                            />
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
                                    {value:100, label: '100g'},
                                    {value:200, label: '200g'},
                                    {value:300, label: '300g'},
                                ]}
                                max={400}
                                min={0}
                                onChange={(event, value) => this.props.handleSlider(value, 'saturatedFats') }
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant='subtitle2'>Unsaturated Fats</Typography>
                            <PrettoSlider
                                className="slider"
                                aria-label=''
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                marks={[
                                    {value:100, label: '100g'},
                                    {value:200, label: '200g'},
                                    {value:300, label: '300g'},
                                ]}
                                max={400}
                                min={0}
                                onChange={(event, value) => this.props.handleSlider(value, 'unsaturatedFats') }
                            />
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
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'dietCheckbox', 'mediterranean', event)} value="mediterranean" />
                                }
                                label="Mediterranean"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'dietCheckbox', 'glutenfree', event)} value="glutenfree" />
                                }
                                label="Gluten Free"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'dietCheckbox', 'vegitarian', event)} value="vegitarian" />
                                }
                                label="Vegitarian"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'dietCheckbox', 'vegan', event)} value="vegan" />
                                }
                                label="Vegan"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={
                                <Checkbox checked={this.state.foodCheckbox[0]} onChange={(event, value) => this.props.handleCheckbox(value, 'dietCheckbox', 'western', event)} value="western" />
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