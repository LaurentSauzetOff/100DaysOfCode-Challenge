function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
      alert('Donnez des noms custom aux deux joueurs')
    return;
  }
  gameAreaElement.style.display = "block";
}
