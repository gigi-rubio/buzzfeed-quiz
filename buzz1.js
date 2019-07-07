let  readlineSync  =  require('readline-sync');

let a = 0
let b = 0
let c = 0
let choices;
let categories = ["Horror", "Sci-fi", "Psychological Thriller"]


console.log(` Would you star in a Horror, Sci-Fi, or Psychological Thriller film?\n`)


function readiness() {
  choices = ["Yes", "No"];
  console.log(choices)

  getStarted = readlineSync.keyInSelect(choices, 'Want to play a game?🎯');
 if (getStarted === 0) {
   console.log("Excellent. Let's proceed.😈\n");
 }
 else if (getStarted === 1) {
   console.log("Too late. You're trapped.🕳️ 😈⛓️ \n");
 }
 else {
     readiness();
   }
}

function questionOne() {
  console.log(choices)
choices = ["Salt & Vinegar Lays", "FunYuns", "Cool Ranch Doritos"];
getStarted = readlineSync.keyInSelect(choices, "What's your favorite chip?");

 if (getStarted === 0) {
   a += 1
 }
 else if (getStarted === 1) {
   b += 1
 }
 else if (getStarted === 2) {
  c += 1
 }
else {
   questionOne();
 }
}

function questionTwo() {
  console.log("Score", a, b, c)

  choices = ["Alcohol", "Coffee w/ Cream", "Homemade Lemonade"];
    getStarted = readlineSync.keyInSelect(choices, "What's your favorite drink?");
   if (getStarted === 0) {
     a += 1

   }
   else if (getStarted === 1) {
     b += 1

   }
   else if (getStarted === 2) {
    c += 1

   }
  else {
     questionTwo();
   }
  }

function questionThree() {
  console.log("Score", a, b, c)

    choices = ["Navy Blue", "Violet", "Purple"];
      getStarted = readlineSync.keyInSelect(choices, "What's your favorite color?");
     if (getStarted === 0) {
       a += 1

     }
     else if (getStarted === 1) {
       b += 1

     }
     else if (getStarted === 2) {
      c += 1

     }
    else {
       questionThree();
     }
    }

function questionFour() {
  console.log("Score", a, b, c)

      choices = ["Hip-Hop", "Jazz", "Rock"];
        getStarted = readlineSync.keyInSelect(choices, "What's your favorite music genre?");
       if (getStarted === 0) {
         a += 1

       }
       else if (getStarted === 1) {
         b += 1

       }
       else if (getStarted === 2) {
        c += 1

       }
      else {
         questionFour();
       }
      }

function questionFive() {
  console.log("Score", a, b, c)

        choices = ["5", "6", "9"];
          getStarted = readlineSync.keyInSelect(choices, "What's your favorite number?");
         if (getStarted === 0) {
           a += 1

         }
         else if (getStarted === 1) {
           b += 1

         }
         else if (getStarted === 2) {
          c += 1

         }
        else {
           questionFive();
         }
        }

function questionSix() {
  console.log("Score", a, b, c)

          choices = ["Maserati", "Tesla", "Rolls-Royce"];
            getStarted = readlineSync.keyInSelect(choices, "What's your favorite car?");
           if (getStarted === 0) {
             a += 1

           }
           else if (getStarted === 1) {
             b += 1

           }
           else if (getStarted === 2) {
            c += 1

           }
          else {
             questionSix();
           }
          }

          const messageArray = ["Congratulations, you would star in a Horror!", "Congratulations, you would star in a Sci-Fi!", "Congratulations, you would star in a Psychological Thriller!"]


function calculateLove() {
  if (a > b && a > c){
    console.log ("Congratulations, you would star in a Horror!")
  } else if (b > a && b > c){
    console.log("Congratulations, you would star in a Sci-Fi!")
  } else if (c > a && c >b){
    console.log("Congratulations, you would star in a Psychological Thriller!")
  } else if (a === b && a === c && b === c) {
    console.log(
    messageArray[Math.floor(Math.random() * messageArray.length)])
    // console.log(categories[Math.floor(Math.random()*3)])
  } else if (a === c && a>b && c > b){
    console.log(
    messageArray[Math.floor(Math.random() * messageArray.length)])
  }
}

readiness();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
calculateLove()
