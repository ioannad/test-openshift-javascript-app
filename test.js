function plot () {
  var mockData = [
    { "patient-id" : 21, "pain-before" : 9, "pain-after" : 3, "complications" : true, "op_date" : "2011-11-11", "comments" : "super annoying patient", "location" : "60.4,7.5"},
    { "patient-id" : 22, "pain-before" : 5, "pain-after" : 3, "complications" : false, "op_date" : "2010-10-10", "comments" : "lovely person", "location" : "50.4,7.9"},
    { "patient-id" : 23, "pain-before" : 8, "pain-after" : 7, "complications" : true, "op_date" : "2009-09-09", "comments" : "annoyed the hell out of me", "location" : "55.4,10.5"},
    { "patient-id" : 24, "pain-before" : 10, "pain-after" : 1, "complications" : false, "op_date" : "2001-01-01", "comments" : "annoying complaining", "location" : "30.4,10.1"},
    { "patient-id" : 25, "pain-before" : 8, "pain-after" : 4, "complications" : true, "op_date" : "2010-09-22", "comments" : "nice person", "location" : "20.4,17.5"},
    { "patient-id" : 26, "pain-before" : 8, "pain-after" : 1, "complications" : false, "op_date" : "2017-09-21", "comments" : "nice lovely person", "location" : "10.4,2.5"},
    { "patient-id" : 27, "pain-before" : 10, "pain-after" : 8, "complications" : true, "op_date" : "2015-01-15", "comments" : "annoying patient", "location" : "40.4,4.5"},
    { "patient-id" : 28, "pain-before" : 4, "pain-after" : 7, "complications" : false, "op_date" : "2014-11-14", "comments" : "bla bla bla annoying", "location" : "54.4,14.5"},
    { "patient-id" : 29, "pain-before" : 3, "pain-after" : 3, "complications" : true, "op_date" : "2011-10-04", "comments" : "bla bla bla nice", "location" : "56.4,6.5"},
    { "patient-id" : 210, "pain-before" : 7, "pain-after" : 4, "complications" : false, "op_date" : "2014-10-13", "comments" : "no trouble, nice person", "location" : "60.4,27.5"},
    { "patient-id" : 211, "pain-before" : 6, "pain-after" : 2, "complications" : false, "op_date" : "2011-01-13", "comments" : "foo bar annoying", "location" : "54.4,7.66"}]
  
  var heightSvg = 180;
  var widthSvg  = 220;
  
  var svgContainer = d3
      .select("body")
      .append("svg")
      .attr("width",  widthSvg)
      .attr("height", heightSvg);
  
  var patients = svgContainer.selectAll("circle")
      .data(mockData)
      .enter()
      .append("circle");
  
  var patientAttributes = patients.attr("cx", function (d) { return 20*(d["pain-before"]); })
      .attr("cy", function (d) { return 20*(d["pain-after"]); })
      .attr("r", 3 )
      .style("fill", function (d) {
        var returnColor;
        if (d.complications) {
          returnColor = "red"; 
        } else { returnColor =  "green"; } 
        return returnColor })
      .append("svg:title")
      .text(function(d) { return "op date: " + d.op_date + ", comments: " + d.comments; });  

};

plot();
