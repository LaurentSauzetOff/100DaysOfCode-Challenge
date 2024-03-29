// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
/* let firstButton = document.querySelector("button"); */
//    - Select the second button by using an "id"
/* let secondButtonOfTwo = document.getElementById("secondButton"); */
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

/* function removeParagraph() {
  console.dir(firstButton);
}

function changeBackgroundColor(event) {
    console.dir(event.target)
} */

/* firstButton.addEventListener("click", removeParagraph); */
//    - Output the second button WITHOUT using the variable in which it's stored
/* secondButtonOfTwo.addEventListener("click", changeBackgroundColor); */
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);
const thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
const firstButtonElement = document.querySelector("button");
const secondButtonElement = document.getElementById("change-bg-btn");
function removeParagraph() {
  thirdParagraphElement.remove();
}

function changeBackgroundColor(event) {
  /*  firstParagraphElement.getElementsByClassName.backgroundColor = 'blue'; */
  firstParagraphElement.className = "blue-bg";
}
firstButtonElement.addEventListener("click", removeParagraph);
secondButtonElement.addEventListener("click", changeBackgroundColor);
