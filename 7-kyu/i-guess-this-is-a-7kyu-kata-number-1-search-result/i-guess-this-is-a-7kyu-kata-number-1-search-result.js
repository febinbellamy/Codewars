function finalResult(keywords,searchResult){
  //coding here...
  const result = [];
  for (let i = 0; i < searchResult.length; i++) {
    let currentResult = searchResult[i];
    let count = 0;
    for(let i = 0; i < keywords.length; i++) {
      if (currentResult.indexOf(keywords[i]) >= 0) count++;
    }
    if (count === keywords.length) {
      result.push(currentResult);
    }
  }
  return result;
}
​