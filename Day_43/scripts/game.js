function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Donnez des noms custom aux deux joueurs");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;

  const SelectColumn = selectedField.dataset.col - 1;
  const SelectRow = selectedField.dataset.row - 1;

  if (gameData[SelectRow][SelectColumn] > 0) {
    alert('Sélectionnez un champs vide !')
    return;
  } 

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");


  gameData[SelectRow][SelectColumn] = activePlayer + 1;

  switchPlayer();
}
