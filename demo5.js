
console.log("DEBUG: Script loaded.")
function setChart(){
	h = 100;
	w = 400;
	var ds;
	var salesTotal = 0.0;
	var salesAvg = 0.0;
	var metrics = [];


	// VERSJA 4444444444444444444444
	function buildLine(xDif, myClass) {
		var lineFun = d3.line()
			.x(function(d) {
				return ((d.month - 20130001) / xDif);
			})
			.y(function(d) {
				return (h - d.sales);
			})
			.curve(d3.curveBasis);

		var svg = d3.select("body").append("xhtml:div").append("svg")
		.attr("width", w)
		.attr("height", h);

		var viz = svg.append("path")
			.attr("d", lineFun(ds))
			.attr("class", myClass);
	};

	function showTotals() {
		var t = d3.select("body").append("table")

		for(var i = 0; i < ds.length; i++ ) {
			salesTotal += Number(ds[i]['sales']);
		}

		salesAvg = salesTotal/ds.length;

		metrics.push("Sales Total: " + salesTotal);
		metrics.push("sales Avg: " + salesAvg.toFixed(2));

		var tr = t.selectAll("tr")
			.data(metrics)
			.enter()
			.append("tr")
			.append("td")
			.text(function(d){
				return d;
			});


	}

	d3.csv("MonthlySales.csv", function(error, data){

	  // data.forEach(function(d){ d['months'] = +d['months']; });   
	  // data.forEach(function(d){ d['sales'] = +d['sales']; });   

		if(error) {
			console.log(error);
		} else {
			console.log(data);
			ds = data;
		}

		buildLine(3.24, "chart-line");
		buildLine(6.25, "chart-line2");
		showTotals();
	});

};
	// d3.csv("MonthlySales.csv", function(error, data){
	// 	if(error) {
	// 		console.log(error);
	// 	} else {
	// 		console.log(data);
	// 		ds = data;
	// 	}


	// 	var lineFun = d3.svg.line()
	// 		.x(function(d) {return ((d.month - 20130001) / 3.25)})
	// 		.y(function(d) {return (h - d.sales);})
	// 		.interpolate("linear");

	// 	var svg = d3.select("#chartOne").append("svg").attr({
	// 		"width": w,
	// 		"height": h
	// 	})

	// 	var viz = svg.append("path")
	// 		.attr({
	// 			d: lineFun(ds),
	// 			"stroke": "purple",
	// 			"stroke-width": 2,
	// 			"fill": "none"
	// 		});
	// })


		  // var svg = d3.select("body")
    // .append("xhtml:div")
    // .append("svg")
    // .attr("width", 500)
    // .attr("height", 50)
    // .style("background-color", "yellow")
    // .style("border", "2px solid orange");


	// monthlySales = [
	// 	{"month":10 , "sales":100},
	// 	{"month":20 , "sales":130},
	// 	{"month":30 , "sales":250},
	// 	{"month":40 , "sales":300},
	// 	{"month":50 , "sales":265},
	// 	{"month":60 , "sales":225},
	// 	{"month":70 , "sales":180},
	// 	{"month":80 , "sales":120},
	// 	{"month":90 , "sales":145},
	// 	{"month":100 , "sales":130},
	// ];

	//append svg to dom element
	// var svg = 
	// d3.select("#chartOne").append("svg").attr({
	// 	width:w, height: h
	// });


	//KPI color
	// function salesKPI(d){
	// 	if(d>=250) { return "#33CC66"; }
	// 	if(d<250) { return "#666666"}
	// }

	// filterning labels values
	// function showMInMax(dataSet, col, val, type){
	// 	var max = d3.max(dataSet, function(d) { return d[col];})
	// 	var min = d3.min(dataSet, function(d) { return d[col];})
	// 	if(type == "minmax" && (min == val || max == val)){
	// 		return val;
	// 	}
	// 	if(type == "all"){
	// 		return val;
	// 	}
	// }

	// add dots
	// var dots = svg.selectAll("circle")
	// 	.data(monthlySales)
	// 	.enter()
	// 	.append("circle")
	//     .attr('cx', function(d) {return d.month * 3; })
	//     .attr('cy', function(d) {return h-d.sales; })
	//     .attr('r', 5)
	//     .style('fill', function(d) {return salesKPI(d.sales); });

	//add labels
	// var labels = svg.selectAll("text")
	// 	.data(monthlySales)
	// 	.enter()
	// 	.append("text")
	// 	.text(function(d){
	// 		return showMInMax(monthlySales, 'sales', d.sales, 'minmax');
	// 	})
	// 	.attr({
	// 		x: function(d){ return (d.month * 3) - 25; },
	// 		y: function(d){ return (h - d.sales);},
	// 		"font-size": "12px",
	// 		"font-family": "sans-serif",
	// 		"fill": "#666666",
	// 		"text-anchor": "start",
	// 	});
