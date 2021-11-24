/* let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
  paragraphElement.textContent = 'Clicked!';
  console.log('Paragraph clicked!');
  console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  // let enteredText = event.data; => This is different!
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput); */

let anchorElement = document.getElementById("external-link");
anchorElement = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement = "https://academind.com";

// add an element
// 1. créer l'élément

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "Lien vers google";

// 2. accéder au parent qui doit accueillir le nouvel élément

let firstParagraph = document.querySelector("p");

// 3. Insérer le nouvel élément dans le parent

firstParagraph.append(newAnchorElement);

// Remove element
// 1. Select the element

let firstH1Element = document.querySelector("h1");

// 2. remove it

firstH1Element.remove();
