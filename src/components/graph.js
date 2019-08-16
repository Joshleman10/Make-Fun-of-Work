import React, { Component } from 'react';
// import PlayerStatus from './playerStatus';
// import Player from './player';
import StatCard from './statTracker';


const LineChart = require("react-chartjs").Line;

let chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};


let chartOptions = {

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: false,

  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth: 1,

  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,

  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,

  //Boolean - Whether the line is curved between points
  bezierCurve: true,

  //Number - Tension of the bezier curve between points
  bezierCurveTension: 0.4,

  //Boolean - Whether to show a dot for each point
  pointDot: true,

  //Number - Radius of each point dot in pixels
  pointDotRadius: 4,

  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth: 1,

  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius: 20,

  //Boolean - Whether to show a stroke for datasets
  datasetStroke: true,

  //Number - Pixel width of dataset stroke
  datasetStrokeWidth: 2,

  //Boolean - Whether to fill the dataset with a colour
  datasetFill: false,
  // {% raw %}
  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
  // {% endraw %}

  //Boolean - Whether to horizontally center the label and point dot inside the grid
  // offsetGridLines : false
};

let timerCounter = 0;
let scansLastHour = 0;
let scansPerHour = 0;
let incentiveTotal = 0;

// let timer = setInterval(() => {
//   timerCounter++;
// }, 1000)

//=====================================================


class Graph extends Component {

  componentDidMount(){
    document.addEventListener("keydown", onkeydown);
  }

render() {
  return (
    <div className="totalGraph">
      <LineChart data={chartData} options={chartOptions} width="1200" height="600" />
    </div>
  )
}
}


export default Graph;