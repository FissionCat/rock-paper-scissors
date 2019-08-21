const { rockPaperScissors, lizardSpock } = require('./index');

describe('rockPaperScissors', () => {
  it('should exist', () => {
    expect(rockPaperScissors).toBeTruthy();
  });

  it.each([
    ['rock', 'rock', 'Draw!'],
    ['Rock', 'ROCK', 'Draw!'],
    ['rock', 'scissors', 'Player 1 wins! rock blunts scissors.'],
    ['scissors', 'rock', 'Player 2 wins! rock blunts scissors.'],
    ['SCIssors', 'paper', 'Player 1 wins! scissors cut paper.'],
    ['paper', 'scissors', 'Player 2 wins! scissors cut paper.'],
    ['paper', 'rock', 'Player 1 wins! paper covers rock.'],
    ['rock', 'paper', 'Player 2 wins! paper covers rock.'],
    ['mega shark', 'giant octopus', 'Please pick from: rock, paper, scissors'],
    ['rock', undefined, 'Please pick from: rock, paper, scissors']
  ])(
    'should return the correct output for %s vs %s',
    (player1, player2, expected) => {
      expect(rockPaperScissors(player1, player2)).toBe(expected);
    }
  )
});

describe('lizardSpock', () => {
  it('should exist', () => {
    expect(lizardSpock).toBeTruthy();
  });

  it.each([
    ['rock', 'rock', 'Draw!'],
    ['Rock', 'ROCK', 'Draw!'],
    ['rock', 'scissors', 'Player 1 wins! rock blunts scissors.'],
    ['scissors', 'rock', 'Player 2 wins! rock blunts scissors.'],
    ['SCIssors', 'paper', 'Player 1 wins! scissors cut paper.'],
    ['paper', 'scissors', 'Player 2 wins! scissors cut paper.'],
    ['paper', 'rock', 'Player 1 wins! paper covers rock.'],
    ['rock', 'paper', 'Player 2 wins! paper covers rock.'],
    ['spock', 'rock', 'Player 1 wins! spock vaporizes rock.'],
    ['rock', 'spock', 'Player 2 wins! spock vaporizes rock.'],
    ['spock', 'lizard', 'Player 2 wins! lizard poisons spock.'],
    ['lizard', 'spock', 'Player 1 wins! lizard poisons spock.'],
    ['scissors', 'lizard', 'Player 1 wins! scissors decapitates lizard.'],
    ['lizard', 'scissors', 'Player 2 wins! scissors decapitates lizard.'],
    ['mega shark', 'giant octopus', 'Please pick from: rock, paper, scissors, lizard, spock'],
    ['rock', undefined, 'Please pick from: rock, paper, scissors, lizard, spock']
  ])(
    'should return the correct output for %s vs %s',
    (player1, player2, expected) => {
      expect(lizardSpock(player1, player2)).toBe(expected);
    }
  )
});
