function crossover(chromosome1, chromosome2, index) {
  const result1 = chromosome1.slice(0, index) + chromosome2.slice(index);
  const result2 = chromosome2.slice(0, index) + chromosome1.slice(index);
  return [result1, result2]
}