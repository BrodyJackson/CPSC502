import React from 'react';
import { Grid } from '@material-ui/core';
import '../styles/Home.css'
import PersonFormController from './PersonFormController.jsx'
import BasicInfo from './formComponents/BasicInfo.jsx'
import LifestyleInfo from './formComponents/LifestyleInfo.jsx'
import DietInfo from './formComponents/DietInfo.jsx'
import WelcomePage from './formComponents/WelcomePage.jsx'
import Results from './Results.jsx'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.initialState = {
            ageValue: 0,
            heightValue: 0,
            weightValue: 0,
            genderValue: '',
            exerciseValue: 0,
            sleepValue: 0,
            stressedValue: 0,
            smokingValue: '', 
            antiBioticsValue: '',
            countryValue: '', 
            foodCheckboxValue: {
                yogurt: false,
                sauerkraut: false, 
                kefir: false, 
                kimchi: false, 
                tempeh: false, 
                miso: false
            },
            dietCheckboxValue: {
                mediterranean: false,
                vegan: false,
                glutenfree: false, 
                vegitarean: false,
                western: false
            },
            animalProteinValue: 0,
            plantProteinValue: 0,
            carbsValue: 0,
            sugarValue: 0,
            saturatedFatsValue: 0, 
            unsaturatedFatsValue: 0
        }
        this.state = this.initialState
    }

    handleSliderChange = (value, id) => {
        let currentState = this.state
        currentState[`${id}Value`] = value
        this.setState(currentState)
    }

    handleDropdownChange = (value, id) => {
        let currentState = this.state
        currentState[`${id}Value`] = value.props.value
        this.setState(currentState)
    }

    handleCheckboxChange = (value, id, type, blah) => {
        let currentState = this.state
        currentState[`${id}Value`][type] = value
        this.setState(currentState)
    }


    determineFormItems = (activeStep) => {
        switch (activeStep) {
            case 0:
                return <WelcomePage></WelcomePage>
            case 1:
                return <BasicInfo handleDropdown={this.handleDropdownChange} handleSlider={this.handleSliderChange} genderValue={this.state.gendervalue}></BasicInfo>;
            case 2:
                return <LifestyleInfo handleDropdown={this.handleDropdownChange} handleSlider={this.handleSliderChange}></LifestyleInfo>;
            case 3:
                return <DietInfo handleCheckbox={this.handleCheckboxChange} handleSlider={this.handleSliderChange}></DietInfo>;
            default:
                return <Results currentFormItems={this.state}></Results>;
        }
    }

    render(){
        return (
            <>
            <Grid container className='mainform'>
                <PersonFormController determineCurrentForm={this.determineFormItems} currentFormItems={this.state}></PersonFormController>
            </Grid>
            </>
        )
    }
}