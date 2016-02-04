react-micro-bar-chart
=====================

React component for micro bar-charts rendered with D3. Companion to [react-sparkline](https://github.com/KyleAMathews/react-sparkline).
This repo was forked from [Kyle Mathews original project](https://github.com/KyleAMathews/react-micro-bar-chart)
and with contributions from [Sean Sun](https://github.com/seanysun/react-micro-bar-chart)


## Install
`npm install react-micro-bar-chart`

or if using bower add this lines in your bower.json file
````javascript
"dependencies": {
    "react-micro-bar-chart": "josecomboni/react-micro-bar-chart#1.0.3",
    "d3": "~3.5.12"
  }
````

## Usage

Intended for simple micro-charts.

````javascript
var MicroBarChart = require('react-micro-bar-chart');

<MicroBarChart data={anArrayOfNumbers} />
````

See the demo for more examples.

## Demo
http://kyleamathews.github.io/react-micro-bar-chart/
