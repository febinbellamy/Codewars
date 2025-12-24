function kataStatus(betaKata){
  if (betaKata.issue > 0) {
    return "Beta Status:Waiting for issues to be resolved";
  }
  if (betaKata.vote.length < 5) {
    return "Beta Status:Testing & feedback needed";
  }
  if (betaKata.rank.length < 8) {
    return "Beta Status:Ranking feedback needed";
  }
  if (!betaKata.example) {
    if (!betaKata.random) return "Beta Status:Example and random testcases needed";
    return "Beta Status:Example testcases needed"
  }
  if (!betaKata.random) {
    return "Beta Status:Random testcases needed"
  }
  const sumOfScores = betaKata.vote.reduce((a,c) => a+c,0);
  const rank = Math.round(betaKata.rank.reduce((a,c) => a+c,0)/betaKata.rank.length);
  return `Kata approved. vote scores:${sumOfScores}, rank:${rank}kyu`
}
​