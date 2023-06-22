const prompt = require('prompt-sync')();

class CompoundFraction {
  constructor(numer, deno, wholeno) {
    this.numer = numer;
    this.deno = deno;
    this.wholeno = wholeno;
    this.total = wholeno * numer / deno;
  }

  get_total() {
    return this.total;
  }
}

class NFractionSum {
  constructor(n, numer, deno, wholeno) {
    this.n = n;
    this.numer = numer;
    this.deno = deno;
    this.wholeno = wholeno;
  }

  calculatesum() {
    let sum = this.wholeno;
    for (let i = 1; i <= this.n; i++) {
      let fraction = this.wholeno + i / this.deno;
      sum += fraction;
    }
    return sum;
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function inputcompoundfraction() {
  let numer = parseFloat(prompt("Enter the numerator: "));
  let deno = parseFloat(prompt("Enter the denominator: "));
  let wholeno = parseFloat(prompt("Enter the whole: "));
  let divisor = gcd(numer, deno);
  numer /= divisor;
  deno /= divisor;
  return new CompoundFraction(numer, deno, wholeno);
}

function inputnfractionsum() {
  let n = parseInt(prompt("Enter the value of n: "));
  let numer = parseFloat(prompt("Enter the numerator: "));
  let deno = parseFloat(prompt("Enter the denominator: "));
  let wholeno = parseFloat(prompt("Enter the whole: "));
  let divisor = gcd(numer, deno);
  numer /= divisor;
  deno /= divisor;
  return new NFractionSum(n, numer, deno, wholeno);
}

function main() {
  let compoundfraction = inputcompoundfraction();
  let total = compoundfraction.get_total();
  console.log("Total of the compound fraction: ", total);

  let nfractionsum = inputnfractionsum();
  let fractionsum = nfractionsum.calculatesum();
  console.log("Sum of the first " + nfractionsum.n + " component fraction numbers: " + fractionsum);
}

main();
