const download = () => {
  const canvas = document.querySelector("canvas");
  const link = document.getElementById("download");

  const newfig = document.createElement("figure");
  document.body.appendChild(newfig);

  link.addEventListener("click", async () => {
    // link.href =  canvas.toDataURL("image/jpg")) wokrs immediately for small files

    const blob = await new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        "image/png",
        1
      );
    });
    /* we create a fake <a download="name.jpg" href="blob_url"></a> 
    and populate it and programatically click it to trigger the download */
    const srcURL = URL.createObjectURL(await blob);

    const a = document.createElement("a");
    a.href = srcURL;
    const name = prompt("Enter a file name") || "graph";
    a.setAttribute("download", `${name}.jpg`);

    await saveBlobToCache(blob);
    appendImgFromBlobToFig(srcURL, newfig).onload = () =>
      URL.revokeObjectURL(srcURL);
    a.click();
  });

  // we saved in dataURI 64 format
  const saveBlobToCache = async (blob) => {
    const inCache = await caches.open("char");
    const request = new Request(canvas.toDataURL);
    // does not accept URL.createOBjectURL(blob)
    const response = new Response(blob);
    await inCache.put(request, response);
    // .add() does not work
  };

  const appendImgFromBlobToFig = (srcURL, fig) => {
    const newImg = new Image(400, 200); //document.createElement("img"),
    // const srcURL = canvas.toDataURL(); //works as well
    newImg.src = srcURL;
    newImg.alt = "image";
    fig.appendChild(newImg);
    // no longer need to read the blob so it's revoked
    return newImg;
    // newImg.onload = () => URL.revokeObjectURL(srcURL);
  };
};

export { download };
