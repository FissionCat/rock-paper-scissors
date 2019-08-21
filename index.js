const RPSvalidInput = ['rock', 'paper', 'scissors'];
// x beats y
const RPSmatchups = {
  rock: ['blunts scissors'],
  scissors: ['cut paper'],
  paper: ['covers rock']
};

const RPSLSvalidInput = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const RPSLSmatchups = {
  rock: ['blunts scissors', 'crushes lizard'],
  scissors: ['cut paper', 'decapitates lizard'],
  paper: ['covers rock', 'disproves spock'],
  lizard: ['poisons spock', 'eats paper'],
  spock: ['vaporizes rock', 'smashes scissors']
};

const normaliseInput = input => typeof input === 'string' ? input.toLowerCase() : null;
const findMatchup = (p1, p2, matchups) => {
  const p1Winner = matchups[p1].find(s => s.includes(p2));
  return p1Winner ? {
    text: `${p1} ${p1Winner}`,
    winningPlayer: '1'
  } : {
      text: `${p2} ${matchups[p2].find(s => s.includes(p1))}`,
      winningPlayer: '2'
    };
}

const play = (validInputs, matchups) => (player1input, player2input) => {
  const p1normalisedInput = normaliseInput(player1input);
  const p2normalisedInput = normaliseInput(player2input);

  if (!validInputs.includes(p1normalisedInput) || !validInputs.includes(p2normalisedInput)) {
    return `Please pick from: ${validInputs.join(', ')}`;
  }

  if (p1normalisedInput === p2normalisedInput) {
    return 'Draw!';
  }

  const { text, winningPlayer } = findMatchup(p1normalisedInput, p2normalisedInput, matchups);
  console.log(text)

  return `Player ${winningPlayer} wins! ${text}.`;
};

module.exports = {
  rockPaperScissors: play(RPSvalidInput, RPSmatchups),
  lizardSpock: play(RPSLSvalidInput, RPSLSmatchups)
};
