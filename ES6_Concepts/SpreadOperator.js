//Spread operator for arrays
//Helps in creating new arr using another arr
const arr=[1,2,3];
const newArr=[0, ...arr, 100];

console.log(`New array= ${newArr} was created using values of arr=${arr}`)

console.log([999, ...newArr, ...arr]);

//Spread operator for objs
//Helps in creating new obj using another obj
const myObj={
    name:"Far",
    age:22
}

const newObj={
    roll:1, 
    ...myObj, 
    country:"India"
};
console.log(newObj);
