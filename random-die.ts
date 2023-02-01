// This class implements the RandomDie GraphQL type
export default class RandomDie {
  numSides: number;

  constructor(numSides = 6) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({numRolls = 1}) {
    const output: number[] = [];
    for (let i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}