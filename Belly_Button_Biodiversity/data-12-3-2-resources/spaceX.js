// 1. In the first line, the URL to the SpaceX is defined.
// 2. In the second line, d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// The code to retrieve the full_nameof the Vandenberg Air Force Base would look like this:

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// How to access the latitude of the Vandenburg Airforce Base?
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

    // Use the dot notation (above) twice to access the nested property. 

 
// JSON
d3.json("samples.json").then(function(data){
    console.log(data);
});

    //d3.json(url).then(receivedData => console.log(receivedData));


// extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array. 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});


// Sort the wfreq array in descending order. 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});


// Delete null values from the sorted wfreq array.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// Display the metadata of any individual from the dataset.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

    // Here, we manually specify the individual by the index position. Ultimately, we need to be able to choose an ID number from a dropdown menu and then display the metadata associated with that ID.




