/* 
7 kyu

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  // Insert your brilliant code here

  const splitStr = name.split(" ");
  if (splitStr.length <= 2) return name;

  for (let i = 0; i < splitStr.length; i++) {
    if (i !== 0 && i !== splitStr.length - 1) {
      splitStr[i] = `${splitStr[i][0]}.`;
    }
  }
  return splitStr.join(" ");
}
