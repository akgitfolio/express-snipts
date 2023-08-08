const result = await vegeta.attack(target, scenario, {
  duration: 10,
  rate: 10,
  keepAlive: true,
});

console.log(result);
