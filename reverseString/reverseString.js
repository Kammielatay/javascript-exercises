const reverseString = function(str) {
   let letters = str.split("");
   let reverse = letters.reverse();
   let join = reverse.join("");

   return join;

}

module.exports = reverseString
