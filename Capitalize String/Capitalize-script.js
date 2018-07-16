"user strict"

function runLetterEditor() {
    let userSentence = getUserInput('Lets do this thing!');
    let userInput = userSentence.split(' ');
    for (let i = 0; i < userInput.length; i++) {
      userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1); 
    }
    return userInput.join(' ');
  }

  function getUserInput(input){
      return prompt(input);
  }
  console.log(runLetterEditor());