import Chart from "chart.js";
import { download } from "./download.js";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

import pattern from "patternomaly";

import { addDataToDataset } from "./update.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// for fontawesome
library.add(faDownload);
dom.watch();

const canvas = document.querySelector("#app-chart");
const context = canvas.getContext("2d");

const myscales = {
  yAxes: [
    {
      id: "A",
      type: "linear",
      position: "left",
      ticks: {
        beginAtZero: true,
      },
    }, // Second axis
    // {
    //   id: "B",
    //   type: "linear",
    //   position: "right",
    //   ticks: {
    //     beginAtZero: true,
    //   },
    // },
  ],
};

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "#57D269",
};

const options = {
  scales: myscales,
  title: {
    display: true,
    text: "Browser Usage 2019",
    fontSize: 30,
  },
  events: ["click"],
  tooltips: {
    mode: "nearest",
  },
  intercept: false,
  hover: {
    // Overrides the global setting
    mode: "index",
  },
  legend: { position: "bottom" },
  // different from the native 'onclick'
  onClick: (_, item) => {
    try {
      readWriteValuesFromChart(item);
    } catch (err) {}
  },
};

const readWriteValuesFromChart = (item) => {
  const id = item[0]["_index"];
  const label = item[0]["_chart"].data.labels[id];
  const value = item[0]["_chart"].data.datasets[0].data[id];
  // save the id in the dataset
  document.getElementById("newLabel").dataset.id = id;
  // display the selected point
  document.getElementById("newLabel").value = label;
  document.getElementById("newValue").value = value;
  console.log(item);
};

function removeItemFromDataset() {
  const removeButton = document.querySelector("#removeData");
  // example of native 'onclick'
  removeButton.onclick = function () {
    callRemove();
    document.querySelector("form").reset();
  };
}

function callRemove() {
  const id = readIdFromInput();
  if (id === "") {
    return;
  }
  removeIdFromDatasets(chartInstance, id);
  resetIdFromInput();
}
const readIdFromInput = () => document.getElementById("newLabel").dataset.id;
const resetIdFromInput = () =>
  (document.getElementById("newLabel").dataset.id = "");

const removeIdFromDatasets = (chart, id) => {
  // remove all values & label of all datasets at the index
  chart.data.labels.splice(id, 1);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.splice(id, 1);
    dataset.backgroundColor.splice(id, 1);
  });
  chart.update();
};

/*************************/

const data = {
  labels: ["Safari", "Chrome", "Firefox", "Edge"],
  datasets: [
    {
      label: "% market share",
      yAxisID: "A",
      lineTension: 0,
      fill: false,
      data: [16.74, 64.26, 4.47, 2.11],
      backgroundColor: [
        pattern.draw("dash", colors.safari),
        pattern.draw("dash", colors.chrome),
        pattern.draw("dash", colors.firefox),
        pattern.draw("dash", colors.edge),
      ],
      borderWidth: 10,
    },
    /* second dataset with same axis */
    {
      label: "# clics",
      // type: "line",
      yAxisID: "A",
      lineTension: 0,
      fill: false,
      data: [6.74, 34.26, 14.47, 22.11],
      backgroundColor: [
        colors.safari,
        colors.chrome,
        colors.firefox,
        colors.edge,
      ],
      borderWidth: 10,
    },
  ],
};

// initialize
let chartInstance = new Chart(context, {
  type: "bar", //or line, doughnut, etc.
  data: data,
  options: options,
});

// event listener on chart type selector
const chartType = document.querySelector("#chart-type");
chartType.addEventListener("change", (event) => {
  render(event.currentTarget.value);
});

const render = (type) => {
  if (chartInstance) {
    chartInstance.destroy();
  }
  return (chartInstance = new Chart(context, {
    type,
    data,
    options,
    // type: type, data: data, options: options as we used the same name
  }));
};

download();

removeItemFromDataset();

addDataToDataset(chartInstance);
