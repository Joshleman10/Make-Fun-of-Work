import React from 'react';
import Graph from './graph';
import Wrapper from './wrapper';
import StatTracker from './statTracker';
import DateSelector from './dateSelector';
import "./css/body.css";

function Body(props) {
	return (
		<Wrapper>
			<div className="topRow">
				<StatTracker></StatTracker>
				<DateSelector></DateSelector>
			</div>
			<Graph></Graph>
		</Wrapper>
	)
}

export default Body;