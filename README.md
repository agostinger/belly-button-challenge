# belly-button-challenge
Student:  Adam Gostinger
Date: 20 September 2023



## Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Contributing](#contributing)
- [Summary](#summary)

## About
    In this analysis, an interactive dashboard was created to analyze a dataset chronicling the
    microbial species inhabiting human navels (also known as operational taxonomic units, or
    OTUs). An HTML document and JavaScript was used with the D3 and Ployly libraries to parse
    JSON data from the data retrieved from the link below and interactive visualizations were
    generated.

## Getting Started
    This code showcases JavaScript's D3 library's ability to parse JSON data and Plotly's
    graphing and plotting abilities. After retrieving and initilizaing the data, the specific
    samples were extracted from the metadata. This was used to create the dropdown for the users
    to select a specific subject from the samples, which then updates the visualizations on the
    site.
    
## Contributing
- <a href="https://www.github.com/RyGuy57/" target="_blank">Ryan Himes</a>

## Summary
The code provides an interactive data visualization dashboard to represent data fetched from a JSON source from the link below. The main features and their descriptions are as follows:

Data Retrieval:
The data is fetched from https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json using the d3.json method.

PlotCharts Function:
This function is responsible for visualizing the data. It extracts relevant information from the fetched JSON data in order to generate the following visualizations.

Bar Chart: A horizontal bar chart is plotted demonstrating the top 10 sample microbial species  found in each subject. 

Bubble Chart: A bubble chart is constructed to show the relationship between the OTUs and sample values found in each subjects sample. 

Demographics Display: Demographics associated with each subject is fetched and displayed on the webpage.

Gauge Chart: This gauge chart depicts the belly washes per week for each subject tested. This can help determine if more frequent washing results in less OTUs found in that subject. 

Initialize Function:
This function initializes the dashboard on loading. The function populates a dropdown menu with sample names from the fetched data. By default, data for the first sample is visualized when the dashboard loads.

Dropdown Interaction:
    The optionChanged function is an event handler for the dropdown menu. When a user selects a
    different subject, the visualizations above are updated to reflect the data of the chosen
    subject.
