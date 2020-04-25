// https://yaz.in/p/blobs-files-and-data-uris/

const upLoadFile = () => {
  const input = document.querySelector("input[type=file]");
  input.addEventListener("change", onFileChange);

  function onFileChange() {
    const file = input.files[0];
    document.querySelector("img").src = URL.createObjectURL(file);
  }
};

export { upLoadFile };

// <input type='file' accept="image/*" multiple> in the HTML
