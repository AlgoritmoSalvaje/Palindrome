console.log("Hello World");

function createPalindrome(originalWord) {
    let definitiveWord = originalWord; // It keeps the same variable without cloning it because a string is immutable.
    console.log("definitiveWordlength", definitiveWord.length);

    for (let i = originalWord.length - 2; i >= 0; i--) { 
        console.log("originalWord[i]", originalWord[i]);
        definitiveWord += originalWord[i]; // Adds the characters in reverse order
    }

    return definitiveWord;
}

console.log(createPalindrome("ono"));  // Result: "onono"
console.log(createPalindrome("abc"));  // Result: "abccba"
console.log(createPalindrome("race")); // Result: "racecar"

function createOptimizedPalindrome(originalWord) {
    let chars = [originalWord]; // Start with the original word
    
    for (let i = originalWord.length - 2; i >= 0; i--) { 
        chars.push(originalWord[i]); // Add characters in reverse order
    }
    
    return chars.join(''); // Join all characters at the end for efficiency
}

// Example usage
console.log(createOptimizedPalindrome("race")); // Output: "racecar"
