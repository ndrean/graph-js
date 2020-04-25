webpackHotUpdate("main",{

/***/ "./src/dynamic.js":
/*!************************!*\
  !*** ./src/dynamic.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create initial empty chart
var ctx_live = document.getElementById("mycanvas");
var myChart = new Chart(ctx_live, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderWidth: 1,
        borderColor: "#00c0ef",
        label: "liveCount",
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// this post id drives the example data
var postId = 1;

// logic to get new data
var getData = function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments",
    success: function (data) {
      // process your data to pull out what you plan to use to update the chart
      // e.g. new label and a new data point

      // add new label and data point to chart's underlying data structures
      myChart.data.labels.push("Post " + postId++);
      myChart.data.datasets[0].data.push(getRandomIntInclusive(1, 25));

      // re-render the chart
      myChart.update();
    },
  });
};

// get new data every 3 seconds
setInterval(getData, 3000);


/***/ }),

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
/* harmony import */ var _download_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.js */ "./src/download.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faDownload */ "./node_modules/@fortawesome/free-solid-svg-icons/faDownload.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic.js */ "./src/dynamic.js");
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dynamic_js__WEBPACK_IMPORTED_MODULE_4__);







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__["faDownload"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["dom"].watch();

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

Object(_download_js__WEBPACK_IMPORTED_MODULE_1__["download"])();


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ1k7QUFDd0I7QUFDUzs7QUFFdkI7O0FBRW5ELHlFQUFPLEtBQUssdUZBQVU7QUFDdEIscUVBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsY0FBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLCtDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QiwrQ0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNkRBQVEiLCJmaWxlIjoibWFpbi45NzAwMTJiMDZhZmVlMWI1MDQ1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vLyBjcmVhdGUgaW5pdGlhbCBlbXB0eSBjaGFydFxudmFyIGN0eF9saXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbnZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eF9saXZlLCB7XG4gIHR5cGU6IFwiYmFyXCIsXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFtdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzAwYzBlZlwiLFxuICAgICAgICBsYWJlbDogXCJsaXZlQ291bnRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgdGl0bGU6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICB0ZXh0OiBcIkNoYXJ0LmpzIC0gRHluYW1pY2FsbHkgVXBkYXRlIENoYXJ0IFZpYSBBamF4IFJlcXVlc3RzXCIsXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NhbGVzOiB7XG4gICAgICB5QXhlczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gdGhpcyBwb3N0IGlkIGRyaXZlcyB0aGUgZXhhbXBsZSBkYXRhXG52YXIgcG9zdElkID0gMTtcblxuLy8gbG9naWMgdG8gZ2V0IG5ldyBkYXRhXG52YXIgZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICsgcG9zdElkICsgXCIvY29tbWVudHNcIixcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgLy8gcHJvY2VzcyB5b3VyIGRhdGEgdG8gcHVsbCBvdXQgd2hhdCB5b3UgcGxhbiB0byB1c2UgdG8gdXBkYXRlIHRoZSBjaGFydFxuICAgICAgLy8gZS5nLiBuZXcgbGFiZWwgYW5kIGEgbmV3IGRhdGEgcG9pbnRcblxuICAgICAgLy8gYWRkIG5ldyBsYWJlbCBhbmQgZGF0YSBwb2ludCB0byBjaGFydCdzIHVuZGVybHlpbmcgZGF0YSBzdHJ1Y3R1cmVzXG4gICAgICBteUNoYXJ0LmRhdGEubGFiZWxzLnB1c2goXCJQb3N0IFwiICsgcG9zdElkKyspO1xuICAgICAgbXlDaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEucHVzaChnZXRSYW5kb21JbnRJbmNsdXNpdmUoMSwgMjUpKTtcblxuICAgICAgLy8gcmUtcmVuZGVyIHRoZSBjaGFydFxuICAgICAgbXlDaGFydC51cGRhdGUoKTtcbiAgICB9LFxuICB9KTtcbn07XG5cbi8vIGdldCBuZXcgZGF0YSBldmVyeSAzIHNlY29uZHNcbnNldEludGVydmFsKGdldERhdGEsIDMwMDApO1xuIiwiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgZG93bmxvYWQgfSBmcm9tIFwiLi9kb3dubG9hZC5qc1wiO1xuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFEb3dubG9hZCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEb3dubG9hZFwiO1xuXG5pbXBvcnQgeyBhZGREYXRhLCByZW1vdmVEYXRhIH0gZnJvbSBcIi4vZHluYW1pYy5qc1wiO1xuXG5saWJyYXJ5LmFkZChmYURvd25sb2FkKTtcbmRvbS53YXRjaCgpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXBwLWNoYXJ0XCIpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBjYW52YXMud2lkdGggPSA1MDtcbi8vIGNhbnZhcy5oZWlnaHQgPSA1MDtcblxuY29uc3QgYmVnaW5BdFplcm8gPSB7XG4gIHNjYWxlczoge1xuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5jb25zdCBteU9wdGlvbnMgPSB7XG4gIGJlZ2luQXRaZXJvLFxuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdGV4dDogXCJCcm93c2VyIFVzYWdlIDIwMTlcIixcbiAgICBmb250U2l6ZTogMzAsXG4gIH0sXG4gIC8vIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9LFxufTtcblxuY29uc3QgY29sb3JzID0ge1xuICBzYWZhcmk6IFwiIzI1QUVFRVwiLFxuICBjaHJvbWU6IFwiI0ZFQ0Q1MlwiLFxuICBmaXJlZm94OiBcIiNGRDM0NEJcIixcbiAgZWRnZTogXCIjNTdEMjY5XCIsXG59O1xuXG5jb25zdCBkYXRhQnJvd3NlciA9IHtcbiAgbGFiZWxzOiBbXCJTYWZhcmlcIiwgXCJDaHJvbWVcIiwgXCJGaXJlZm94XCIsIFwiRWRnZVwiXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCIlIG1hcmtldCBzaGFyZVwiLFxuICAgICAgbGluZVRlbnNpb246IDAsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGRhdGE6IFsxNi43NCwgNjQuMjYsIDQuNDcsIDIuMTFdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgIGNvbG9ycy5zYWZhcmksXG4gICAgICAgIGNvbG9ycy5jaHJvbWUsXG4gICAgICAgIGNvbG9ycy5maXJlZm94LFxuICAgICAgICBjb2xvcnMuZWRnZSxcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMTAsXG4gICAgfSxcbiAgXSxcbn07XG5cbi8vIGluaXRpYWxpemUgd2l0aCBhICdiYXIgY2hhcnQnXG5sZXQgY2hhcnRJbnN0YW5jZSA9IG5ldyBDaGFydChjb250ZXh0LCB7XG4gIHR5cGU6IFwicGllXCIsIC8vb3IgbGluZSwgZG91Z2hudXQsIGV0Yy5cbiAgZGF0YTogZGF0YUJyb3dzZXIsXG4gIG9wdGlvbnM6IG15T3B0aW9ucyxcbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lciBvbiBjaGFydCB0eXBlIHNlbGVjdG9yXG5jb25zdCBjaGFydFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoYXJ0LXR5cGVcIik7XG5jaGFydFR5cGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgcmVuZGVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xufSk7XG5cbmNvbnN0IHJlbmRlciA9ICh0eXBlKSA9PiB7XG4gIGlmIChjaGFydEluc3RhbmNlKSB7XG4gICAgY2hhcnRJbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxuICByZXR1cm4gKGNoYXJ0SW5zdGFuY2UgPSBuZXcgQ2hhcnQoY29udGV4dCwge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YUJyb3dzZXIsXG4gICAgb3B0aW9uczogbXlPcHRpb25zLFxuICB9KSk7XG59O1xuXG5kb3dubG9hZCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==