function premierLeagueStandings(teamStandings) {
  // Insert Code here
  const result = { 1: teamStandings[1] };
  delete teamStandings[1];
  Object.values(teamStandings).sort().forEach((team, idx) => result[idx + 2] = team);
  return result;
}