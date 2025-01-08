var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

var MarkBMI1=(massMark1)/(heightMark1*heightMark1)
var JohnBMI1=(massJohn1)/(heightJohn1*heightJohn1)
var MarkBMI2=(massMark2)/(heightMark2*heightMark2)
var JohnBMI2=(massJohn2)/(heightJohn2*heightJohn2)

console.log("MarkBMI1 is" + MarkBMI1);
console.log("MarkBMI2 is" + MarkBMI2);
console.log("JohnBMI1 is" + JohnBMI1);
console.log("JohnBMI2 is" + JohnBMI2);





// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Data Bonus 2
const dolphinsScore3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Function to calculate average score
const calculateAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

// Calculate average scores
const dolphinsAvg1= calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvg2= calculateAverage(dolphinsScores2);
const koalasAvg2 = calculateAverage(koalasScores2);

const dolphinsAvg3= calculateAverage(dolphinsScores2);
const koalasAvg3 = calculateAverage(koalasScores2);
// Minimum score to win
const minimumScore = 100;

// Compare scores and determine the winner
if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= minimumScore) {
    console.log(`Dolphins1 win with an average score of ${dolphinsAvg1.toFixed(1)}!`);
} else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= minimumScore) {
    console.log(`Koalas1 win with an average score of ${koalasAvg1.toFixed(1)}!`);
} else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= minimumScore && koalasAvg1 >= minimumScore) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg1.toFixed(1)}.`);
} else {
    console.log(`No team wins the trophy as neither meets the minimum score of ${minimumScore}.`);
}

if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= minimumScore) {
    console.log(`Dolphins2 win with an average score of ${dolphinsAvg2.toFixed(1)}!`);
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= minimumScore) {
    console.log(`Koalas2 win with an average score of ${koalasAvg2.toFixed(1)}!`);
} else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= minimumScore && koalasAvg2 >= minimumScore) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg2.toFixed(1)}.`);
} else {
    console.log(`No team wins the trophy as neither meets the minimum score of ${minimumScore}.`);
}

if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 >= minimumScore) {
    console.log(`Dolphins3 win with an average score of ${dolphinsAvg3.toFixed(1)}!`);
} else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 >= minimumScore) {
    console.log(`Koalas3 win with an average score of ${koalasAvg3.toFixed(1)}!`);
} else if (dolphinsAvg3 === koalasAvg3 && dolphinsAvg3 >= minimumScore && koalasAvg >= minimumScore) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg3.toFixed(1)}.`);
} else {
    console.log(`No team wins the trophy as neither meets the minimum score of ${minimumScore}.`);
}