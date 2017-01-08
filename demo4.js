
console.log("DEBUG: Script loaded.")
function setChart(){
	h = 350;
	w = 400;
	monthlySales = [
		{"month":10 , "sales":100},
		{"month":20 , "sales":130},
		{"month":30 , "sales":250},
		{"month":40 , "sales":300},
		{"month":50 , "sales":265},
		{"month":60 , "sales":225},
		{"month":70 , "sales":180},
		{"month":80 , "sales":120},
		{"month":90 , "sales":145},
		{"month":100 , "sales":130},
	];

	//append svg to dom element
	var svg = 
	d3.select("#chartOne").append("svg").attr({
		width:w, height: h
	});


	//KPI color
	function salesKPI(d){
		if(d>=250) { return "#33CC66"; }
		if(d<250) { return "#666666"}
	}

	// filterning labels values
	function showMInMax(dataSet, col, val, type){
		var max = d3.max(dataSet, function(d) { return d[col];})
		var min = d3.min(dataSet, function(d) { return d[col];})
		if(type == "minmax" && (min == val || max == val)){
			return val;
		}
		if(type == "all"){
			return val;
		}
	}

	// add dots
	var dots = svg.selectAll("circle")
		.data(monthlySales)
		.enter()
		.append("circle")
	    .attr('cx', function(d) {return d.month * 3; })
	    .attr('cy', function(d) {return h-d.sales; })
	    .attr('r', 5)
	    .style('fill', function(d) {return salesKPI(d.sales); });

	//add labels
	var labels = svg.selectAll("text")
		.data(monthlySales)
		.enter()
		.append("text")
		.text(function(d){
			return showMInMax(monthlySales, 'sales', d.sales, 'minmax');
		})
		.attr({
			x: function(d){ return (d.month * 3) - 25; },
			y: function(d){ return (h - d.sales);},
			"font-size": "12px",
			"font-family": "sans-serif",
			"fill": "#666666",
			"text-anchor": "start",
		});

}
