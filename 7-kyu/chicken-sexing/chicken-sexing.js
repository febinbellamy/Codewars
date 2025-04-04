function correctness(bobsDecisions, expertDecisions) {
  let points = 0;
  for(let i = 0; i < bobsDecisions.length; i++) {
    let currentBobDecision = bobsDecisions[i];
    let currentExpertDecision = expertDecisions[i];
    if (currentBobDecision === currentExpertDecision) {
      points++;
    } else if (currentBobDecision === "?" || currentExpertDecision === "?") {
      points+=0.5;
    }
  }
  return points;
}