class Calculator {
  constructor(number = 0){
    this.value = number;
  }
  add(number){
    this.value += number;
    return this;
  }
  subtract(number){
    this.value -= number;
    return this;
  }
  multiply(number){
    this.value *= number;
    return this;
  }
  divide(number){
    if (number !== 0){
      this.value /= number;
    } else {
      console.log("Cannot divide by zero!");
    }
    return this;
  }
  show(){
    console.log(this.value);
    return this;
  }
}

const value = new Calculator();

value.add(18).show().divide(3).subtract(4).show();