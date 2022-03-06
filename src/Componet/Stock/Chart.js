import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
// import priceData from './assets/btcdata.json'
import moment from 'moment'
import axios from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {priceData:[
            
            
            443.95
            ,
            
                443.4
            ,
            
            442.4
            ,
            
            442.75
            ,
            
            442.15
            ,
            
            
            441.7
            ,
            
            438.85
            ,
            
            439.6
            ,
            
            438.45
            ,
            
            438.45
            ,
            
            438.8
            ,
            
            437.6
            ,
            
            437.6
            
        ]};

        // this.setGraphdata=this.setGraphdata.bind(this)
      }

    // setGraphdata=async()=>{
    //    const data=await axios.get(`https://www.nseindia.com/api/chart-databyindex?index=TEGAEQN`)
    //    console.log("datain graph",data);
    // //    this.setState({priceData:data})
    // }

    // componentDidMount(){
    //     this.setGraphdata()
    // }
  render() {
    const options = {style: 'currency', currency: 'INR'};
    const numberFormat = new Intl.NumberFormat('en-IN', options);
    const configPrice = {
      
      yAxis: [{
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value) 
          }
          ,
          x: -15,
          style: {
            "color": "#000", "position": "absolute"

          },
          align: 'left'
        },
      },
        
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
        }
      },
      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,

        }
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: `Bitcoin stock price`
      },
      chart: {
        height: 600,
      },
  
      credits: {
        enabled: false
      },
  
      legend: {
        enabled: true
      },
      xAxis: {
        type: 'date',
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Price',
        type: 'spline',
  
        data: this.state.priceData,
        tooltip: {
          valueDecimals: 2
        },
  
      }
      ]
    };
    return (
      <div>
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}