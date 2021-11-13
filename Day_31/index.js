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

let adultYears;

function calculateAdultYears(){
  adultYears = age - 18
}

calculateAdultYears();
alert(adultYears);

age = 45;
calculateAdultYears();

alert(adultYears);
