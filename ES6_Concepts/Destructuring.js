//DESTRUCTURING OBJ
const myObj={
    name:"far",
    age:22,
    sex:"F"
}

const {age}=myObj;
console.log(age);

//DESTRUCTURING ARR
const arr=[1,2,3];

const [a,b,c, d=4]=arr;
console.log(d)
console.log(arr)
