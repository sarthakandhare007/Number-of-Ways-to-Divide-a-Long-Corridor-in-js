var numberOfWays = function (corridor) {
  const MOD = 1e9 + 7;
  let seats = 0;
  let ways = 1;
  let plantsBetween = 0;
  let counting = false;

  for (let ch of corridor) {
    if (ch === 'S') {
      seats++;

      // If this is the 3rd seat of a new group
      if (seats % 2 === 1 && seats > 1) {
        ways = (ways * (plantsBetween + 1)) % MOD;
        plantsBetween = 0;
      }

      counting = seats % 2 === 0;
    } else if (ch === 'P' && counting) {
      plantsBetween++;
    }
  }

  return seats > 0 && seats % 2 === 0 ? ways : 0;
};
