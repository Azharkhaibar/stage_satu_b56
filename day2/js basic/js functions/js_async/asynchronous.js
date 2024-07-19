
setTimeout(function () {
  myFunction("i love u");
}, 3000);

function myFunction(value) {
  let demoElement = document.getElementById("demo2");
  if (demoElement) {
    demoElement.innerHTML = value;
  } else {
    console.error("Elemen dengan id demo2 tidak ditemukan.");
  }
}
