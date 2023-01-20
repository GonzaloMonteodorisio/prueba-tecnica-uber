function getFare(costPerMinute, rideTime, costPerMile, rideDistance) {
  return costPerMinute.map((el, index) => el * rideTime + costPerMile[index] * rideDistance);
}

const rideTime = 30,
  rideDistance = 7,
  costPerMinute = [0.2, 0.35, 0.4, 0.45],
  costPerMile = [1.1, 1.0, 2.3, 3.5];

const result = getFare(costPerMinute, rideTime, costPerMile, rideDistance);

console.info('result: ', result);

