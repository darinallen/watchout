// start slingin' some d3 here.

//Find a way to instantiate an asteroid (Enter / Select All / Update)

var settings = {
  w: window.innerWidth,
  h: window.innerHeight,
  r: 15,
  n: 30,
  duration: 1500
};

var mouse = { x: settings.w/2, y: settings.h/2 };
var score = 0, highScore = 0, collisionCount = 0;

var pixelize = function(number) {
  return number + 'px';
};

var rand = function(n) {
  return Math.floor(Math.random() * n);
};

var randX = function() {
  return pixelize(rand(settings.w-settings.r*2));
};

var randY = function() {
  return pixelize(rand(settings.h-settings.r*2));
};

var updateScore = function() {
  d3.select('.scoreboard .current span').text(score);
  d3.select('.scoreboard .highscore span').text(highScore);
  d3.select('.scoreboard .collisions span').text(collisionCount);
};

var board = d3.select('.board').style({
  width: pixelize(settings.w),
  height: pixelize(settings.h)
});

d3.select('.mouse').style({
  top: pixelize(mouse.y),
  left: pixelize(mouse.x),
  width: pixelize(settings.r*2),
  height: pixelize(settings.r*2),
  'border-radius': pixelize(settings.r*2)
});

var asteroids = board.selectAll('.asteroids')
  .data(d3.range(settings.n))
  .enter().append('div')
  .attr('class', 'asteroid')
  .style({
    top: randY,
    left: randX,
    width: pixelize(settings.r*2),
    height: pixelize(settings.r*2)
  });

board.on('mousemove', function() {
  var loc = d3.mouse(this);
  mouse = { x: loc[0], y: loc[1] };
  d3.select('.mouse').style({
    top: pixelize(mouse.y-settings.r),
    left: pixelize(mouse.x-settings.r)
  });
});

var move = function(element) {
  element.transition().duration(settings.duration).style({
    top: randY,
    left: randX
  }).each('end', function() {
    move(d3.select(this));
  });
};

move(asteroids);

var scoreTicker = function() {
  score = score+1;
  highScore = Math.max(score, highScore);
  updateScore();
};

setInterval(scoreTicker, 100);

var prevCollision = false;
var detectCollisions = function() {
  var collision = false;

  asteroids.each(function(){
    var cx = this.offsetLeft + settings.r;
    var cy = this.offsetTop + settings.r;

    var x = cx - mouse.x;
    var y = cy - mouse.y;
    if(Math.sqrt(x*x + y*y) < settings.r*2) {
      collision = true;
    }
  });

  if(collision) {
    score = 0;
    board.style('background-color', 'red');
    if(prevCollision !== collision) {
      collisionCount = collisionCount + 1;
    }
  } else {
    board.style('background-color', 'white');
  }
  prevCollision = collision;
};

d3.timer(detectCollisions);


// var score = 0;
// var highScore = 0;
// var collisionCount = 0;
//
// var randx = function() { return Math.random() * 960;};
// var randy = function() { return Math.random() * 500;};
//
// var updateScore = function() {
//   d3.select('.scoreboard .current span').text(score);
//   d3.select('.scoreboard .highscore span').text(highScore);
//   d3.select('.scoreboard .collisions span').text(collisionCount);
// };
//
// var board = d3.select('.board').style({
//   width: '960px',
//   height: '500px'
// });
//
// var drag = d3.behavior.drag()
//              .on('dragstart', function() { circle.style('fill', 'red'); })
//              .on('drag', function() {
//                circle.attr('cx', d3.event.x).attr('cy', d3.event.y);
//              })
//              .on('dragend', function() {
//                circle.style('fill', 'red');
//              });
//
// var circle = d3.select('.board').selectAll('.draggable')
//                 .data([{ x: 480, y: 250, r: 22 }])
//                 .enter()
//                 .append('circle')
//                 .attr('class', 'draggable')
//                 .attr('cx', function(d) { return d.x; })
//                 .attr('cy', function(d) { return d.y; })
//                 .attr('r', function(d) { return d.r; })
//                 .call(drag)
//                 .style('fill', 'red');

// var move = function(data) {
//   d3.select('svg').selectAll('.asteroid')
//   .data(data)
//   .transition()
//   .duration(1000)
//   .attr("xlink:href","asteroid.png")
//   .attr('x', randx)
//   .attr('y', randy)
//   .attr('width', 50)
//   .attr('height', 50)
//   .each('end', function(){
//     move( d3.select(this));
//   });
// };
//
// var move = function(element) {
//   element.transition().duration(1000).style({
//   top: randy,
//   left: randx
// }).each('end', function() {
//     move(d3.select(this));
//   })
// };
//
//
// var asteroids = board.selectAll('.asteroids')
//   .data(d3.range(20))
//   .enter().append('div')
//   .attr('class', 'asteroid')
//   .attr("xlink:href","asteroid.png")
//   .style({
//     top: randy,
//     left: randx,
//   });
//
// move(asteroids);
//





// var asteroids = document.getElementsByClassName('asteroid');

// var distance = function(p0, p1) {
//   var dx = p1.x - p0.x;
//   var dy = p1.y - p0.y;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// var distanceXY = function(x0, y0, x1, y1) {
//   var dx = x1 - x0;
//   var dy = y1 - y0;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// var circleCollision = function(c0, c1) {
//   return distance(c0, c1) <= c0.radius + c1.radius;
// };

// if(distance(circle, ) === 0) {
//  )
// }
// d3.select('body').selectAll('.collisions')


// var scoreTicker = function() {
//   score = score + 1;
//   highscore = Math.max(score, highScore);
//   updateScore();
// };
//
// setInterval(scoreTicker, 100);
//
// var prevCollision = false;
//
// var detectCollisions = function() {
//   var collision = false;
//
//   asteroids.each(function(){
//     var cx = this.offsetLeft + settings.r;
//     var cy = this.offsetTop + settings.r;
//
//     var x = cx - mouse.x;
//     var y = cy - mouse.y;
//     if(Math.sqrt(x*x + y*y) < settings.r*2) {
//       collision = true;
//     }
//   });
//
//   if(collision) {
//     score = 0;
//     board.style('background-color', 'red');
//     if(prevCollision !== collision) {
//       collisionCount = collisionCount + 1;
//     }
//   } else {
//     board.style('background-color', 'white');
//   }
//   prevCollision = collision;
// };

// var createAsteroidObjects = function(array){
//   return array.map(function(node) {
//     return {x: node.x.animVal.value, y: node.y.animVal.value };
//   });
// }
//
// var asteroidObjects = createAsteroidObjects(asteroids);

// var asteroidZero = { x: asteroids[0].x.animVal.value, y: asteroids[0].y.animVal.value };

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
