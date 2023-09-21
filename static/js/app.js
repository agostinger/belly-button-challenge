// Get the endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// select the dropdown and demographics object
const dropDown = d3.select("#selDataset");
const demDiv = d3.select("#sample-metadata");

// set up the intialization
function init() {
// Fetch the JSON data, store it in a variable and console log it
  d3.json(url).then((data) => {
    console.log("Data: ", data);
    sample_data = data;
    // set variable for subject IDs
    subjects = data.names;

    // Create the Test Subject ID Dropdown
    subjects.forEach(element => { dropDown.append("option").text(element).property("value", element); });

    // create a variable for each sample ID
    let ids = subjects[0];
    // create the charts and displays for the sample data.
    plotCharts(ids)
  });
}

// Define the optionChanged function to change the data when the dropdown changes
function optionChanged(ids) {
  console.log("Sample ID: ", ids)
 // create the charts and displays for the sample data upon change of dropdown.
 plotCharts(ids)
}

// Call the init function to start the process
init();

// Create a function for the charts and demographics data to display
function plotCharts(ids) {
  // Filter the sample data and metadata to the ID chosen in dropdown
    let samples = sample_data.samples.filter(sample => sample.id === ids)[0];
    var demographics = sample_data.metadata.filter(sample => String(sample.id) === ids)[0];
    console.log("Sample Values: ", samples)
    console.log("Demographics: ", demographics);

  // Trace1 for bar chart to chart top ten OTUs by subject by slicing
    let trace1 = {
      x: samples.sample_values.slice(0, 10).reverse(),
      y: samples.otu_ids.slice(0, 10).map(id => `OTU ${id}`),
      text: samples.otu_labels.slice(0, 10),
      type: "bar",
      orientation: "h"
   };

  // Apply a title to the bar chart
  let layout1 = {
    title: `Top Ten OTUs for Subject ${samples.id}`
   };

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot("bar", [trace1], layout1);

 // Trace2 for the Data for Bubble Chart
  let trace2 = {
    x: samples.otu_ids,
    y: samples.sample_values,
    text: samples.otu_labels,
    mode: "markers",
    marker: {
      color: samples.otu_ids,
      size: samples.sample_values,
      colorscale: "Jet"
    }
  };
// Apply titles to the layout for bubble chart
  let layout2 = {
    xaxis: { title: "OTU ID" },
    title: `Microbial Species (OTUs) Sample Size for Subject ${samples.id}`
 };

// Render the plot to the div tag with id "bubble"
  Plotly.newPlot("bubble", [trace2], layout2);

// Display Demographics of Subject selected by first clearing and then updating
  demDiv.html("");
  Object.entries(demographics).forEach(([key, value]) => {
    demDiv.append("h5").text(`${key}: ${value}`);

  // Trace3 for the data for gauge chart on washing frequency for each subject
  let trace3= {
    domain: { x: [0, 1], y: [0, 1] },
    value: demographics.wfreq,
    title: { text: "Belly Button Washing Frequency<br>Scrubs per Week" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 9] },
      }
  };
// Render the plot to the div tag with id "gauge"
    Plotly.newPlot("gauge", [trace3]);
  });
}
