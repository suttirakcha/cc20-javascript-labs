let calculator = {
  read(){
    this.a = +prompt("Enter the first number");
    this.b = +prompt("Enter the second number");
  },
  sum(){
    const val = this.a + this.b;
    return `The sum result: ${val}`
  },
  mul(){
    const val = this.a * this.b;
    return `The multiplied result: ${val}`
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());