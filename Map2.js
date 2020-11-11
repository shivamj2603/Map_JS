var myMap = new Map();
var myMap2 = new Map();
//Inititalize myMap2 which keeps track of people having birthdays in given month
for (var i = 0; i < 12; i++) {
    myMap2.set(i, new Array());
}
start = new Date(92, 0, 1);
end = new Date(93, 11, 31);
//Set a random date between 92 and 93 for 50 people
for (var i = 0; i < 50; i++) {
    myMap.set(i + 1, randomDate(start, end));
}
//Display the birth dates of people
console.log(myMap);
//Add person to myMap2 corresponding to particular month
for (var i = 0; i < 12; i++) {
    var prev = myMap2.get(i);
    for (let [key, value] of myMap) {
        if (value.getMonth() == i) {
            prev.push(key);
        }
    }
    myMap2.set(i, prev);
}
//Generate random date
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
//Display the month and people having birthdays in that month
console.log(myMap2);
