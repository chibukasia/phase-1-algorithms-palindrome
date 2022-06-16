function isPalindrome(word) {
  // Write your algorithm here
  const x =word.split('');
  const y = x.reverse().join('');
  if (word === y){
    return true
  }else{
    return false
  }
  //console.log(word===y);
  //loop from front
  // for (let i=0; i >word.length; i++){
  //   x = word[i];
  //   console.log (x);
  // }

  // for (let i= word.length-1; i<word.length; i--){
  //   y = word[1]
  //   console.log(y)
  // }
  // if (y===x){
  //   return `${word} is a palindrome`
  // }
}

isPalindrome('mom')
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
