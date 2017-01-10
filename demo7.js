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

		var xScale = d3.scaleLinear()
			.domain([
				d3.min(ds, function(d){ return d.month;}),
				d3.max(ds, function(d){ return d.month;})
			])
			.range([0, w]);

		var yScale = d3.scaleLinear()
			.domain([
				0, d3.max(ds, function(d){ return d.sales;})
			])
			.range([h, 0]);

		//var xAxis = d3.svg.axis() ??

		var lineFun = d3.line()
			.x(function(d) {
				console.log(d.month);
				return xScale(d.month);
			})
			.y(function(d) {
				console.log(d.sales);
				return yScale(d.sales);
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