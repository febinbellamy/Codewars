/* 
7 kyu

Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}

Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

function naughtyOrNice(data) {
  let niceCount = 0;
  let naughtyCount = 0;
  for (let currentMonth in data) {
    let monthData = data[currentMonth];
    for (let day in monthData) {
      let naughtyOrNice = monthData[day];
      if (naughtyOrNice === "Naughty") {
        naughtyCount++;
      } else if (naughtyOrNice === "Nice") {
        niceCount++;
      }
    }
  }
  if (niceCount >= naughtyCount) {
    return "Nice!";
  } else if (niceCount < naughtyCount) {
    return "Naughty!";
  }
}
