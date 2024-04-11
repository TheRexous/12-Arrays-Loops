const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

let fruit = ['apples', 'oranges', 'grapes', 'blueberries'];
fruit.push('bananas');
fruit.splice(1, 3);
console.log(fruit);
console.log(fruit.length);

let i = 1;

while (i <= 5) {
    console.log(i);
    // i = i + 1;
    i++
}
let randomNumber = 0;

while (randomNumber < 0.5) {
    randomNumber = Math.random();
}
console.log(randomNumber);

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

const todoList = [
    'make dinner',
    'wash dishes',
    'watch Netflix'
];

for (let i = 0; i <= todoList.length - 1; i++) {
    const value = todoList[i]
    console.log(value);
}

const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}

console.log(total);

for (let i = 0; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
    if (i === 8) {
        break;
    }
}

while (i < 10) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++
}

const nums = [1, 1, 3];

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}

console.log(numsDoubled);