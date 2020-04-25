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




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZG93bmxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9CIiwiZmlsZSI6Im1haW4uODU1MDBjMjM5YzhiOTY0YTEzNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvd25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3dubG9hZFwiKTtcblxuICBjb25zdCBuZXdmaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld2ZpZyk7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBnXCIpKTtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gdG9CbG9iIGlzIGFzeW5jXG4gICAgY2FudmFzLnRvQmxvYihcbiAgICAgIGFzeW5jIChibG9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiRW50ZXIgYSBmaWxlIG5hbWVcIikgfHwgXCJncmFwaFwiO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke25hbWV9LmpwZ2ApO1xuICAgICAgICBhd2FpdCBzYXZlQmxvYlRvQ2FjaGUoYmxvYik7XG4gICAgICAgIGFwcGVuZEltZ0Zyb21CbG9iVG9GaWcodXJsLCBuZXdmaWcpO1xuICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgIG5ld0ltZy5vbmxvYWQgPSAoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHNyY1VSTCk7XG4gICAgICAgIC8vIHNhdmVEaXNwbGF5Q2FjaGUoYmxvYiwgbmV3ZmlnKTtcbiAgICAgIH0sXG4gICAgICBcImltYWdlL2pwZ1wiLFxuICAgICAgMVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IHNhdmVCbG9iVG9DYWNoZSA9IGFzeW5jIChibG9iKSA9PiB7XG4gICAgY29uc3QgaW5DYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKFwiY2hhclwiKTtcbiAgICBhd2FpdCBpbkNhY2hlLnB1dChuZXcgUmVxdWVzdChibG9iLnRvRGF0YVVSTCksIG5ldyBSZXNwb25zZShibG9iKSk7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kSW1nRnJvbUJsb2JUb0ZpZyA9IChzcmNVUkwsIGZpZykgPT4ge1xuICAgIGNvbnN0IG5ld0ltZyA9IG5ldyBJbWFnZSg0MDAsIDIwMCk7IC8vZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcbiAgICAvLyBjb25zdCBzcmNVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7IC8vd29ya3MgYXMgd2VsbFxuICAgIG5ld0ltZy5zcmMgPSBzcmNVUkw7XG4gICAgbmV3SW1nLmFsdCA9IFwiaW1hZ2VcIjtcbiAgICBmaWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgICAvLyBubyBsb25nZXIgbmVlZCB0byByZWFkIHRoZSBibG9iIHNvIGl0J3MgcmV2b2tlZFxuICAgIG5ld0ltZy5vbmxvYWQgPSAoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHNyY1VSTCk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZURpc3BsYXlDYWNoZSA9IGFzeW5jIChibG9iLCBmaWcpID0+IHtcbiAgICAvLyB3ZSBjcmVhdGUgdGhlIFVSTCB0byB0aGUgYmxvYlxuICAgIGNvbnN0IHNyY1VSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgLy8gY29uc29sZS5sb2coY2FudmFzLnRvRGF0YVVSTCgpKTtcbiAgICBjb25zb2xlLmxvZyhzcmNVUkwpO1xuICAgIGNvbnNvbGUubG9nKG5ldyBSZXNwb25zZShibG9iKSk7XG4gICAgY29uc29sZS5sb2cobmV3IFJlcXVlc3QoYmxvYi50b0RhdGFVUkwpKTtcbiAgICBhd2FpdCBzYXZlQmxvYlRvQ2FjaGUoYmxvYik7XG4gICAgYXBwZW5kSW1nRnJvbUJsb2JUb0ZpZyhzcmNVUkwsIGZpZyk7XG4gIH07XG59O1xuXG5leHBvcnQgeyBkb3dubG9hZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==