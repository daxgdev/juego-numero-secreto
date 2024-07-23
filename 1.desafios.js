const calcImc = (weight, height) => weight / height ** 2
console.log(calcImc(68, 1.65))

const caclFactorial = (n) => {
  let factorial = n
  for (let i = n - 1; i > 1; i--) factorial = factorial * i
  return factorial
}
console.log(caclFactorial(5))

const dollarsToPesos = (dollars) => dollars * 4017.17
console.log(dollarsToPesos(5))

const areaAndPerimeter = (width, height) => {
  return {
    area: width * height,
    perimeter: width * 2 + height * 2
  }
}
console.log(areaAndPerimeter(6, 4))

const areaAndPerimeterCircle = (radius) => {
  const diameter = radius * 2
  return {
    area: (Math.PI * radius ** 2).toFixed(2),
    perimeter: (Math.PI * diameter).toFixed(2)
  }
}
console.log(areaAndPerimeterCircle(3))

const multiply = (n) => {
  for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`)
}
multiply(9)
