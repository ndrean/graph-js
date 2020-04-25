webpackHotUpdate("main",{

/***/ "./src/download.js":
/*!*************************!*\
  !*** ./src/download.js ***!
  \*************************/
/*! exports provided: download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
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
      canvas.toBlob(resolve, "image/jpg", 1);
      // (blob) => { resolve(blob); }, "image/jpg", 1 ); // equivalent
    });
    //  we create a fake <a download="name.jpg" href="blob_url"></a>
    //  and populate it and programatically click it to trigger the download
    const srcURL = URL.createObjectURL(await blob);

    // create 'fake' link that is stuffed with donwloading attributes of the blob
    const a = document.createElement("a");
    a.href = srcURL;
    const name = prompt("Enter a file name") || "graph";
    a.setAttribute("download", `${name}.jpg`);

    await saveBlobToCache(blob); // save in cache as dataURI
    appendImgFromBlobToFig(srcURL, newfig); //

    a.click(); // simulate click on 'fake' link

    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(srcURL);
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

    // return newImg;
    // newImg.onload = () => URL.revokeObjectURL(srcURL);
  };
};




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlLEVBQUUsbUJBQW1CO0FBQ3hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSzs7QUFFdkMsZ0NBQWdDO0FBQ2hDLDJDQUEyQzs7QUFFM0MsY0FBYzs7QUFFZDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0IiLCJmaWxlIjoibWFpbi41Yjg1MzQ4YTU3NTEzMDkyM2U4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG93bmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwLWNoYXJ0XCIpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3dubG9hZFwiKTtcblxuICBjb25zdCBuZXdmaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2ZpZyk7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAvKiBTT0wgMSB3aXRoIERhdGFVUkkgXG4gICAgbGluay5kb3dubG9hZCA9IHByb21wdChcIkVudHJlciBhIGZpbGUgbmFtZVwiKSB8fCBcImdyYXBoXCI7XG4gICAgbGluay5ocmVmID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZ1wiKTsgLy93b3JrcyBpbW1lZGlhdGVseSBmb3Igc21hbGwgZmlsZXNcbiAgICAqL1xuICAgIC8qIFNPTCAyIHd0aCBibG9icyAmIGNyZWF0ZU9iamVjdFVSTCAqL1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSwgXCJpbWFnZS9qcGdcIiwgMSk7XG4gICAgICAvLyAoYmxvYikgPT4geyByZXNvbHZlKGJsb2IpOyB9LCBcImltYWdlL2pwZ1wiLCAxICk7IC8vIGVxdWl2YWxlbnRcbiAgICB9KTtcbiAgICAvLyAgd2UgY3JlYXRlIGEgZmFrZSA8YSBkb3dubG9hZD1cIm5hbWUuanBnXCIgaHJlZj1cImJsb2JfdXJsXCI+PC9hPlxuICAgIC8vICBhbmQgcG9wdWxhdGUgaXQgYW5kIHByb2dyYW1hdGljYWxseSBjbGljayBpdCB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZFxuICAgIGNvbnN0IHNyY1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXdhaXQgYmxvYik7XG5cbiAgICAvLyBjcmVhdGUgJ2Zha2UnIGxpbmsgdGhhdCBpcyBzdHVmZmVkIHdpdGggZG9ud2xvYWRpbmcgYXR0cmlidXRlcyBvZiB0aGUgYmxvYlxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmhyZWYgPSBzcmNVUkw7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcIkVudGVyIGEgZmlsZSBuYW1lXCIpIHx8IFwiZ3JhcGhcIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke25hbWV9LmpwZ2ApO1xuXG4gICAgYXdhaXQgc2F2ZUJsb2JUb0NhY2hlKGJsb2IpOyAvLyBzYXZlIGluIGNhY2hlIGFzIGRhdGFVUklcbiAgICBhcHBlbmRJbWdGcm9tQmxvYlRvRmlnKHNyY1VSTCwgbmV3ZmlnKTsgLy9cblxuICAgIGEuY2xpY2soKTsgLy8gc2ltdWxhdGUgY2xpY2sgb24gJ2Zha2UnIGxpbmtcblxuICAgIC8vIG5vIGxvbmdlciBuZWVkIHRvIHJlYWQgdGhlIGJsb2Igc28gaXQncyByZXZva2VkXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChzcmNVUkwpO1xuICB9KTtcblxuICAvLyB3ZSBzYXZlZCBpbiBkYXRhVVJJIDY0IGZvcm1hdFxuICBjb25zdCBzYXZlQmxvYlRvQ2FjaGUgPSBhc3luYyAoYmxvYikgPT4ge1xuICAgIGNvbnN0IGluQ2FjaGUgPSBhd2FpdCBjYWNoZXMub3BlbihcImNoYXJcIik7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNhbnZhcy50b0RhdGFVUkwpO1xuICAgIC8vIGRvZXMgbm90IGFjY2VwdCBVUkwuY3JlYXRlT0JqZWN0VVJMKGJsb2IpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYmxvYik7XG4gICAgYXdhaXQgaW5DYWNoZS5wdXQocmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIC8vIC5hZGQoKSBkb2VzIG5vdCB3b3JrXG4gIH07XG5cbiAgY29uc3QgYXBwZW5kSW1nRnJvbUJsb2JUb0ZpZyA9IChzcmNVUkwsIGZpZykgPT4ge1xuICAgIGNvbnN0IG5ld0ltZyA9IG5ldyBJbWFnZSg0MDAsIDIwMCk7IC8vZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcbiAgICAvLyBjb25zdCBzcmNVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7IC8vd29ya3MgYXMgd2VsbFxuICAgIG5ld0ltZy5zcmMgPSBzcmNVUkw7XG4gICAgbmV3SW1nLmFsdCA9IFwiaW1hZ2VcIjtcbiAgICBmaWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgIC8vIHJldHVybiBuZXdJbWc7XG4gICAgLy8gbmV3SW1nLm9ubG9hZCA9ICgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoc3JjVVJMKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGRvd25sb2FkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9