for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Laurent", "Elodie", "Florian"];
for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Laurent",
  age: "39",
  isAdmin: true,
};
for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit ?");
}
console.log("Done");
