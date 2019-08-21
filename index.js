const validInput = ['rock', 'paper', 'scissors'];
// x beats y
const matchups = {
  rock: ['scissors'],
  scissors: ['paper'],
  paper: ['rock']
}
const normaliseInput = input => typeof input === 'string' ? input.toLowerCase() : null;

module.exports = {
  rockPaperScissors: (player1input, player2input) => {
    const p1normalisedInput = normaliseInput(player1input);
    const p2normalisedInput = normaliseInput(player2input);

    if (!validInput.includes(p1normalisedInput) || !validInput.includes(p2normalisedInput)) {
      return `Please pick from: ${validInput.join(', ')}`;
    }

    if (p1normalisedInput === p2normalisedInput) {
      return 'Draw!';
    }

    return matchups[p1normalisedInput].includes(p2normalisedInput)
      ? 'Player 1 wins!'
      : 'Player 2 wins!';
  }
};
