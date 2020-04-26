const download = () => {
  const canvas = document.querySelector("#app-chart");
  const link = document.getElementById("download");

  const newfig = document.createElement("figure");
  document.body.appendChild(newfig);

  link.addEventListener("click", async (e) => {
    /* SOL 1 with DataURI 
    link.download = prompt("Entrer a file name") || "graph";
    link.href = canvas.toDataURL("image/jpg"); //works immediately for small files
    */

    /* SOL 2 wth blobs & createObjectURL */
    e.preventDefault();
    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/jpeg", 1);
      // (blob) => { resolve(blob); }, "image/jpg", 1 ); // equivalent
    });
    //  we create a fake <a download="name.jpg" href="blob_url"></a>
    //  and populate it and programatically click it to trigger the download
    const srcURL = URL.createObjectURL(await blob);

    // create 'fake' link that is stuffed with donwloading attributes of the blob
    const a = document.createElement("a");
    a.href = srcURL;
    const name = prompt("Enter a file name") || "graph";
    a.setAttribute("download", `${name}.jpeg`);

    await saveBlobToCache(blob); // save in cache as dataURI
    //

    a.click(); // simulate click on 'fake' link

    // no longer need to read the blob so it's revoked
    appendImgFromBlobToFig(srcURL, newfig).then(() => {
      console.log("graph inserted");
      URL.revokeObjectURL(srcURL);
    });
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

  const appendImgFromBlobToFig = async (srcURL, fig) => {
    const newImg = new Image(400, 200); //document.createElement("img"),
    // const srcURL = canvas.toDataURL(); //works as well
    newImg.src = srcURL;
    newImg.alt = "image";
    fig.appendChild(newImg);
    return newImg;

    // return newImg;
  };
};

export { download };
