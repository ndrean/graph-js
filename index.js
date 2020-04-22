// import Chart from "chart.js";

const context = document.querySelector("canvas").getContext("2d");

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
      label: "Browser's usage share 2019",
      data: [16.74, 64.26, 4.47, 2.11],
      backgroundColor: [
        colors.safari,
        colors.chrome,
        colors.firefox,
        colors.edge,
      ],
      borderWidth: 3,
    },
  ],
};

// initialize with a 'bar chart'
let chartInstance = new Chart(context, {
  type: "bar", //or line, doughnut, etc.
  data: dataBrowser,
  options: beginAtZero,
});

// event listener on chart type selector
const chartType = document.querySelector("#chart-type");
chartType.addEventListener("change", (event) => {
  render(event.currentTarget.value);
});

const render = (type) => {
  console.log(type);
  if (chartInstance) {
    chartInstance.destroy();
  }
  return (chartInstance = new Chart(context, {
    type: type,
    data: dataBrowser,
    options: beginAtZero,
  }));
};

//render(chartType.value);
