"User Strict"

function reverseString (message){
    let result = message.split('');
    let reveresArray = result.reverse();
    let joinArray = reveresArray.join();
    return joinArray
    

}




let testReverse = reverseString ("Hello");  
console.log(testReverse);

