
console.log("DEBUG: Script loaded.")
function setChart(){
	var w = 400;
	var h = 320;
	var padding = 2;
	var dataset = [ 5, 10, 15, 20, 21, 25, 11, 25, 22, 18, 7];

	var svg = d3.select("#chartOne")
		.append("svg")
			.attr("width", w)
			.attr("height", h);

	function colorPicker(v){
		if(v<=20){ return "#666666";}
		return "#FF0033";
	}

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
			.attr("fill", function(d){
				return colorPicker(d);
			});

	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function (d) {return d;})
		.attr({
			"text-anchor": "middle",
			x: function(d, i) { return (i * ( w / dataset.length)) + 17;},
			y: function(d) { return  (h - (d*8)) + 15; },
			"font-family": "sans-serif",
			"font-size": 12,
			"fill": "#ffffff"
		});
}

