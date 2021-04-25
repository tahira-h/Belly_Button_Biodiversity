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








