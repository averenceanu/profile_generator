const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerStorage = {
  name: '', 
  activity: '',
  music: '',
  meal:'',
  sport: '', 
  superpower: '',

}; 

const profileGenerator = (responses) => {
 console.log(`${responses.name} loves listening to ${responses.music} while ${responses.activity}, devouring ${responses.meal}, prefers ${responses.sport} over any other sport, and is amazing at ${responses.superpower}.`);
};

const questionaire = () => {
  rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
    answerStorage.name = answer;
      rl.question('What is an activity you like doing? ', (answer) => {
        answerStorage.activity  = answer;
          rl.question('What do you listen to while doing that? ', (answer) => {
            answerStorage.music  = answer;
              rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)? ', (answer) => {
                answerStorage.meal  = answer;
                  rl.question('Which sport is your absolute favourite? ', (answer) => {
                    answerStorage.sport  = answer;
                      rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                        answerStorage.superpower  = answer;
                        rl.close()
                        profileGenerator(answerStorage);
                      });
                  });
              });
          });
      });
    });
  }
  
  
 questionaire(); 
// rl.question('What do you think of Node.js? Two', (answer) => {
//   answerStorage.secondOpinion = `Thank you for your valuable feedback: ${answer}`;

//   rl.close();
// });