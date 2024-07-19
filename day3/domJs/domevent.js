// CONTOH 1

document.addEventListener("DOMContentLoaded", function () {
  const btn__new = document.querySelector("#btn");
  if (btn__new) {
    btn__new.addEventListener("click", function () {
      console.log("halo brokk!! berhasill");
    });
  } else {
    console.log("button ga ada!");
  }
});

// CONTOH 2
// Submit form

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const getName = document.getElementById("nama").value;
    if ()
  });
});
