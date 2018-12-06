// TODO: add linear least square line of best fit

// data
var course_item = [
  {
    "name": "Mathematical Workshop",
    "code": "MATH10001",
    "result": 88,
    "credits": 10,
    "year": 1,
    "sem": 1,
    "lecturer": "Carolyn Dean"
  },
  {
    "name": "Sets, Numbers and Functions A",
    "code": "MATH10101",
    "result": 77,
    "credits": 20,
    "year": 1,
    "sem": 1,
    "lecturer": "Nige Ray"
  },
  {
    "name": "Calculus and Vectors A",
    "code": "MATH10121",
    "result": 83,
    "credits": 20,
    "year": 1,
    "sem": 1,
    "lecturer": "Oliver Jensen"
  },
  {
    "name": "Probability 1",
    "code": "MATH10141",
    "result": 76,
    "credits": 10,
    "year": 1,
    "sem": 1,
    "lecturer": "Jonathan Bagley"
  },
  {
    "name": "Linear Algebra A",
    "code": "MATH10202",
    "result": 86,
    "credits": 20,
    "year": 1,
    "sem": 2,
    "lecturer": ["Peter Rowley", "Louise Walker"]
  },
  {
    "name": "Calculus and Applications A",
    "code": "MATH10222",
    "result": 73,
    "credits": 20,
    "year": 1,
    "sem": 2,
    "lecturer": ["Matthias Heil", "Simon Cotter"]
  },
  {
    "name": "Sequences and Series",
    "code": "MATH10242",
    "result": 84,
    "credits": 10,
    "year": 1,
    "sem": 2,
    "lecturer": "Toby Stafford"
  },
  {
    "name": "Introduction to Statistics",
    "code": "MATH10282",
    "result": 81,
    "credits": 10,
    "year": 1,
    "sem": 2,
    "lecturer": "Peter Foster"
  },
  {
    "name": "Real and Complex Analysis",
    "code": "MATH20101",
    "result": 68,
    "credits": 20,
    "year": 2,
    "sem": 1,
    "lecturer": ["Mark Coleman", "Charles Walkden"]
  },
  {
    "name": "Algebraic Structures 1",
    "code": "MATH20201",
    "result": 82,
    "credits": 10,
    "year": 2,
    "sem": 1,
    "lecturer": "Ralph Stohr"
  },
  {
    "name": "Partial Differential Equations and Vector Calculus A",
    "code": "MATH20401",
    "result": 73,
    "credits": 20,
    "year": 2,
    "sem": 1,
    "lecturer": ["Simon Cotter", "Raphael Assier"]
  },
  {
    "name": "Probability 2",
    "code": "MATH20701",
    "result": 75,
    "credits": 10,
    "year": 2,
    "sem": 1,
    "lecturer": "Denis Denisov"
  },
  {
    "name": "An Introduction to Current Topics in Biology",
    "code": "BIOL20882",
    "result": 61,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Ruth Grady"
  },
  {
    "name": "Metric Spaces",
    "code": "MATH20122",
    "result": 83,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Nige Ray"
  },
  {
    "name": "Fluid Mechanics",
    "code": "MATH20502",
    "result": 66,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Mike Simon"
  },
  {
    "name": "Numerical Analysis 1",
    "code": "MATH20602",
    "result": 85,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Martin Lotz"
  },
  {
    "name": "Random Models",
    "code": "MATH20712",
    "result": 67,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Xiong Jin"
  },
  {
    "name": "Discrete Mathematics",
    "code": "MATH20902",
    "result": 78,
    "credits": 10,
    "year": 2,
    "sem": 2,
    "lecturer": "Mark Muldoon"
  },
  {
    "name": "Fourier Analysis and Lebesgue Integration",
    "code": "MATH31011",
    "result": 74,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Peter Symonds"
  },
  {
    "name": "Introduction to Topology",
    "code": "MATH31051",
    "result": 68,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Peter Eccles"
  },
  {
    "name": "Viscous Fluid Flow",
    "code": "MATH35001",
    "result": 78,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Matthias Heil"
  },
  {
    "name": "Matrix Analysis",
    "code": "MATH36001",
    "result": 68,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Stefan Güttel"
  },
  {
    "name": "Essential Partial Differential Equations",
    "code": "MATH36041",
    "result": 69,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Sean Holman"
  },
  {
    "name": "Convex Optimization",
    "code": "MATH36061",
    "result": 90,
    "credits": 10,
    "year": 3,
    "sem": 1,
    "lecturer": "Martin Lotz"
  },
  {
    "name": "Propositional Logic",
    "code": "MATH20302",
    "result": 81,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Gareth Jones (Pure)"
  },
  {
    "name": "Analytic Number Theory",
    "code": "MATH31022",
    "result": 82,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Mark Coleman"
  },
  {
    "name": "Wave Motion",
    "code": "MATH35012",
    "result": 63,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Rich Hewitt"
  },
  {
    "name": "Numerical Analysis II",
    "code": "MATH36022",
    "result": 76,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Catherine Powell"
  },
  {
    "name": "Mathematical Programming",
    "code": "MATH39012",
    "result": 88,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Michael Tso"
  },
  {
    "name": "Mathematical Modelling in Finance",
    "code": "MATH39032",
    "result": 76,
    "credits": 10,
    "year": 3,
    "sem": 2,
    "lecturer": "Peter Duck"
  },
  {
    "name": "Applied Dynamical Systems",
    "code": "MATH64041",
    "result": 91,
    "credits": 15,
    "year": 4,
    "sem": 1,
    "lecturer": "Yanghong Huang"
  },
  {
    "name": "Scientific Computing",
    "code": "MATH69111",
    "result": 82,
    "credits": 15,
    "year": 4,
    "sem": 1,
    "lecturer": "Chris Johnson"
  },
  {
    "name": "PDEs: Theory and Practice",
    "code": "MATH64062",
    "result": 85,
    "credits": 15,
    "year": 4,
    "sem": 2,
    "lecturer": "Alice Thompson"
  },
  {
    "name": "Numerical Linear Algebra",
    "code": "MATH66101",
    "result": 90,
    "credits": 15,
    "year": 5,
    "sem": 1,
    "lecturer": "Nick Higham"
  },
  {
    "name": "Mathematical Methods",
    "code": "MATH64051",
    "result": 86,
    "credits": 15,
    "year": 5,
    "sem": 1,
    "lecturer": "Jitesh Gajjar"
  },
  {
    "name": "Numerical Optimization",
    "code": "MATH66132",
    "result": 99,
    "credits": 15,
    "year": 5,
    "sem": 2,
    "lecturer": "Oliver Dorn"
  },
  {
    "name": "Transport Phenomena",
    "code": "MATH65122",
    "result": 87,
    "credits": 15,
    "year": 5,
    "sem": 2,
    "lecturer": "Julien Landel"
  },
  {
    "name": "Transferable Skills",
    "code": "MATH65740",
    "result": 82,
    "credits": 15,
    "year": 5,
    "sem": 2,
    "lecturer": "Gareth Jones"
  },
  {
    "name": "MSc Dissertation",
    "code": "MATH65740",
    "result": 85,
    "credits": 60,
    "year": 5,
    "sem": 2,
    "lecturer": "Stefan Güttel"
  }
]

// chart
var maxWidth = Math.min(innerWidth,1300);
var maxHeight = Math.min(innerHeight,800);

var margin = {top: 45, right: 120, bottom: 90, left: 80, graph: 15, start: 30},
  width = maxWidth - margin.left - margin.right,
  height = maxHeight - margin.top - margin.bottom;

var container = d3.select('.container')
    .style('width', maxWidth + 'px')
    .style('height', maxHeight + 'px')

var chart = d3.select('.chart')
    .attr('width', maxWidth)
    .attr('height', maxHeight)

var tooltip = d3.select('.tooltip');
var tooltip__result = d3.select('.tooltip__result');
var tooltip__detail = d3.select('.tooltip__detail');

var positions = [];
var lecturers = [];

function xIndex(d) {return 2*(d.year - 1) + d.sem -1;}
var xTicksLength = 10;

function xTicks(n) {
  var label = [
    'U1.1', 'U1.2',
    'U2.1', 'U2.2',
    'U3.1', 'U3.2',
    'P1.1', 'P1.2',
    'P2.1', 'P2.2',
  ];
  return label[n];
}

var x = d3.scaleLinear()
    .domain([0, xTicksLength-1])
    .range([0, width-margin.graph])

var invx = d3.scaleLinear()
    .range([0, xTicksLength-1])
    .domain([0, width-margin.graph])

var y = d3.scaleLinear()
    .domain([60, 100])
    .range([height-margin.top-margin.bottom-margin.graph, 0])

function radius(d) {return Math.sqrt(d.credits)*3;}

// draw data points
var dataPoint = chart.selectAll('.dataPoint')
    .data(course_item)
  .enter().append('circle')
    .attr('class','dataPoint')
    .attr('cy', function(d){
      positions.push({
        y: y(d.result) + margin.top
      });
      return positions[positions.length-1].y;
    })
    .attr('cx', function(d,i){
      var newX = x(xIndex(d)) + margin.left + margin.graph + margin.start;
      for (var j=0; j<positions.length; j++) {
        if (positions[j].x == newX && positions[i].y==positions[j].y) {
          newX += radius(course_item[i]); // shift right for overlapping circles
        }
      }
      positions[i].x = newX;
      return positions[i].x;
    })
    .attr('r', function(d){return radius(d)})
    .attr('fill','red')
    .attr('fill-opacity', 0.5)
    .on('mouseover', function(d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('fill-opacity',0.7)
        .attr('r', function(d){return radius(d)*1.2})

      tooltip__result.html(
        d.result
      )

      tooltip__detail.html(
        d.name + '<br>' +
        d.lecturer
      )
      var dot_cx = parseInt(d3.select(this).attr('cx'));
      var dot_cy = parseInt(d3.select(this).attr('cy'));

      tooltip
        .style('z-index', 0)
        .style('top', (dot_cy - maxHeight + 20) + 'px')
        .transition()
        .duration(200)
        .style('opacity',1)
      // shift left according to dot position
      if (dot_cx < maxWidth-300) {
        tooltip
          .style('left', (dot_cx - 25) + 'px')
          .style('transform','translateX(0%)')
      } else {
        tooltip
          .style('left', (dot_cx + 25) + 'px')
          .style('transform','translateX(-100%)')
      }
    })
    .on('mouseout', function(d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('fill-opacity',0.5)
        .attr('r', function(d){return radius(d)})

      tooltip.transition()
        .duration(200)
        .style('opacity',0)
        .style('z-index', -1)
    })

// draw Axes
var xAxis = d3.axisBottom(x)
    .ticks(xTicksLength-1)
    .tickFormat(xTicks)
    .tickPadding(margin.graph)

var xTicksLabel = chart.append('g')
    .attr('class','x axis')
    .attr('transform', 'translate(' +
      (margin.left + margin.graph + margin.start) + ',' +
      (height - margin.bottom) + ')'
      )
    .call(xAxis)
    .selectAll('text')

var yAxis = d3.axisLeft(y)
    .ticks(6)
    .tickPadding(margin.graph)

chart.append('g')
    .attr('class','y axis')
    .attr('transform', 'translate(' +
      margin.left + ',' +
      margin.top + ')'
      )
    .call(yAxis);

// axes label
chart.append('text')
    .attr('class', 'axislabel')
    .attr('x', margin.left + margin.graph)
    .attr('y', margin.top + 5)
    .text('Result (%)')

// Add brackets
var averageLineOn = false;
var bracket_pos = [[0],[xTicksLength-1]];
var bracket; draw_brackets();
function draw_brackets() {
  bracket = chart.selectAll('.bracket')
    .remove()
    .exit()
      .data(bracket_pos)
    .enter().append('circle')
      .attr('class','bracket')
      .attr('cx', (d)=>x(d[0]) + margin.left + margin.graph + margin.start)
      .attr('cy', height-30)
      .attr('r',5)
      .attr('fill','black')
      .attr('fill-opacity',averageLineOn? 0.8:0)
      .call(d3.drag()
          .on("drag", function(d) {
            var mouse_x = graphPosition(d3.event.x,true);
            var dot_x = Math.min(Math.max(mouse_x,0),xTicksLength-1); // limit dot between [0, xTicksLength-1]
            d3.select(this).attr("cx", x( d[0] = dot_x) + margin.left + margin.graph + margin.start);
            updateAverage();
            update_handler_pos();
            draw_handler();
          }));
}

// Add center handler for both brackets
var bracket_handler_pos = [[]]; update_handler_pos();
var bracket_handler; draw_handler();
function update_handler_pos() { bracket_handler_pos[0][0] = (bracket_pos[0][0] + bracket_pos[1][0]) / 2}
function update_lrbrackets(new_average) {

  old_average = (bracket_pos[0][0] + bracket_pos[1][0]) / 2;
  change = new_average - old_average;
  if (bracket_pos[0][0] + change < 0 || bracket_pos[0][0] + change > xTicksLength-1 ||
      bracket_pos[1][0] + change < 0 || bracket_pos[1][0] + change > xTicksLength-1) {
    return false;
  } else {
    bracket_pos[0][0] += change;
    bracket_pos[1][0] += change;
    return true;
  }
}
function draw_handler() {
  bracket_handler = chart.selectAll('.bracket_handler')
    .remove()
    .exit()
      .data(bracket_handler_pos)
    .enter().append('circle')
      .attr('class','bracket_handler')
      .attr('cx', (d)=>x(d[0]) + margin.left + margin.graph + margin.start)
      .attr('cy', height-10)
      .attr('r',8)
      .attr('fill','black')
      .attr('fill-opacity',averageLineOn? 0.8:0.1)
      .attr('cursor','pointer')
      .on('click', function() { // on off switch for average line
        if (averageLineOn) {
          // turn off
          averageLineOn = false;
          bracket_handler.transition().duration(200).attr('fill-opacity',0.1);
          bracket.transition().duration(200).attr('fill-opacity',0);
          averageLine.transition().duration(200).attr('opacity',0);
          averageLineLabel.transition().duration(200).attr('opacity',0);
        } else {
          // turn on
          averageLineOn = true;
          bracket_handler.transition().duration(200).attr('fill-opacity',0.8);
          bracket.transition().duration(200).attr('fill-opacity',0.8);
          averageLine.transition().duration(200).attr('opacity',0.8);
          averageLineLabel.transition().duration(200).attr('opacity',0.8);
        }
      })
      .call(d3.drag()
          .on("drag", function(d) {
            var old_pos = bracket_handler_pos;
            var lbracket = Math.min(bracket_pos[0][0], bracket_pos[1][0]);
            var rbracket = Math.max(bracket_pos[0][0], bracket_pos[1][0]);
            var mouse_x = graphPosition(d3.event.x,!((lbracket-rbracket)%2));
            var dot_x = Math.min(Math.max(mouse_x,0),xTicksLength-1); // limit dot between [0, xTicksLength-1]
            allow_move = update_lrbrackets(dot_x);
            if (allow_move) {
              d3.select(this).attr("cx", x( d[0] = dot_x) + margin.left + margin.graph + margin.start);
            }
            draw_brackets();
            updateAverage();
          }));
}

// // add average line
updateAverage();
var averageLine;
var averageLineLabel;

function updateAverage() {
  result_sum = 0;
  credit_sum = 0;
  start_idx = bracket_pos[0][0];
  end_idx = bracket_pos[1][0];
  if (start_idx > end_idx) {
    temp = start_idx;
    start_idx = end_idx;
    end_idx = temp;
  }
  for (var i=0; i<course_item.length; i++) {
    if (xIndex(course_item[i]) < start_idx) continue;
    if (xIndex(course_item[i]) > end_idx) break;
    result_sum += course_item[i].result * course_item[i].credits;
    credit_sum += course_item[i].credits;
  }
  credit_sum = credit_sum ? credit_sum : 1; // prevent dividing by zero when calculating average
  average = result_sum / credit_sum;
  averageLine = chart.selectAll('.averageLine')
    .remove()
		.exit()
      .data([average])
    .enter().append('line')
      .attr('class','averageLine')
      .attr('x1', x(start_idx-0.2) + margin.left + margin.graph + margin.start)
      .attr('x2', x(end_idx+0.2) + margin.left + margin.graph + margin.start)
      .attr('y1', (d)=>y(d)+margin.top)
      .attr('y2', (d)=>y(d)+margin.top)
      .attr("stroke-width", 1)
      .attr("stroke", "black")
      .attr("opacity", averageLineOn? 0.8:0);

  // average line label
  averageLineLabel = chart.selectAll('.averageLineLabel')
    .remove()
    .exit()
      .data([average])
    .enter().append('text')
      .attr('class', 'averageLineLabel')
      .attr('text-anchor','middle')
      .attr('opacity', averageLineOn? 0.8:0)
      .attr('x', x(end_idx) + margin.left + margin.graph + margin.start)
      .attr('y', (d)=>y(d) + margin.top-5)
      .text(Math.round(average*10)/10)
}

// window x to graph x
function graphPosition(x, round) {
  new_x = invx(x - (innerWidth-maxWidth)/2 - margin.left - margin.start - margin.graph);
  if (round) {
    return Math.round(new_x);
  } else {
    return Math.round(new_x*2)/2;
  }
}