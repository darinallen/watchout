// start slingin' some d3 here.

//Find a way to instantiate an asteroid (Enter / Select All / Update)
var testData = new Array(15);

d3.select('svg')
  .append('circle')
    .attr('cx', 480)
    .attr('cy', 250)
    .attr('r', 15)
    .style('fill', 'red')
    .on('mousemove');


var update = function (data) {
  var randx = function() { return Math.random() * 960;};
  var randy = function() { return Math.random() * 500;};

  d3.select('svg').selectAll('circle')
    .data(data)
    .enter().append('circle')
      .attr('cx', randx)
      .attr('cy', randy)
      .attr('r', 15);

  d3.select('svg').selectAll('circle')
    .data(data)
    .transition()
    .duration(1000)
    .attr('cx', randx)
      .attr('cy', randy)
      .attr('r', 15);
};

setInterval(update.bind(null, testData), 1000);

// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//
// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height"),
//     g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");
//
// function update(data) {
//   var t = d3.transition()
//       .duration(750);
//
//   // JOIN new data with old elements.
//   var text = g.selectAll("text")
//     .data(data, function(d) { return d; });
//
//   // EXIT old elements not present in new data.
//   text.exit()
//       .attr("class", "exit")
//     .transition(t)
//       .attr("y", 60)
//       .style("fill-opacity", 1e-6)
//       .remove();
//
//   // UPDATE old elements present in new data.
//   text.attr("class", "update")
//       .attr("y", 0)
//       .style("fill-opacity", 1)
//     .transition(t)
//       .attr("x", function(d, i) { return i * 32; });
//
//   // ENTER new elements present in new data.
//   text.enter().append("text")
//       .attr("class", "enter")
//       .attr("dy", ".35em")
//       .attr("y", -60)
//       .attr("x", function(d, i) { return i * 32; })
//       .style("fill-opacity", 1e-6)
//       .text(function(d) { return d; })
//     .transition(t)
//       .attr("y", 0)
//       .style("fill-opacity", 1);
// }

// The initial display.
// update(alphabet);

// Grab a random sample of letters from the alphabet, in alphabetical order.
// d3.interval(function() {
//   update(d3.shuffle(alphabet)
//       .slice(0, Math.floor(Math.random() * 26))
//       .sort());
// }, 1500);





// var update = function(items) {
// 	var t = d3.transition().duration(750);
//
// 	var selection = d3.select('svg')
// 		.selectAll('.asteroid')
// 		.data(items, function(d) {return d.name;})
// 		.transition(t)
// 			.attr({top: Math.random() * 960, left: Math.random() * 500});
// 		//Revisit
//
// 	selection
// 		.enter()
// 		.append('span') //or div
//     	.attr('class', 'asteroid')
// 		.transition(t)
// 			.attr({top: Math.random() * 960, left: Math.random() * 500});
//
//
// 	selection
// 		.exit()
// 		.transition(t)
// 			.attr({top: Math.random() * 960 + 1000, left: Math.random() * 500 + 550})
// 		.remove() //
//
// }
//
// var dataPoints = [{name: 'ast1'}, {name: 'ast2'}, {name: 'ast3'}];
//
// update(dataPoints);






//Select all and modify position using (Update)
//Implement the transition feature of D3
//Make the asteroids transition

//Other Items:

//Mouse positioning and collission detection
//Update the scoring
//update CSS
