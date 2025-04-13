function nbrValidTickets(tickets){
 //TODO : return the numbers of valid ticke number of the list
  let count = 0;
  for (let ticket of tickets) {
    if (ticket.length !== 6) continue;
    if (/[^a-zA-Z]/.test(ticket[0])) continue;
    if (/[^0-9]/.test(ticket[1])) continue;
    if (/[^a-zA-Z]/.test(ticket.slice(2))) continue;
    count++
  }
  return count;
}