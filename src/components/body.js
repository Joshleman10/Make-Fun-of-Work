import React from 'react';
import Graph from './graph';
import Wrapper from './wrapper';
import StatTracker from './statTracker';

function Body(props){
	return(
		<Wrapper>
			<StatTracker></StatTracker>
			<Graph></Graph>
		</Wrapper>
	)
}

export default Body;