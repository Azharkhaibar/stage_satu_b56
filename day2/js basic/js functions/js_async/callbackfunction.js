function callback_test(summon) {
  let demoElement = document.getElementById("btnCallback");
  if (demoElement) {
    demoElement.innerHTML = summon;
  } else {
    console.log("Elemen dengan id btnCallback tidak ditemukan.");
  }
}

function callback_res(summon, ...x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    result += `terurut ${i + 1} : ${x[i]} <br>`;
  }
  return result;
}

// Panggil callback_res untuk menghasilkan nilai res
let res = callback_res(1, 5, 3, 6).split(" "); // mengubah string ke dalam array
res.sort();  // mengurutkan array