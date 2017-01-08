"use strict";
var useDemoFn = function(){
	console.log("DEBUG: Script loaded.")
	// d3.select("body")
	// .append("svg")
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// .append("circle")
	// .attr("cx", 25)
	// .attr("cy", 25)
	// .attr("r","25")
	// .style("fill", "red");
// };

console.log("DEBUG: Script loaded.")
var w = 200;
var h = 200;
var padding = 2;
var dataset = [5,10,15,20,25];

var svg = d3.select("body")
	.append("svg")
		.attr("width", w)
		.attr("height", h);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
		.attr("x", function(d, i){
			return (i*(w/dataset.length));
		})
		.attr("y", function(d){
			return (h - (d * 8));
		})
		.attr("width", (w / dataset.length - padding))
		.attr("height", function(d){
			return (d * 8);
		})
		.attr("fill", "blue")