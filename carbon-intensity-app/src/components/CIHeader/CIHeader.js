import React from 'react';

import './CIHeader.css';

import {/*faMapMarkerAlt,*/faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Functional Component as it will hold no state
function CIHeader(props){
	//Wrap props.location as custom component to enable dropdown selection of locations
	//<h4 id='subtitle'><span id='map-icon'><FontAwesomeIcon icon={faMapMarkerAlt}/></span> <span id='location-text'>{props.location}</span>'s Carbon Statistics.</h4>
	return (
		<header id='header-bar'>
			<h3 id='headline'>Carbon Intensity</h3>
			<h3><FontAwesomeIcon icon={faGlobeEurope} /></h3>
		</header>
	);
}

export {CIHeader};
