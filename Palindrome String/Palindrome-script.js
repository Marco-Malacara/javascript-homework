function checkIfPalindrome(word){
    let userWord = getUserInput('What word would you like to check?');
    return userWord == userWord.split('').reverse().join('');
}

function getUserInput(question){
    return prompt(question);
}

console.log(checkIfPalindrome());
