function reverseIt(data){
  if (typeof data !== "string" && typeof data !== "number") {
    return data;    
  } 
  return typeof data === "number" ? +String(data).split("").reverse().join("") : data.split("").reverse().join("")
 }
​