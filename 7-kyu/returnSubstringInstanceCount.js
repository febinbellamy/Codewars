/* 
7 kyu

Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:
full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice

full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1
*/

function solution(fullText, searchText) {
  let numOfTimesFound = 0;

  for (let i = 0; i < fullText.length; i++) {
    if (searchText === fullText.slice(i, i + searchText.length)) {
      numOfTimesFound += 1;
      if (searchText.length > 1) i += searchText.length;
    }
  }

  return numOfTimesFound;
}
