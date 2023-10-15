var vg_1 = "map.json";
var vg_2 = "gdp life.json";
var vg_3 = "life urban high.json";
var vg_4 = "life urban low.json";
var vg_5 = "scatter.json";
var vg_6 = "map life.json"

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed("#gdp_life", vg_2).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#life_urban_high", vg_3).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#life_urban_low", vg_4).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#scatter", vg_5).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#map_life", vg_6).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


