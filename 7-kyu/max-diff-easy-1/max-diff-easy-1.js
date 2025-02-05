function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
};