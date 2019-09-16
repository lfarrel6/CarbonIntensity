import React from 'react';

import {CIBox} from './CIBox.js';

import './CIGrid.css';

function CIGrid(props){
	const boxes = GRID_REGIONS.map((x,i) => <CIBox key={i} htmlID={x} />);
	return(
		<main id='container'>
			{boxes}
		</main>
	);
}

const GRID_REGIONS = ['reading','timeline','pie-chart','map'];

export {CIGrid};