
var margin = {top: 20, right: 20, bottom: 20, left: 40},
    width = 960 - margin.left - margin.right,
    height = 3040 - margin.top - margin.bottom;

var formatPercent = d3.format(".0%");

var y = d3.scale.ordinal()
       .rangeRoundBands([height, 0], .1);

var x = d3.scale.linear()
   .range([0, width]);


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(formatPercent);

var svg = d3.select("body").append("svg")
    .attr("height", height + margin.left + margin.right)
    .attr("width", width + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function(error, data) {

  data.forEach(function(d) {
    d.frequency = +d.frequency;
  });

  y.domain(data.map(function(d) { return d.letter; }));
  x.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Letter");


  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("height", y.rangeBand())
      // .attr("x", function(d) { return x(d.letter); })
      .attr("width", function(d) { return x(d.frequency); })
      .attr("y", function(d) { return y(d.frequency); });
  
  d3.select("input").on("change", change);

  var sortTimeout = setTimeout(function() {
    d3.select("input").property("checked", true).each(change);
  }, 2000);

  function change() {
    clearTimeout(sortTimeout);


    var x0 = y.domain(data.sort(this.checked
        ? function(a, b) { return b.frequency - a.frequency; }
        : function(a, b) { return d3.ascending(a.letter, b.letter); })
        .map(function(d) { return d.letter; }))
        .copy();

    svg.selectAll(".bar")
        .sort(function(a, b) { return x0(a.letter) - x0(b.letter); });

    var transition = svg.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("y", function(d) { return x0(d.letter); });

    transition.select(".y.axis")
        .call(yAxis)
      .selectAll("g")
        .delay(delay);
  }
});


// радужные столбцы при скролле

  var scrollHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function() {
      var fill_color = 120 - 120 / scrollHeight * window.pageYOffset;
      svg.selectAll(".bar").style('fill', function(){
       return 'hsl('+fill_color+', 100%, 50%)'});
  };