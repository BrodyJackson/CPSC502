import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { allLifestyleImpacts, apiRequiredInfo } from '../../configs/lifestyleImpactsConfig.js'
import { allGenusList } from '../../configs/bacteriaInfo.js'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
const axios = require('axios').default

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = allLifestyleImpacts[i];
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  function generateSeriesData() {
      let seriesData = []
      allGenusList.forEach((genus) => {
        seriesData.push({
            name: genus,
            data: generateData(20, {
                min: 15,
                max: 100
            })
        })
      })
      return seriesData
  }



  export default class Heatmap extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            height: 1000
          },
          // yaxis: {
          //   labels: {
          //     minHeight: 20,
          //     style: {
          //       fontSize: '14px'
          //     }
          //   }
          // },
          plotOptions: {
            heatmap: {
              // enableShades: false,
              shadeIntensity: 0.25,
              // reverseNegativeShade: true,
              colorScale: {
                ranges: [
                  {
                    from: -10,
                    to: -5.6,
                    name: 'extreme',
                    color: '#FF0000'
                  },
                  {
                    from: -5.5,
                    to: -0.1,
                    name: 'low',
                    color: '#FFB200'
                  },
                  {
                    from: 0,
                    to: 5.5,
                    name: 'normal',
                    color: '#128FD9'
                  },
                  {
                    from: 5.6,
                    to: 10,
                    name: 'high',
                    color: '#00A100'
                  },
                ],
                inverse: true
              }
            }
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: ''
          }
        },
        series: this.prepareAPICall(this.props.surveyResults),
      }
    }

    getHeatmap(params) {
      fetch('https://microbiome-predictor-server.herokuapp.com/lifestyleheatmap', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(params)
      })
        .then( response => response.json())
        .then( json => {
          json.forEach(response => {
            response['name'] = response['name'].charAt(0).toUpperCase() + response['name'].slice(1)
          })
          this.setState({
            series: json
          })
          this.props.valueSetter(json)
        })
    }

    prepareAPICall(results) {
      let apiRequest = []
      apiRequiredInfo.forEach( record => {
        let requestItem = record
        if (record['attribute'] === 'foodCheckbox' || record['attribute'] === 'fermentedFood') {
          let count = 0
          for ( let key in results[`${record['attribute']}Value`] ) {
            if (results[`${record['attribute']}Value`][key] === true) count++
          }
          requestItem['value'] = count
          requestItem['attribute'] = 'fermentedFood'
          apiRequest.push(requestItem)
        }
        else {
          requestItem['value'] = results[`${record['attribute']}Value`]
          apiRequest.push(requestItem)
        }
      })
      console.log(apiRequest, 'this is the api request')
      this.getHeatmap(apiRequest)
    }

    render() {

      // const seriesData = this.getHeatmap(this.state.apiRequestParams)

      return (
        <>
        {this.state.series !== undefined &&
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height="350"/>
          </div>
        }
        </>
      );
    }
  }