const mapPopulationFit = (population, fitness) => {
  return population.map((chrom) => {
    return {"chromosome": chrom, "fitness": fitness(chrom) } 
  })
}