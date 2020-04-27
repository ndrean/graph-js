import pattern from "patternomaly";

const addHelper = (chart, i, label, value) => {
  if (label === "" || value === "" || value === 0) {
    return;
  }

  const randColor =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  const setColor = i === "0" ? randColor : pattern.draw("dash", randColor);

  const IdExistingLabel = chart.data.labels.findIndex((elt) => elt === label);
  const isEmpty = chart.data.datasets[i].data[IdExistingLabel] === undefined;

  if (IdExistingLabel > -1 && !isEmpty) {
    console.log(chart.data.datasets[i].backgroundColor[IdExistingLabel]);
    const check = prompt("do you want to replace existing value?");
    if (check === "no") {
      console.log("escape");
      return;
    } else {
      console.log("replace");
      chart.data.datasets[i].data.splice(IdExistingLabel, 1, value);
    }
  }

  if (IdExistingLabel > -1 && isEmpty) {
    console.log("extend");
    console.log(chart.data.datasets[i].backgroundColor[IdExistingLabel]);
    chart.data.datasets[i].data.push(value);
  }

  if (IdExistingLabel === -1) {
    console.log("create");
    chart.data.labels.push(label);
    chart.data.datasets[i].data.push(value);
    chart.data.datasets[i].backgroundColor.push(setColor);
  }

  chart.update();
};

const addToDataset = (chart) => {
  const submitButton = document.querySelector("#submitData");
  submitButton.addEventListener("click", todo);
  function todo(e) {
    e.preventDefault();
    const index = document.querySelector("#list-datasets").dataset.number;

    addHelper(
      chart,
      index,
      document.getElementById("newLabel").value,
      document.getElementById("newValue").value
    );
    document.querySelector("form").reset();
  }
};

const addDataToDataset = (chart) => {
  const selectDataset = document.querySelector("#list-datasets");
  selectDataset.addEventListener("change", setDatasetIndex);
  // need to use 'function' and not 'const...'
  function setDatasetIndex(e) {
    // e.preventDefault();
    console.log("set", (selectDataset.dataset.number = e.currentTarget.value));
  }
  const id = selectDataset.dataset.number;
  console.log("add", id);
  addToDataset(chart);
};

export { addDataToDataset };
