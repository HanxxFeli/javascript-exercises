const reverseString = function(input) {
    // add to a string
    let output = "";

    // split the string 
    let letters = input.split("");
    
    // return added string
    for (let i = letters.length-1; i >= 0; i--) { 
        output += letters[i];
    }

    return output
};

console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
