import React from "react";
import "./css/statTracker.css";

//Variables for StatCard Component
let totalTasks = 0;
let totalSpan = ("Total Tasks Completed: " + totalTasks);

let lastHour = 0;
let lastHourSpan = ("Completed in Last Hour: " + lastHour);

let perHour = 0;
let perHourSpan = ("Average Completed per Hour: " + perHour);

let incentiveTotal = 0;
let incentiveTotalSpan = ("Current Incentive Earnings: [ $" + incentiveTotal + " ]")

function StatCard(props) {
    return (
        <div className="taskTotals">
            <h4 className="header"> Productivity Totals</h4><hr></hr>
            <span className="content">{totalSpan}</span><br></br><hr></hr>
            <span className="content">{lastHourSpan}</span><br></br><hr></hr>
            <span className="content">{perHourSpan}</span><br></br><hr></hr>
            <span className="content">{incentiveTotalSpan}</span>
        </div>
    )
}

  export default StatCard;