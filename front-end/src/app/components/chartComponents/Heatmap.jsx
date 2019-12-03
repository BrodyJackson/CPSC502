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
              shadeIntensity: 0.5,
              colorScale: {
                ranges: [
                  {
                    from: 0,
                    to: 25,
                    name: 'extreme',
                    color: '#FF0000'
                  },
                  {
                    from: 25,
                    to: 50,
                    name: 'low',
                    color: '#FFB200'
                  },
                  {
                    from: 50,
                    to: 75,
                    name: 'normal',
                    color: '#128FD9'
                  },
                  {
                    from: 75,
                    to: 100,
                    name: 'high',
                    color: '#00A100'
                  },
                ]
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
      debugger
      fetch('http://127.0.0.1:5000/lifestyleheatmap', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(params)
      })
        .then( response => response.json())
        .then( json => {
          console.log(json)
          this.setState({
            series: json
          })
        })
    }

    prepareAPICall(results) {
      let apiRequest = []
      console.log(results)
      console.log(apiRequiredInfo)
      apiRequiredInfo.forEach( record => {
        let requestItem = record
        if (record['attribute'] === 'foodCheckbox') {
          let count = 0
          for ( let key in results[`${record['attribute']}Value`] ) {
            if (results[`${record['attribute']}Value`][key] === true) count++
          }
          requestItem['value'] = count
          requestItem['attribute'] = 'fermentedfood'
          apiRequest.push(requestItem)
        }
        else if (record['attribute'] === 'dietCheckbox') {
          for ( let key in results[`${record['attribute']}Value`] ) {
            requestItem = {
              'attribute': key,
              'maxValue': 1,
              'type': 'checkbox',
              'value': results[`${record['attribute']}Value`][key] === true ? 1 : 0
            }
            apiRequest.push(requestItem)
          }
        }
        else {
          requestItem['value'] = results[`${record['attribute']}Value`]
          apiRequest.push(requestItem)
        }
      })
      console.log(apiRequest)
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