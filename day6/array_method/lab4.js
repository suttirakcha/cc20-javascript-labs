const cars = ['volvo', 'toyota', 'honda', 'ford'];
cars.splice(3, 0, 'mazda', 'bmw', 'nissan');

console.log(cars) // Expected value: ['volvo', 'toyota', 'honda', 'mazda', 'bmw', 'nissan', 'ford']