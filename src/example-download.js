// https://cors-image-example.glitch.me/

/*
let downloadedImg;
let imageBox = document.querySelector(".imagebox");

window.addEventListener("load", startup, false);

function startup() {
  let buttonElement = document.getElementById("download");

  buttonElement.addEventListener("click", startDownload, false);
}

function startDownload() {
  // The URL of the image to download:

  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();

  // Request cross-origin access

  downloadedImg.crossOrigin = "Anonymous";

  // Set up a handler for the "load" event on the image object, so that
  // when the data arrives we can handle it.

  downloadedImg.addEventListener("load", imageReceived, false);

  // Set the URL of the image object to trigger the download to start

  downloadedImg.src = imageURL;
}

// Called when the image has been received.

function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  // Adjust the canvas size to match the received image

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  // Draw the received image into the canvas and insert the
  // canvas itno the DOM.

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  // Save the image as a data:// URL with the key "saved-image-example".

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log("Error: " + err);
  }
}
*/
