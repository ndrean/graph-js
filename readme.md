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

## Add download chart as image:

### Download the canvas

The _canvas_

### Data URIs (Base64 encoded strings)

The method `toDataURL()` is used to convert the image into a data:// URL representing a PNG image: it is a base64 encoding of a resource, this means you don’t need to link to an external resource, the text itself is the resource.

If we call `dataURI = canvas.toDataURL()`, then we then can stuff the data directly with a _DataURI_ in the form `data:image/png;base64,iVBORw0KGgoAA...` into an HTML attribute such as `<img scr="dataURI'>` and it displays — without searching for the image or making an external HTTP call.

If we define a link with a `download`attribute:

```
'<a id="download" href="#" download="default.jpg" title="Download graphic!">
```

then we following code allows the link to download immediatly. This is valid for small files.

```js
const canvas = document.querySelector("canvas");
const link = document.getElementById("download");
link.addEventListener("click", async () => {
link.href = canvas.toDataURL("image/jpg");
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

A Blob can be easily used as an URL for
`URL.createObjectURL(blob)` takes a Blob and creates a unique URL for it, in the form

<https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/>

<https://javascript.info/blob>

### Conversion Blob / DataURL

<https://stackoverflow.com/questions/23150333/html5-javascript-dataurl-to-blob-blob-to-dataurl/30407959#30407959>

### Blob & Websockets

<https://stackoverflow.com/questions/11089732/display-image-from-blob-using-javascript-and-websockets>

### FileReader API

To read files or Blob objects, when working with larger files.

<https://www.positronx.io/understand-html5-filereader-api-to-upload-image-and-text-files/>
