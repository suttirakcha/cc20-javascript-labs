// LAB - 20 : Find the prime number

const isPrimeNumber = (num) => {
  if (num < 2) return false;

  let isPrime = true;

  for (let i = 2; i < num; i++){
    if (num % i === 0){
      isPrime = false;
      break;
    }
  }

  return isPrime
}

const checkPrimeNumber = (num) => {
  for (let i = 0; i < num; i++){
    if (isPrimeNumber(i)) console.log(i);
  }
}

checkPrimeNumber(25)