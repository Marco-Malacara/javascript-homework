'user strict'

// couldn't figure out how to create userprompt to respond with function properly would love feedback!

function letterCompression (letters) {
    let output = '';
    let count = 0;
    for (let i = 0; i < letters.length; i++) {
      count++;
      if (letters[i] != letters[i+1]) {
        output += letters[i] + count;
        count = 0;
      }
    }
    console.log(output);
  }

  letterCompression("aaabbccabcc");
  letterCompression('jjjlllmmmiinnn');
  letterCompression('ffmmnnll');