const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let vperson = person;
console.log(vperson);

// menggunakan for loop in
// key -> objectnya firstname, lastname, age

for (let key in vperson) {
    console.log(`${key} : ${vperson[key]}`)
}

const person_two = {
  firstName: "raka",
  lastName: "aditya",
  age: 20,
  eyeColor: "red",
};

let fperson = person_two;

// Menggunakan Object.keys dan forEach

Object.keys(fperson).forEach(key => {
    console.log(`${key} : ${fperson[key]}`)
})