let age = 32;
let userName = "Laurent" + "Sauzet";
let hobbies = [
  "Cinema" /* index 0 */,
  "Musique" /* index 1 */,
  "Jeux vidéo" /* index 2 */,
];
let job = {
  title: "Developpeur Fullstack",
  place: "Lorient",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);
