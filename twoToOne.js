// Solution One
function longestOne(s1, s2) {
  return [...new Set((s1 + s2).toLowerCase().split("").sort())].join("");
}
console.log(longestOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// Solution Two
const longestTwo = (s1, s2) =>
  [...new Set((s1 + s2).toLowerCase())].sort().join("");
console.log(longestTwo("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// Solution Three
function longestThree(s1, s2) {
  let strArr = (s1 + s2).toLowerCase().split("").sort();
  let distinctChars = [];
  for (let char of strArr) {
    if (!distinctChars.includes(char)) {
      distinctChars.push(char);
    }
  }
  return distinctChars.join("");
}
console.log(longestThree("xyabbbccccdefww", "xxxxyyyyabklmopq"));

// Solution Four
function longestFour(s1, s2) {
  if (/^[a-zA-Z]+$/.test(s1) && /^[a-zA-Z]+$/.test(s2)) {
    return [...new Set((s1 + s2).toLowerCase())].sort().join("");
  } else {
    return "Invalid Input: The string may not contain numbers.";
  }
}
console.log(longestFour("xyaabbbccccdefww", "xxxyyyyabklmopq"));

// Solution Five
const longestFive = (s1, s2) =>
  /^[a-zA-Z]+$/.test(s1) && /^[a-zA-Z]+$/.test(s2)
    ? [...new Set((s1 + s2).toLowerCase())].sort().join("")
    : "Invalid Input";
console.log(longestFive("xyaabbbccccdefww", "xxxyyyyabklmopq"));
