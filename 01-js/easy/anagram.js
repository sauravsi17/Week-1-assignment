/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2){
    // if (str1.length != str2.length){
    //     return false
    // }
    var arr1 = str1.split("")
    var arr2 = str2.split("")
   
    arr1 = arr1.sort()
    arr2 = arr2.sort()

    if (arr1.toString() === arr2.toString()){
        return true
    }else {
        return false
    }
 
}

module.exports = isAnagram;
