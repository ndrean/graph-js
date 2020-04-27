Live at <https://test-graph-js.surge.sh>

Samples: <https://www.chartjs.org/samples/latest/>

## Install fontawsome:

<https://www.pullrequest.com/blog/webpack-fontawesome-guide/>

```bash
yarn add --dev @fortawesome/fontawesome-svg-core
yarn add --dev @fortawesome/free-solid-svg-icons
```

```js
#index.js
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

library.add(faCheck);
dom.watch();
```

```html
<a
  id="download"
  download="ChartImage.jpg"
  href="#"
  class="btn btn-primary float-right bg-flat-color-1"
  title="Download graphic!"
>
  <!-- Download Icon -->
  <i class="fas fa-download"></i>
</a>


a id="download" download="ChartImage.jpg" href="#" class="btn btn-primary float-right bg-flat-color-1" title="Download graphic!">

    <!-- Download Icon -->
    i class="fas fa-download"></i>
/a>
```

## Download chart image in a file

### Data URIs (Base64 encoded strings)

The method `toDataURL()` is used to convert the image into a data:// URL representing a PNG image: it is a base64 encoding of a resource, this means you don’t need to link to an external resource, the text itself is the resource.

If we call `dataURI = canvas.toDataURL()`, then we then can stuff the data directly with a _DataURI_ in the form `data:image/png;base64,iVBORw0KGgoAA...` into an HTML attribute such as `<img scr="dataURI'>` and it displays — without searching for the image or making an external HTTP call.

If we define a link with a `download`attribute:

```
'<a id="download" href="#" title="Download graphic!">
```

then we following code allows the link to download immediately since we add the attribute `download` and _url = dataURL_ is passed to the atribute `href`. This is valid for small files.

```js
const canvas = document.querySelector("canvas");
const link = document.getElementById("download");
link.addEventListener("click", async () => {
  link.download = prompt("Entrer a file name") || "graph";
  link.href = canvas.toDataURL("image/jpg");
});
```

```js
const dataURI = document.querySelector("canvas").toDataURL; // a data URI
const img = new Image(200, 200);
img.setAttribute("src", dataURI);
const fig = document.createElement("figure");
dcoument.body.appencChild("fig"); // at the end
fig.apendChild("img");
```

so that we obtain `<figure> <img src="data:image/png..."></figure>` at the end of the document.

### Blob

When the data are bigger, we can't stuff the data directly, but pass the _URL_ instead: we create an _Object URL_ from a _blob_ using `createObjectURL(blob)`, in the form `blob:<origin>/<uuid>`. This creates a unique _URL_ to pass to tags such as `<a href="url">`, `<img src="url">` to show its contents.

A Blob can be easily used as an URL using `URL.createObjectURL(blob)`: this takes a Blob and creates a unique URL for it. We first convert the _HTML_ element _canvas_ to a _blob_ by `canvas.toBlob(callback, 'image/jpeg',quality%)`: (2 qualities: _png_ by default or _jpeg_)

```js
e.preventDefault();
const blob = await new Promise((resolve) => {
  canvas.toBlob(resolve, "image/jpeg", 1);
  // shortcut for (blob) => { resolve(blob); }, "image/jpg", 1 );
});
const srcURL = URL.createObjectURL(await blob);
```

Then we create a fake link `<a domain="name.jpg" href="blob_url"></a>` and populate it with the _blob URL_. Then we programatically click it to trigger the download.

```js
const a = document.createElement("a");
a.href = srcURL;
const name = prompt("Enter a file name") || "graph";
a.setAttribute("download", `${name}.jpg`);
a.click(); // simulate click on 'fake' link
```

<https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/>

<https://javascript.info/blob>

CORS
<https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image>
<https://cors-image-example.glitch.me/>

### Conversion Blob / DataURL

<https://stackoverflow.com/questions/23150333/html5-javascript-dataurl-to-blob-blob-to-dataurl/30407959#30407959>

### Blob & Websockets

<https://stackoverflow.com/questions/11089732/display-image-from-blob-using-javascript-and-websockets>

### FileReader API

To read files or Blob objects, when working with larger files.

<https://www.positronx.io/understand-html5-filereader-api-to-upload-image-and-text-files/>
<https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications>

### Caching blobs

As an example on how to save a 'small' blob, we had to use `toDataURL` as a _new Request_ and had to us `cache.put(request,response)` (since the _cache API_ doesn't accepts request as `createObjectURL(blob)`.

```js
const saveBlobToCache = async (blob) => {
  const inCache = await caches.open("char");
  const request = new Request(canvas.toDataURL);
  // does not accept URL.createOBjectURL(blob)
  const response = new Response(blob);
  await inCache.put(request, response);
  // .add() does not work
};
```

### Streaming

<https://nagix.github.io/chartjs-plugin-streaming/>

### SaveToPDF

<https://rawgit.com/MrRio/jsPDF/master/docs/index.html >

### Post on internet

<https://quickchart.io/documentation/>

QuickChart is a web service that generates chart images on-the-fly. These images are suitable for embedding in email, SMS, chatbots, and other formats. Charts are rendered by Chart.js,

## Chart.js

### Capture a point on a chart

```js
options = {
  onClick: (_, item) => {
    try {
      const [id, label, value] = readValues(item);
}

// the way the data are implemented in 'Chart.js' (not documented)
const readValues = (item) => {
  const id = item[0]["_index"];
  const label = item[0]["_chart"].data.labels[id];
  const value = item[0]["_chart"].data.datasets[0].data[id];
  return [id, label, value];
```

### Remove a selected point from a graph

We can use the method `onClick` in the _options_ (it is not the native `onclick`) which returns with the data of the point in the graph.
Here we want to display this in the form so that we can modifiy it. To keep the _x_ value, the _id_, we pass it in a _dataset_ since we use another _event listener_ to submit the data to the graph.

Below is showed how _Chart.js_ gives us teh data:

```js
options = {
  onClick: (_, item) => {
    try {
      const id = item[0]["_index"];
      const label = item[0]["_chart"].data.labels[id];
      const value = item[0]["_chart"].data.datasets[0].data[id];
      document.getElementById("newLabel").dataset.id = id;
} catch (err) {} // since we can click outside of the plot
```

### Chart.js and Geo

<https://github.com/sgratzl/chartjs-chart-geo>

### Char.js library

<https://github.com/chartjs/awesome>

### Cube.js

<https://cube.dev/docs/cubejs-introduction#why-cube-js>

Cube.js is an open source modular framework to build analytical web applications. It is primarily used to build internal business intelligence tools or to add customer-facing analytics to an existing application.

### Configured with Bootstrap @ Webpack

<https://bulma.io/documentation/customize/with-webpack/>

### Set a random Color

```js
"#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
```
