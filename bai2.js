const markWeight1 = 78; 
const markHeight1 = 1.75; 
const johnWeight1 = 92; 
const johnHeight1 = 1.95; 
const markBMI1 = markWeight1 / (markHeight1 ** 2);
const johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI1 (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI1 (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1.toFixed(1)})!`);
}

const markWeight2 = 95; 
const markHeight2 = 1.88; 
const johnWeight2 = 85; 
const johnHeight2 = 1.76; 
const markBMI2 = markWeight2 / (markHeight2 ** 2);
const johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI2 (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI2 (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2.toFixed(1)})!`);
}