import React from 'react';
import {READING_KEY, TIMELINE_KEY, PIE_CHART_KEY, MAP_KEY}  from '../../constants.js';
import CanvasJSReact from '../../lib/canvasjs.react.js';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CIBox(props){
	if(props.boxType === READING_KEY){
		return CIReadingBox(250,249);
	}
	else if(props.boxType === TIMELINE_KEY){
		return CITimelineBox();
	}
	else if(props.boxType === PIE_CHART_KEY){
		return CIPieChartBox();
	}
	else if(props.boxType === MAP_KEY){
		return CIMapBox();
	}
	else{
		//should never hit - return empty div
		return (<div></div>);
	}
}

function getTimestamp(){
	//should timestamp be given with props?
	return new Date().toUTCString();
}

function CIReadingBox(trueVal,forecastVal){
	const getRating = (val) => {

		const makeJSON = (text,classStr) => {return {rating: text, classStr: classStr}};

		if(val < 100){ return makeJSON('Very Positive.','reading-very-positive'); }
		else if(val < 200){ return makeJSON('Positive.','reading-positive');}
		else if(val < 300){ return makeJSON('Moderate.','reading-moderate');}
		else if(val < 400){ return makeJSON('Negative.','reading-negative');}
		else if(val <= 500){ return makeJSON('Very Negative.','reading-very-negative');}
		else{ return undefined; }

	}

	let {rating, classStr} = getRating(trueVal);
	let totalClassStr = `grid-box ${classStr}`;

	return (
		<section id={READING_KEY} className={totalClassStr}>
			<div>
				<h3>Current Carbon Intensity</h3>
				<h3 className='box-reading-rating'>Moderate.</h3>
				<section className='box-reading-figures'>
					<h4 id='actual-title'>Actual</h4>
					<h4 id='actual-num'>{trueVal}</h4>
					<h4 id='forecast-title'>Forecast</h4>
					<h4 id='forecast-num'>{forecastVal}</h4>
				</section>
			</div>
			<div className='retrieved-timestamp'>
				<p>Data retrieved at {getTimestamp()}</p>
			</div>
		</section>
	);
}

function getTimelineData(){
	const colorSet = ["#00B327","#BAC30A","#FEC31A","#FF571C","#FF2942"];
	let data = [];
	let x = 0, y = 1;
	var colorInd = -1;
	for(; x <= 100; x++){
		y = x + Math.round((Math.random()*500));
		colorInd = Math.min(Math.floor(y/100),colorSet.length-1);
		data.push({
			x:x,y:y,markerColor:colorSet[colorInd]
		});
	}
	return data;
}

function CITimelineBox(){
	let data = getTimelineData();
	console.log(data);
	const options = {
		backgroundColor: "rgba(255,255,255,0)", // "light1", "dark1", "dark2"
		height: 200,
		animationEnabled: true,
		zoomEnabled: true,
		axisY: {
			includeZero: false
		},
		data: [{
			type: "area",
			dataPoints: data
		}]
	};
	return (
		<section id={TIMELINE_KEY} className='grid-box'>
			<div>
				<h3>Carbon Intensity Forecast (-24hrs to +48hrs)</h3>
				<div className='chart-container'>
					<CanvasJSChart chartContainerClass='line-chart-container' options={options} />
				</div>
			</div>
			<div className='retrieved-timestamp'>
				<p>Data retrieved at {getTimestamp()}</p>
			</div>
		</section>
	);
}

function CIPieChartBox(){
	const options = {
		backgroundColor: "rgba(255,255,255,0)",
		height: 400,
		animationEnabled: true,
		data: [{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: [{y: 10, indexLabel: "gas"},{y:30,indexLabel: "coal"},{y:17,indexLabel:"nuclear"}]
		}]
	};
	return (
		<section id={PIE_CHART_KEY} className='grid-box'>
			<div>
				<h3>Current GB Generation Mix</h3>
				<div className="chart-container">
					<CanvasJSChart chartContainerClass='pie-chart-container' options={options}/>
				</div>
			</div>
			<div className='retrieved-timestamp'>
				<p>Data retrieved at {getTimestamp()}</p>
			</div>
		</section>
	);
}

function CIMapBox(){
	//holds a map of the uk
	return (
		<section id={MAP_KEY} className='grid-box'>
		</section>
	);
}

export {CIBox};
