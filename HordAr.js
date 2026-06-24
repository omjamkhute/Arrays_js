const info = ["hello","oj","boss"];

function print(n){
    console.log(n);
}

print(info);
// only for printing purpose
info.forEach(print); // work like for loop // for each doesnt return any thing

// map function 
// it return new array
const num = [1,2,3,4];

function DOUBLE(num){
    return num *2;
};

let newA = num.map(DOUBLE);

console.log(newA);

// find fun

const n1 = [1,2,3,4];

let ans = n1.find( (num) => num ===4 );
let ans1 = n1.includes(3);
console.log(ans1);
console.log(ans);
// slice
let newa = n1.slice(1,3);
console.log(newa);

// splice remove element in place
let a = [1,2,3,4,5];
console.log(a,+" as it is");
let newA1 = a.splice(1,3);
console.log(a +" original array after splice ");
console.log(newA1+" splice element");