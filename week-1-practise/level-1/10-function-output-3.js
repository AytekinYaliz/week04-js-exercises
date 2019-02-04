function concatenate(firstWord, secondWord, thirdWord) {
    let x = firstWord.concat(secondWord);
    return x.concat(thirdWord);
    // Write the body of this function to concatenate three words together
}

var result = concatenate('code', 'your', 'future');
console.log(result); // expected result = "codeyourfuture"