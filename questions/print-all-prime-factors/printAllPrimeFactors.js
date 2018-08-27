/**
 * 
 * 
* Every composite number has at least one prime factor less than or equal to square root of itself.

  This property can be proved using counter statement. Let a and b be two factors of n such that a*b = n. If both are greater than √n, then a.b > √n, * √n, which contradicts the expression “a * b = n”.
 * @param {*} num 
 */
const printAllPrimeFactors = (num) => {
  let n = num
  let primeFactors = []
  while (n % 2 === 0) {
    primeFactors.push(2)
    n /= 2
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      primeFactors.push(i)
      n /= i
    }
  }

  if (n > 2) {
    primeFactors.push(n)
  }
  console.log(primeFactors)
}

printAllPrimeFactors(100)
