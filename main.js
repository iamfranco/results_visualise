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
  }
]

// chart
var width = 1000;
var height = 600;
var margin = {
  left: 50,
  right: 100,
  top: 10,
  bottom: 230,
  graph: 15,
  start: 30
}

var container = d3.select('.container')
    .style('width',width + 'px')
    .style('height',height + 'px')

var chart = d3.select('.chart')
    .attr('width',width)
    .attr('height',height)

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
    .range([0, width-margin.left-margin.right-margin.graph])

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
        .style('top', (dot_cy - height + 20) + 'px')
        .transition()
        .duration(200)
        .style('opacity',1)
      // shift left according to dot position
      if (dot_cx < 700) {
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
    .attr('class', 'axisLabel')
    .attr('x', margin.left + margin.graph)
    .attr('y', margin.top + 5)
    .text('Result (%)')
