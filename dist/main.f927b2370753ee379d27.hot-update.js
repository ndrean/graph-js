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
/* harmony import */ var _download_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.js */ "./src/download.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faDownload */ "./node_modules/@fortawesome/free-solid-svg-icons/faDownload.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! patternomaly */ "./node_modules/patternomaly/dist/patternomaly.js");
/* harmony import */ var patternomaly__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update.js */ "./src/update.js");









// for fontawesome
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons_faDownload__WEBPACK_IMPORTED_MODULE_3__["faDownload"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["dom"].watch();

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
        patternomaly__WEBPACK_IMPORTED_MODULE_4___default.a.draw("dash", colors.safari),
        patternomaly__WEBPACK_IMPORTED_MODULE_4___default.a.draw("dash", colors.chrome),
        patternomaly__WEBPACK_IMPORTED_MODULE_4___default.a.draw("dash", colors.firefox),
        patternomaly__WEBPACK_IMPORTED_MODULE_4___default.a.draw("dash", colors.edge),
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
let chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(context, {
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
  return (chartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(context, {
    type,
    data,
    options,
    // type: type, data: data, options: options as we used the same name
  }));
};

Object(_download_js__WEBPACK_IMPORTED_MODULE_1__["download"])();

removeItemFromDataset();

Object(_update_js__WEBPACK_IMPORTED_MODULE_5__["addDataToDataset"])(chartInstance);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ1k7QUFDd0I7QUFDUzs7QUFFdkM7O0FBRVk7O0FBRS9DO0FBQ0EseUVBQU8sS0FBSyx1RkFBVTtBQUN0QixxRUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFPO0FBQ2YsUUFBUSxtREFBTztBQUNmLFFBQVEsbURBQU87QUFDZixRQUFRLG1EQUFPO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwrQ0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSw2REFBUTs7QUFFUjs7QUFFQSxtRUFBZ0IiLCJmaWxlIjoibWFpbi5mOTI3YjIzNzA3NTNlZTM3OWQyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgZG93bmxvYWQgfSBmcm9tIFwiLi9kb3dubG9hZC5qc1wiO1xuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFEb3dubG9hZCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFEb3dubG9hZFwiO1xuXG5pbXBvcnQgcGF0dGVybiBmcm9tIFwicGF0dGVybm9tYWx5XCI7XG5cbmltcG9ydCB7IGFkZERhdGFUb0RhdGFzZXQgfSBmcm9tIFwiLi91cGRhdGUuanNcIjtcblxuLy8gZm9yIGZvbnRhd2Vzb21lXG5saWJyYXJ5LmFkZChmYURvd25sb2FkKTtcbmRvbS53YXRjaCgpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcC1jaGFydFwiKTtcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBteXNjYWxlcyA9IHtcbiAgeUF4ZXM6IFtcbiAgICB7XG4gICAgICBpZDogXCJBXCIsXG4gICAgICB0eXBlOiBcImxpbmVhclwiLFxuICAgICAgcG9zaXRpb246IFwibGVmdFwiLFxuICAgICAgdGlja3M6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgIH0sIC8vIFNlY29uZCBheGlzXG4gICAgLy8ge1xuICAgIC8vICAgaWQ6IFwiQlwiLFxuICAgIC8vICAgdHlwZTogXCJsaW5lYXJcIixcbiAgICAvLyAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsXG4gICAgLy8gICB0aWNrczoge1xuICAgIC8vICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgXSxcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgc2FmYXJpOiBcIiMyNUFFRUVcIixcbiAgY2hyb21lOiBcIiNGRUNENTJcIixcbiAgZmlyZWZveDogXCIjRkQzNDRCXCIsXG4gIGVkZ2U6IFwiIzU3RDI2OVwiLFxufTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2NhbGVzOiBteXNjYWxlcyxcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIHRleHQ6IFwiQnJvd3NlciBVc2FnZSAyMDE5XCIsXG4gICAgZm9udFNpemU6IDMwLFxuICB9LFxuICBldmVudHM6IFtcImNsaWNrXCJdLFxuICB0b29sdGlwczoge1xuICAgIG1vZGU6IFwibmVhcmVzdFwiLFxuICB9LFxuICBpbnRlcmNlcHQ6IGZhbHNlLFxuICBob3Zlcjoge1xuICAgIC8vIE92ZXJyaWRlcyB0aGUgZ2xvYmFsIHNldHRpbmdcbiAgICBtb2RlOiBcImluZGV4XCIsXG4gIH0sXG4gIGxlZ2VuZDogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAvLyBkaWZmZXJlbnQgZnJvbSB0aGUgbmF0aXZlICdvbmNsaWNrJ1xuICBvbkNsaWNrOiAoXywgaXRlbSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZWFkV3JpdGVWYWx1ZXNGcm9tQ2hhcnQoaXRlbSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxufTtcblxuY29uc3QgcmVhZFdyaXRlVmFsdWVzRnJvbUNoYXJ0ID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgaWQgPSBpdGVtWzBdW1wiX2luZGV4XCJdO1xuICBjb25zdCBsYWJlbCA9IGl0ZW1bMF1bXCJfY2hhcnRcIl0uZGF0YS5sYWJlbHNbaWRdO1xuICBjb25zdCB2YWx1ZSA9IGl0ZW1bMF1bXCJfY2hhcnRcIl0uZGF0YS5kYXRhc2V0c1swXS5kYXRhW2lkXTtcbiAgLy8gc2F2ZSB0aGUgaWQgaW4gdGhlIGRhdGFzZXRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMYWJlbFwiKS5kYXRhc2V0LmlkID0gaWQ7XG4gIC8vIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHBvaW50XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TGFiZWxcIikudmFsdWUgPSBsYWJlbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdWYWx1ZVwiKS52YWx1ZSA9IHZhbHVlO1xuICBjb25zb2xlLmxvZyhpdGVtKTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tRGF0YXNldCgpIHtcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW1vdmVEYXRhXCIpO1xuICAvLyBleGFtcGxlIG9mIG5hdGl2ZSAnb25jbGljaydcbiAgcmVtb3ZlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2FsbFJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLnJlc2V0KCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGxSZW1vdmUoKSB7XG4gIGNvbnN0IGlkID0gcmVhZElkRnJvbUlucHV0KCk7XG4gIGlmIChpZCA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICByZW1vdmVJZEZyb21EYXRhc2V0cyhjaGFydEluc3RhbmNlLCBpZCk7XG4gIHJlc2V0SWRGcm9tSW5wdXQoKTtcbn1cbmNvbnN0IHJlYWRJZEZyb21JbnB1dCA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3TGFiZWxcIikuZGF0YXNldC5pZDtcbmNvbnN0IHJlc2V0SWRGcm9tSW5wdXQgPSAoKSA9PlxuICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdMYWJlbFwiKS5kYXRhc2V0LmlkID0gXCJcIik7XG5cbmNvbnN0IHJlbW92ZUlkRnJvbURhdGFzZXRzID0gKGNoYXJ0LCBpZCkgPT4ge1xuICAvLyByZW1vdmUgYWxsIHZhbHVlcyAmIGxhYmVsIG9mIGFsbCBkYXRhc2V0cyBhdCB0aGUgaW5kZXhcbiAgY2hhcnQuZGF0YS5sYWJlbHMuc3BsaWNlKGlkLCAxKTtcbiAgY2hhcnQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKChkYXRhc2V0KSA9PiB7XG4gICAgZGF0YXNldC5kYXRhLnNwbGljZShpZCwgMSk7XG4gICAgZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3Iuc3BsaWNlKGlkLCAxKTtcbiAgfSk7XG4gIGNoYXJ0LnVwZGF0ZSgpO1xufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogW1wiU2FmYXJpXCIsIFwiQ2hyb21lXCIsIFwiRmlyZWZveFwiLCBcIkVkZ2VcIl0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiJSBtYXJrZXQgc2hhcmVcIixcbiAgICAgIHlBeGlzSUQ6IFwiQVwiLFxuICAgICAgbGluZVRlbnNpb246IDAsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGRhdGE6IFsxNi43NCwgNjQuMjYsIDQuNDcsIDIuMTFdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgIHBhdHRlcm4uZHJhdyhcImRhc2hcIiwgY29sb3JzLnNhZmFyaSksXG4gICAgICAgIHBhdHRlcm4uZHJhdyhcImRhc2hcIiwgY29sb3JzLmNocm9tZSksXG4gICAgICAgIHBhdHRlcm4uZHJhdyhcImRhc2hcIiwgY29sb3JzLmZpcmVmb3gpLFxuICAgICAgICBwYXR0ZXJuLmRyYXcoXCJkYXNoXCIsIGNvbG9ycy5lZGdlKSxcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMTAsXG4gICAgfSxcbiAgICAvKiBzZWNvbmQgZGF0YXNldCB3aXRoIHNhbWUgYXhpcyAqL1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIiMgY2xpY3NcIixcbiAgICAgIC8vIHR5cGU6IFwibGluZVwiLFxuICAgICAgeUF4aXNJRDogXCJBXCIsXG4gICAgICBsaW5lVGVuc2lvbjogMCxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgZGF0YTogWzYuNzQsIDM0LjI2LCAxNC40NywgMjIuMTFdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgIGNvbG9ycy5zYWZhcmksXG4gICAgICAgIGNvbG9ycy5jaHJvbWUsXG4gICAgICAgIGNvbG9ycy5maXJlZm94LFxuICAgICAgICBjb2xvcnMuZWRnZSxcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMTAsXG4gICAgfSxcbiAgXSxcbn07XG5cbi8vIGluaXRpYWxpemVcbmxldCBjaGFydEluc3RhbmNlID0gbmV3IENoYXJ0KGNvbnRleHQsIHtcbiAgdHlwZTogXCJiYXJcIiwgLy9vciBsaW5lLCBkb3VnaG51dCwgZXRjLlxuICBkYXRhOiBkYXRhLFxuICBvcHRpb25zOiBvcHRpb25zLFxufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIG9uIGNoYXJ0IHR5cGUgc2VsZWN0b3JcbmNvbnN0IGNoYXJ0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhcnQtdHlwZVwiKTtcbmNoYXJ0VHlwZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICByZW5kZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG59KTtcblxuY29uc3QgcmVuZGVyID0gKHR5cGUpID0+IHtcbiAgaWYgKGNoYXJ0SW5zdGFuY2UpIHtcbiAgICBjaGFydEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgfVxuICByZXR1cm4gKGNoYXJ0SW5zdGFuY2UgPSBuZXcgQ2hhcnQoY29udGV4dCwge1xuICAgIHR5cGUsXG4gICAgZGF0YSxcbiAgICBvcHRpb25zLFxuICAgIC8vIHR5cGU6IHR5cGUsIGRhdGE6IGRhdGEsIG9wdGlvbnM6IG9wdGlvbnMgYXMgd2UgdXNlZCB0aGUgc2FtZSBuYW1lXG4gIH0pKTtcbn07XG5cbmRvd25sb2FkKCk7XG5cbnJlbW92ZUl0ZW1Gcm9tRGF0YXNldCgpO1xuXG5hZGREYXRhVG9EYXRhc2V0KGNoYXJ0SW5zdGFuY2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==