/**
 * MAIN DRIVER SCRIPT
 */

const game = new Game();
game.getStartScreen();
game.startBtn.addEventListener("click", () => {
  game.start();
});
