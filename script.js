var readline = require("readline-sync");
var username = readline.question("what is your name")
var score = 0
console.log("welcome to anusha's quiz")
console.log("welcome" + username)

function check(question, answer, options) {
    console.log(question)
    for (var i = 0; i < options.length; i++) {
        console.log(i + 1, options[i])
    }
    var useranswer = readline.questionInt("select your options:")
    if (useranswer === currentquestion.answer) {
        console.log("you are right")
        score++
    } else {
        console.log("you are wrong")
    }
    console.log(" your currentscore " + score)
    console.log("________")
}

var questionBank = [{
        question: "which is anusha's favourite color ?",
        options: ["sky blue", "pink", "white", "green"],
        answer: 1

    },
    {
        question: "what is anusha's  favourite car?",
        options: ["subaru", "BMW", "GMC", "Honda"],
        answer: 2
    },
    {
        question: "what is anusha's favourite food?",
        options: ["chicken", "spinach", "bitter gourd", "lady's finger"],
        answer: 1

    }, {
        question: "what is anusha's favourite  subject?",
        options: ["science", "zoology", "mathematics", "telugu"],
        answer: 3
    },
    {
        question: "who is anusha's favourite place ?",
        options: ["goa", "mumbai", "banagalore", "hyderabad"],
        answer: 4

    }
]
for (var i = 0; i < questionBank.length; i++) {
    var currentquestion = questionBank[i]
    check(currentquestion.question, currentquestion.answer, currentquestion.options)

}
var scorebank = [{
    name: "anusha",
    score: 2
}, {
    name: "pooja",
    score: 3

}]
console.log("boom!,if your get  high score send me a screenshot tell me i will update")


for (var i = 0; i < scorebank.length; i++) {
    console.log(scorebank[i].name, scorebank[i].score)
}