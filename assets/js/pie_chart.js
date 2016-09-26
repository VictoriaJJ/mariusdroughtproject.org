//Regular pie chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true);

    d3.select("#pie_chart1 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "A",
        "value" : 15
      } , 
      { 
        "label": "B",
        "value" : 15
      } , 
      { 
        "label": "C",
        "value" : 25
      } , 
      { 
        "label": "D",
        "value" : 35
      },
      { 
        "label": "E",
        "value" : 10
      } 
    ];
}