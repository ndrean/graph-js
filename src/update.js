const addHelper = (chart, label, data) => {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data);
  chart.data.datasets[0].backgroundColor.push(
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
  );
  chart.update();
};

const addData = (chart) => {
  const newButton = document.querySelector("#submitData");
  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newLabel = document.getElementById("newLabel").value;
    const newValue = document.getElementById("newValue").value;
    addHelper(chart, newLabel, newValue);
    document.querySelector("form").reset();
    newLabel.focus().select();
  });
};

export { addData };
