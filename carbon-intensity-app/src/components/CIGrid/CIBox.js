import React from 'react';

function CIBox(props){
	return(
		<section id={props.htmlID} className='grid-box'>
			<h1>template [{props.htmlID}]</h1>
		</section>
	);
}

export {CIBox};