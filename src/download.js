const download = () => {
  const canvas = document.querySelector("canvas");
  const link = document.getElementById("download");

  const newfig = document.createElement("figure");
  document.body.appendChild(newfig);

  link.addEventListener("click", async () => {
    // link.setAttribute("href", canvas.toDataURL("image/jpg"));
    // e.preventDefault();
    // toBlob is async
    canvas.toBlob(
      async (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        const name = prompt("Enter a file name") || "graph";
        a.setAttribute("download", `${name}.jpg`);
        await saveBlobToCache(blob);
        appendImgFromBlobToFig(url, newfig);
        a.click();
        newImg.onload = () => URL.revokeObjectURL(srcURL);
        // saveDisplayCache(blob, newfig);
      },
      "image/jpg",
      1
    );
  });

  const saveBlobToCache = async (blob) => {
    const inCache = await caches.open("char");
    await inCache.put(new Request(blob.toDataURL), new Response(blob));
  };

  const appendImgFromBlobToFig = (srcURL, fig) => {
    const newImg = new Image(400, 200); //document.createElement("img"),
    // const srcURL = canvas.toDataURL(); //works as well
    newImg.src = srcURL;
    newImg.alt = "image";
    fig.appendChild(newImg);
    // no longer need to read the blob so it's revoked
    newImg.onload = () => URL.revokeObjectURL(srcURL);
  };

  const saveDisplayCache = async (blob, fig) => {
    // we create the URL to the blob
    const srcURL = URL.createObjectURL(blob);
    // console.log(canvas.toDataURL());
    console.log(srcURL);
    console.log(new Response(blob));
    console.log(new Request(blob.toDataURL));
    await saveBlobToCache(blob);
    appendImgFromBlobToFig(srcURL, fig);
  };
};

export { download };
