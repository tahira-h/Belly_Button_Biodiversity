Plotly.newPlot("bar-plot", [{x: ["Rank", "City", "State", "Increase_from_2016", "population"], y: [1, "San Antonio", "Texas", 39208, 1511946]}]);
console.log(cityGrowths);  


// Sort and Select the Citites

// Use the sort() method to call an anonymous function to sort objects by the Increase_from_2016 property.
var sortedCities = cityGrowths.sort((a, b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Use slice() method to select only the top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,5);


// Create Arrays of City Names and Growth Figures

//Use the map() method to create two arrays: an array of city names, and an array of corresponding population growths. The map() method will extract these properties. The arrays will be the x and y axis data of the Plotly chart. 
 var topFiveCityNames = topFiveCities.map(city => city.City);
 var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)); // parseInt(city.Increase_from_2016) converts strings into integers


// Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);


// Add the funciton optionChanged()
function optionChanged(newSample) {
    console.log(newSample);
}

// Print information from the Demographic Info panel.
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Declare the first of these functions: buildMetadata()
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        PANEL.append("h6").text(result.location);
    });
}




