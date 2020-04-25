import Chart from "chart.js";
import { download } from "./download.js";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

import { addData, removeData } from "./dynamic.js";

library.add(faDownload);
dom.watch();

const canvas = document.querySelector("app-chart");
const context = canvas.getContext("2d");
// canvas.width = 50;
// canvas.height = 50;

const beginAtZero = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const myOptions = {
  beginAtZero,
  title: {
    display: true,
    text: "Browser Usage 2019",
    fontSize: 30,
  },
  // legend: { display: false },
};

const colors = {
  safari: "#25AEEE",
  chrome: "#FECD52",
  firefox: "#FD344B",
  edge: "#57D269",
};

const dataBrowser = {
  labels: ["Safari", "Chrome", "Firefox", "Edge"],
  datasets: [
    {
      label: "% market share",
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
  ],
};

// initialize with a 'bar chart'
let chartInstance = new Chart(context, {
  type: "pie", //or line, doughnut, etc.
  data: dataBrowser,
  options: myOptions,
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
    type: type,
    data: dataBrowser,
    options: myOptions,
  }));
};

download();
