import React from 'react';

import {CIBox} from './CIBox.js';

import './CIGrid.css';
import {GRID_REGIONS} from '../../constants.js';

function CIGrid(props){
	console.log(props);
	const boxes = GRID_REGIONS.map((x,i) => <CIBox key={i} boxType={x} />);
	return(
		<main id='container'>
			{boxes}
		</main>
	);
}

export {CIGrid};
