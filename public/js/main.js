const game = new Game();
game.getStartScreen();

game.startBtn.addEventListener("click", () => {
  game.start();
});

// window.requestAnimationFrame(() => {
//   game.checkCollision(game.bird, game.pipeFirst);
// });
