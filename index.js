var readLineSync = require('readline-sync');
var chalk = require('chalk');
console.log(chalk.cyanBright("This quiz game is about how much you know about animes ! So let's begin !"));

var score = 0;

var highScores = [{
  name:"saurabh",
  score:5
},
{
  name:"Vaibhav",
  score:3
},
{
  name:"Aishwarya",
  score:2
}
]

var questions = [{
  question:"Zoro character is belongs to which anime ?",
  answer:"Onepiece"
},
{
  question:"What is the name of the protogonist of Naruto anime ?",
  answer:"Naruto"
},
{
  question:"Eren Yeager is belong to which anime ?",
  answer:"Attack on titan"
},
{
  question:"Do you know Killua and Gon ? if yes , which anime they belong to ?",
  answer:"HunterXHunter"
},
{
  question:"Do you Kurisu Makise , what is the name of her lover ? if Not then you are not a true anime fan !",
  answer:"Okabe Rintaro"
}
]

function Play(question,answer)
{
 var useranswer = readLineSync.question(chalk.red(question));
 if(useranswer.toUpperCase() === answer.toUpperCase())
 {
   console.log(chalk.greenBright("Yaayy ! right answer"));
   score = score + 1;
 }
 else
 {
   console.log(chalk.greenBright("Sorry ! Wrong answer"));
 }

 console.log(chalk.yellow("Current Score : "+score));
 console.log(chalk.red("-------"));

}

function recordBroken(current,...highScores)
{
  for(i=0;i<highScores.length;i++)
  {
    if(highScores[i].score < current)
    {
      console.log(chalk.cyanBright("Wooah ! You are scored higher so send your SS to update !"));
    }
    else
    {
      console.log(chalk.cyanBright("Ohhh... Try next time ! Good Luck !"));
    }
  }

}

for(i=0;i<questions.length;i++)
{
  var currques = questions[i];
  Play(currques.question,currques.answer);
}

for(i=0;i<highScores.length;i++)
{
  console.log(chalk.greenBright("---Highest Scores -----"));
  console.log(chalk.yellow(highScores[i].name));
  console.log(chalk.yellow(highScores[i].score));
}

var current = readLineSync.question("Tell us your score");
recordBroken(current,...highScores);
