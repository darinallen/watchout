// start slingin' some d3 here.

//Find a way to instantiate an asteroid (Enter / Select All / Update)
var testData = new Array(15);

var drag = d3.behavior.drag()
             .on('dragstart', function() { circle.style('fill', 'red'); })
             .on('drag', function() {
               circle.attr('cx', d3.event.x).attr('cy', d3.event.y);
             })
             .on('dragend', function() {
               circle.style('fill', 'red');
             });

var circle = d3.select('svg').selectAll('.draggable')
                .data([{ x: 480, y: 250, r: 15 }])
                .enter()
                .append('svg:circle')
                .attr('class', 'draggable')
                .attr('cx', function(d) { return d.x; })
                .attr('cy', function(d) { return d.y; })
                .attr('r', function(d) { return d.r; })
                .call(drag)
                .style('fill', 'red');

var update = function (data) {
  var randx = function() { return Math.random() * 960;};
  var randy = function() { return Math.random() * 500;};

  d3.select('svg').selectAll('.asteroid')
    .data(data)
    .enter().append('svg:image')
    .attr("xlink:href","asteroid.png")
    .attr('x', randx)
    .attr('y', randy)
    .attr('width', 50)
    .attr('height', 50)
    .attr('class', 'asteroid');

  d3.select('svg').selectAll('.asteroid')
    .data(data)
    .transition()
    .duration(1000)
    .attr("xlink:href","asteroid.png")
    .attr('x', randx)
    .attr('y', randy)
    .attr('width', 50)
    .attr('height', 50);
};

setInterval(update.bind(null, testData), 1000);

var distance = function(p0, p1) {
  var dx = p1.x - p0.x;
  var dy = p1.y - p0.y;
  return Math.sqrt(dx * dx + dy * dy);
};

var distanceXY = function(x0, y0, x1, y1) {
  var dx = x1 - x0;
  var dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
};

var circleCollision = function(c0, c1) {
  return distance(c0, c1) <= c0.radius + c1.radius;
};





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
