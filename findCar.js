function fidnCar(l, fares) {
  const cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  const restOfMoney = 20;

  const index = fares.findLastIndex(fare => fare * l <= restOfMoney);


  return cars[index];
}

const l = 30,
  fares = [0.3, 0.5, 0.7, 1, 1.3];

const result = fidnCar(l, fares);

console.info('result: ', result);