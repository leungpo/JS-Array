// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

console.log("type of a: " + typeof(a));
console.log("type of b: " + typeof(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++){
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var result = "123";
function inputx(x){
    switch (x) {
        case 1:
            result = colors.join(" ");
            break;
        case 2:
            result = colors.join("+");
            break;
        case 3:
            result = colors.join();
            break;
        default:
            result = "";
            break;    
    }
    return result;
}

console.log("x = 1: " + inputx(1));
console.log("x = 2: " + inputx(2));
console.log("x = 3: " + inputx(3));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(a,b) {
    return b - a;
}
console.log(a.sort(compare));


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var filter = [];
var no = [];
for (var i = 0; i < a.length; i++){
    if(!filter.includes(a[i])){
        filter.push(a[i]);
        no.push(0);
    }
    no[filter.indexOf(a[i])]++;
        
}
var maxno = 0;
for (var y = 0; y < filter.length; y++){
    if(no[maxno] < no[y]){
        maxno = y;
    }
}
result = filter[maxno];
console.log(result);