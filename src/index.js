import Chart from "chart.js";
import { download } from "./download.js";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

import { addData } from "./update.js";

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
    },
    {
      id: "B",
      type: "linear",
      position: "right",
      ticks: {
        beginAtZero: true,
      },
    },
  ],
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
  intercept: true,
  hover: {
    // Overrides the global setting
    mode: "index",
  },
  onClick: (_, item) => {
    try {
      const [id, label, value] = readValues(item);
      document.getElementById("newLabel").value = label;
      document.getElementById("newValue").value = value;
      const removeButton = document.querySelector("#removeData");

      removeButton.addEventListener("click", callRemove);
      function callRemove() {
        doRemove(chartInstance, id);
        removeButton.removeEventListener("click", callRemove);
        document.querySelector("form").reset();
      }
    } catch (err) {}
  },
};

const doRemove = (chart, id) => {
  chart.data.labels.splice(id, 1);
  chart.data.datasets[0].data.splice(id, 1);
  chart.data.datasets[0].backgroundColor.splice(id, 1);
  chart.update();
};

const readValues = (item) => {
  const id = item[0]["_index"];
  const label = item[0]["_chart"].data.labels[id];
  const value = item[0]["_chart"].data.datasets[0].data[id];
  return [id, label, value];
};

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "#57D269",
};

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
        colors.safari,
        colors.chrome,
        colors.firefox,
        colors.edge,
      ],
      borderWidth: 10,
    },
    /* second yAxis
    {
      label: "# clics",
      // type: "line",
      yAxisID: "B",
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
    },*/
  ],
};

// initialize with a 'piechart'
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
addData(chartInstance);
// removeData(chartInstance)
