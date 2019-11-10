import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { allLifestyleImpacts } from '../../configs/lifestyleImpactsConfig.js'
import { allGenusList } from '../../configs/bacteriaInfo.js'

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
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              colorScale: {
                ranges: [{
                    from: 0,
                    to: 25,
                    name: 'low',
                    color: '#00A100'
                  },
                  {
                    from: 26,
                    to: 50,
                    name: 'medium',
                    color: '#128FD9'
                  },
                  {
                    from: 51,
                    to: 75,
                    name: 'high',
                    color: '#FFB200'
                  },
                  {
                    from: 76,
                    to: 100,
                    name: 'extreme',
                    color: '#FF0000'
                  }
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
        series: generateSeriesData(),
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height="350" />
        </div>


      );
    }
  }