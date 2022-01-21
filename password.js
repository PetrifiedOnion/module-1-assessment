reader.question("Please enter your password", function(input){
    function getCharacterLength (input) {
        return [...input].length;
    }if (let i = input.length >= 10)
        console.log('Your password is acceptable.){
}  else(let i = input.length < 10)
    console.log ("Your password is too short.")

}

// reader.close()

// });

// function getCharacterLength (input) {
//     // The string iterator that is used here iterates over characters,
//     //  not mere code units
//     return [...str].length;
//   }
  
//   console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3
  
//   // While not recommended, you could add this to each string as follows:
  
//   Object.defineProperty(String.prototype, 'charLength', {
//     get () {
//       return getCharacterLength(this);
//     }
//   });
  
//   console.log('A\uD87E\uDC04Z'.charLength)}; // 