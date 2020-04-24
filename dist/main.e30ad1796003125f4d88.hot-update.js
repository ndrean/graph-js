webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);


// const Chart = require("chart.js");

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
let chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(context, {
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

  return (chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(context, {
    type: type,
    data: dataBrowser,
    options: myOptions,
  }));
};


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsY0FBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLCtDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QiwrQ0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoibWFpbi5lMzBhZDE3OTYwMDMxMjVmNGQ4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG4vLyBjb25zdCBDaGFydCA9IHJlcXVpcmUoXCJjaGFydC5qc1wiKTtcblxuY29uc3QgY29udGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBiZWdpbkF0WmVybyA9IHtcbiAgc2NhbGVzOiB7XG4gICAgeUF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IG15T3B0aW9ucyA9IHtcbiAgYmVnaW5BdFplcm8sXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJyb3dzZXIgVXNhZ2UgMjAxOVwiLFxuICAgIGZvbnRTaXplOiAzMCxcbiAgfSxcbiAgLy8gbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0sXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIHNhZmFyaTogXCIjMjVBRUVFXCIsXG4gIGNocm9tZTogXCIjRkVDRDUyXCIsXG4gIGZpcmVmb3g6IFwiI0ZEMzQ0QlwiLFxuICBlZGdlOiBcIiM1N0QyNjlcIixcbn07XG5cbmNvbnN0IGRhdGFCcm93c2VyID0ge1xuICBsYWJlbHM6IFtcIlNhZmFyaVwiLCBcIkNocm9tZVwiLCBcIkZpcmVmb3hcIiwgXCJFZGdlXCJdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIiUgbWFya2V0IHNoYXJlXCIsXG4gICAgICBsaW5lVGVuc2lvbjogMCxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgZGF0YTogWzE2Ljc0LCA2NC4yNiwgNC40NywgMi4xMV0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgY29sb3JzLnNhZmFyaSxcbiAgICAgICAgY29sb3JzLmNocm9tZSxcbiAgICAgICAgY29sb3JzLmZpcmVmb3gsXG4gICAgICAgIGNvbG9ycy5lZGdlLFxuICAgICAgXSxcbiAgICAgIGJvcmRlcldpZHRoOiAxMCxcbiAgICB9LFxuICBdLFxufTtcblxuLy8gaW5pdGlhbGl6ZSB3aXRoIGEgJ2JhciBjaGFydCdcbmxldCBjaGFydEluc3RhbmNlID0gbmV3IENoYXJ0KGNvbnRleHQsIHtcbiAgdHlwZTogXCJwaWVcIiwgLy9vciBsaW5lLCBkb3VnaG51dCwgZXRjLlxuICBkYXRhOiBkYXRhQnJvd3NlcixcbiAgb3B0aW9uczogbXlPcHRpb25zLFxufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIG9uIGNoYXJ0IHR5cGUgc2VsZWN0b3JcbmNvbnN0IGNoYXJ0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhcnQtdHlwZVwiKTtcbmNoYXJ0VHlwZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICByZW5kZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG59KTtcblxuY29uc3QgcmVuZGVyID0gKHR5cGUpID0+IHtcbiAgaWYgKGNoYXJ0SW5zdGFuY2UpIHtcbiAgICBjaGFydEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHJldHVybiAoY2hhcnRJbnN0YW5jZSA9IG5ldyBDaGFydChjb250ZXh0LCB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRhOiBkYXRhQnJvd3NlcixcbiAgICBvcHRpb25zOiBteU9wdGlvbnMsXG4gIH0pKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9