var vg_1 = "militarymap.json";
var vg_2 = "gdp life.json";
var vg_3 = "life urban high.json";
var vg_4 = "life urban low.json";

vegaEmbed("#military_map", vg_1).then(function(result) {
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