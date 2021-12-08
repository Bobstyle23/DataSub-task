//The fill method can only be called from methods of the AClass class.

class AClass {
  constructor(numbers, n) {
    this.numbers = [numbers];
    this.fill(n);
    if (this.constructor === AClass) {
      throw new Error("Instance of Abstract class cannot be instantiated");
    }
  }

  fill() {
    let randoms = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    );
    for (let i = 0; i < this.numbers.length; i++) {
      return (this.numbers = randoms);
    }
  }

  getFactorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * this.getFactorial(n - 1);
  }
  factorial() {
    let factorialArr = [];
    for (let i = 0; i < this.numbers.length; i++) {
      factorialArr.push(this.getFactorial(this.numbers[i]));
    }
    return factorialArr;
  }

  sort() {
    throw new Error("Abstract sort method has no implementation");
  }

  static get filled() {
    return this.fill();
  }
  get factorialValues() {
    return this.factorial();
  }
}

class Class1 extends AClass {
  constructor(sort, numbers, sortedNumbers) {
    super(sort, numbers);
    this.sortedNumbers = [sortedNumbers];
  }

  sort() {
    for (let i = 0; i < this.numbers.length; i++) {
      let sortedVal = this.numbers.sort();
      return (this.sortedNumbers = sortedVal);
    }
  }

  get sorted() {
    return this.sort();
  }
}

class Class2 extends AClass {
  constructor(sort, numbers) {
    super(sort, numbers);
  }

  sort() {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 0; i < this.numbers.length; i += 1) {
        if (this.numbers[i - 1] > this.numbers[i]) {
          done = false;
          let temp = this.numbers[i - 1];
          this.numbers[i - 1] = this.numbers[i];
          this.numbers[i] = temp;
        }
      }
    }
    return this.numbers;
  }

  get sortedArr() {
    return this.sort();
  }
}

const child1 = new Class1();
const child2 = new Class2();

// console.log(child1.sorted);
// console.log(child1.factorialValues);
// console.log(child2.sortedArr);
// console.log(child2.factorialValues);
