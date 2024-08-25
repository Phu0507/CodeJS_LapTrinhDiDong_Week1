// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

const dolphinsScore = [96, 108, 89]
const koalasScore = [88, 91, 110]

// 1. Calculate the average score for each team, using the test data below
const avgDolphinsScore = dolphinsScore.reduce((total, currentValue) => {
    return total + currentValue;
}) / dolphinsScore.length;

console.log('Trung binh diem cua team dolphins: ', avgDolphinsScore)

const avgKoalasScore = koalasScore.reduce((total, currentValue) => {
    return total + currentValue;
}) / koalasScore.length;

console.log('Trung binh diem cua team koalas: ', avgKoalasScore)