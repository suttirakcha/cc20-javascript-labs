class Sale {
  constructor(name, amount, price){
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
  calcPrice(){
    return this.price * this.amount;
  }
}

class Beverage extends Sale {
  constructor(...args){
    super(...args)
  }
}

const beverage = new Beverage("Pepsi", 3, 19);
console.log(beverage.calcPrice());