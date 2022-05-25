/* letl's start some array codeing challeng   */
//Longest String in an Array

const longestString2 = (arr) => {
  let longest = ""; // Step 0
  arr.forEach((item) => {
    // Step 1
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest; // Step 5
};
