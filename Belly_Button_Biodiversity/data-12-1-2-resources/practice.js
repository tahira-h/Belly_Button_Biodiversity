// Ordering food for a department luncheon

// 33 people in the dept are surveyed about their lunch preferences. They were asked to choose burritos, pizza, or chicken for the dept lunch. 
// 10 voted for burritos, 18 for pizza, and 5 for chicken.

// Plot these results. 


// Bar Chart
var trace = {   //assign the x & y values to the variable 'trace'
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
//Plotly.newPlot("plotArea", [trace]);  //move to end of this code

//Choose Layout Options
var layout = {
    title: "Luncheon Survey",    //an object(title) is assigned to the variable(layout)
    xaxis: { title: "Food Option"},  // title is the key, food is the option. This title is not the same as the Luncheon survey's title.
    yaxis: { title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);    // plotArea refers to the HTML div that contains the chart(index.html)



// Bar Chart        // % of beverages
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var data = [trace];
var layout = {
    title: "'Bar' Chart", 
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea", data, layout);


// Create a Pie Chart       // Instant view of the of each drink.
//create this pie chart of the bar data of (% of beverages above)
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);

// The above pie chart does not render. Why?

// In trace, the data arrays have x and y keys: 
// This causes a problem because a pie chart does not have x and y axes. 
// Different keys should be used.

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);


// Scatter Plot
var trace1 = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',       //could be 'markers', 'lines', or 'lines+markers'
    type: "scatter"
};

var data = [trace1];
Plotly.newPlot("plotArea", data);


// Notes from website
//var trace1 = {
//    x: [1, 2, 3, 4],
//    y: [10, 15, 13, 17],
//    mode: 'markers',
//    type: 'scatter'
//  };
  
//  var trace2 = {
//    x: [2, 3, 4, 5],
//    y: [16, 5, 11, 9],
//    mode: 'lines',
//    type: 'scatter'
//  };
  
//  var trace3 = {
//    x: [1, 2, 3, 4],
//    y: [12, 9, 15, 12],
//    mode: 'lines+markers',
//    type: 'scatter'
//  };
  
//  var data = [trace1, trace2, trace3];
  
//  Plotly.newPlot('myDiv', data);



// Map() function    

// Here's another way to use map(). In this example,map() is used to extract a specific property from each object in an array.

// Note the following:

// 1. cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
// 2. The map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, and Dallas. During each iteration, the anonymous function inside map() returns only that property of each object.
// 3. cityNames is an array of only these city names.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);



// Filter() Method

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Returns an array of integers larger than 1:    [2,3,4,5]


// similarities:     map() and filter(0)

// The numbers array uses the filter() method.
// The filter() method, in turn, takes an anonymous function as its argument. The anonymous function's sole task is to take in a parameter, called num.

// In this case, specifically, the anonymous function called by filter() returns true if an argument is larger than 1, and false if it does not. 

//  Only numbers that are larger than 1 are returned: [2,3,4,5].



// Sort() method

//The anonymous function inside map() and filter() can be simplified as an arrow function. Here's an example:

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);
//The map() method performs the identical operation as before: it doubles each element in the numbers array. However, the anonymous function inside map() has been replaced by an arrow function. Contrast the two:

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// modified version
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

// Break down of this code.

// * The variables a and b are replaced by anElement and anotherElement.
// * The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
// * The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
// * Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
// * The sort()method compares another pair of elements in the array, for example 37 and 39.
// * Since 37 - 39 is a negative number, their ordering is kept.
// * The process is repeated until the array is sorted.



// Slice()  method

//Roza also needs to be able to select a subset of the data. In her project, for example, she might perform a transformation on an array, filter it, sort it, and then display only the top five results.

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// In this example, the slice()method returns the first two elements of the integer array: [0,1]. The first argument is the position of where to begin the selection. Here, it is at index position 0. The next argument, 2, denotes the position of the array where the slicing ceases. In other words, the slice()method begins selecting the array at index position 0, and stops right before reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2.


// Use slice() to select the first 3 elements of the 'words' array.
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

// elements sliced here are ['orangutan', 'salamander']





