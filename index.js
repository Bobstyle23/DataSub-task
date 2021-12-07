// Create an abstract class “AClass” which will have a property “Numbers” of type Array, which will contain n natural numbers.
//Also, AClass must have a “fill” method that fills the Numbers array with random numbers;
//the “factorial” method, which returns an array of factorials from the Numbers array;
//and the abstract method “sort”.
//The constructor takes one parameter “n” and calls the “fill” method.
//The fill method can only be called from methods of the AClass class.
//The factorial method can be called from the AClass class and from child classes.
//Implement two child classes “Class1” and “Class2” with a method “sort” which sorts the array of Numbers and then produces an array of factorials.
//The sorting algorithm for classes “Class1” and “Class2” must be different.

//Create abstract class called "AClass"
//Create array property in AClass called "Numbers" which contains numbers "n"
//Create method called "fill()" in AClass which will fill "Numbers" with random numbers
//Create method called "factorial" in AClass which returns array of factorials from "Numbers" array

class AClass {
  constructor(numbers, factorials) {
    this.numbers = [numbers];
    this.factorials = [factorials];
    // if (this.constructor === AClass) {
    //   throw new Error("Instance of Abstract class cannot be instantiated");
    // }
  }
  fill() {
    let randoms = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10 + 1)
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
    for (let i = 0; i < this.numbers.length; i++) {
      this.factorials.push(this.getFactorial(this.numbers[i]));
    }
    return this.factorials;
  }

  sort() {
    throw new Error("Abstract method has no implementation");
  }

  get filled() {
    return this.fill();
  }
  get values() {
    return this.factorial();
  }
}

const inst = new AClass();

console.log(inst.filled);
console.log(inst.values);
