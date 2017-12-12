var width = 800;
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

// fetch data
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/iamfranco/D3-examples/master/data/grades.js')
ourRequest.onload = function() {
  var undergrad = JSON.parse(ourRequest.responseText).undergrad;

  function xIndex(d) {return 2*(d.year - 1) + d.sem -1;}
  var xTicksLength = 6;

  function xTicks(n) {
    var label = [
      'Year 1 Sem 1', 'Year 1 Sem 2',
      'Year 2 Sem 1', 'Year 2 Sem 2',
      'Year 3 Sem 1', 'Year 3 Sem 2'
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
      .data(undergrad)
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
            newX += radius(undergrad[i]); // shift right for overlapping circles
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

        tooltip
          .style('z-index', 0)
          .style('left', (parseInt(d3.select(this).attr('cx')) - 25) + 'px')
          .style('top', (parseInt(d3.select(this).attr('cy')) - height + 20) + 'px')
          .transition()
          .duration(200)
          .style('opacity',1)
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
}
ourRequest.send();
