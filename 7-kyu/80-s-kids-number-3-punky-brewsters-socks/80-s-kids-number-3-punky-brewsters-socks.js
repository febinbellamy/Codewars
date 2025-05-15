function getSocks(name, socks) {
  // Help them find their socks!
  if (name === "Punky") {
    const uniques = Array.from(new Set(socks));
    return uniques.length >= 2 ? uniques.slice(0, 2) : [];
  } 
  const obj = {};
  for(let sock of socks) {
    if (obj.hasOwnProperty(sock)) {
      obj[sock]++;
      if (obj[sock] === 2) return [sock, sock]
    } else {
      obj[sock] = 1;
    }
  }
  return [];
}