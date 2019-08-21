const { rockPaperScissors } = require('./index');

describe('rockPaperScissors', () => {
  it('should exist', () => {
    expect(rockPaperScissors).toBeTruthy();
  });

  it.each([
    ['rock', 'rock', 'Draw!'],
    ['Rock', 'ROCK', 'Draw!'],
    ['rock', 'scissors', 'Player 1 wins!'],
    ['scissors', 'rock', 'Player 2 wins!'],
    ['SCIssors', 'paper', 'Player 1 wins!'],
    ['paper', 'scissors', 'Player 2 wins!'],
    ['paper', 'rock', 'Player 1 wins!'],
    ['rock', 'paper', 'Player 2 wins!'],
    ['mega shark', 'giant octopus', 'Please pick from: rock, paper, scissors'],
    ['rock', undefined, 'Please pick from: rock, paper, scissors']
  ])(
    'should return the correct output for %s vs %s',
    (player1, player2, expected) => {
      expect(rockPaperScissors(player1, player2)).toBe(expected);
    }
  )
});
