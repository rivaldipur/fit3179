var vg_1 = "testing.json";
var vg_2 = "bar visualization.json";
var vg_3 = "point visualization.json";
vegaEmbed("#testChart", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bar_chart", vg_2).then(function(result) {

}).catch(console.error);
vegaEmbed("#point_chart", vg_3).then(function(result) {

}).catch(console.error);
