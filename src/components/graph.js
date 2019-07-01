import React from 'react';
import './css/graph.css';
import PlayerStatus from './playerStatus';
import Player from './player';
import Chart from '.chart.js';


const myChart = new Chart(ctx, {...PlayerStatus});

function Graph() {
  return(
    <div>
      {myChart}
    </div>
  )
}

export default Graph;