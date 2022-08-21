import React, { FC } from 'react';
import { SplitScreen } from './SplitScreen';

interface GenericProps {
	bgColo?: any;
}

const LeftHandComponent = (props: GenericProps) => {
	return <h1 style={{ backgroundColor: 'blueviolet' }}>Left</h1>;
};

const RightHandComponent = () => {
	return (
		<React.Fragment>
			<h1 style={{ backgroundColor: 'greenyellow' }}>Right</h1>;
		</React.Fragment>
	);
};

const appProps = {
	leftWeight: 1,
	rightWeight: 3
};

function App() {
	return (
		<SplitScreen {...appProps}>
			<LeftHandComponent></LeftHandComponent>
			<RightHandComponent></RightHandComponent>
		</SplitScreen>
	);
}

export default App;
