const students=[
    {
        roll:1,
        name:"far",
        age:22,
        div:"a"
    },
    {
        roll:2,
        name:"ay",
        age: 15,
        div:"b"
    },{
        roll:3,
        name:"fati",
        age: 12,
        div:"c"
    },
    {
        roll:4,
        name:"zeba",
        age: 55,
        div:"c"
    }
]
//MAP FUNCTION
// 1. map() loops through every element in the array, 2. runs the callback for each element, and 3. returns a new array with the values you return from the callback.
// It does not change the original array
// The new array is always the same length as the original
// map() transforms each element and gives you a new array.

// console.log(students.map((stud,index)=>{
//     console.log(index, stud);

//     return stud.name;
// }))

//FIND FUNCTION
// Loops through each student (stud)
// Prints index and the stud object for each iteration
// Returns the first student where div === "c" and stops immediately
// So after finding the first match, it exits early

// console.log(students.find((stud,index)=>{
//     console.log(index,stud);
    
//     return stud.div==="c";
// }))


//FILTER FUNCTION
// Loops through every student
// Prints index and the stud object for each iteration
// Returns a new array containing all students where div === "c"
// Does not stop early — goes through entire array

// console.log(students.filter((stud,index)=>{
//     console.log(index,stud);
    
//     return stud.div==="c";
// }))

//SOME FUNCTION
//Returns boolean val if cond is met or no
// Loops through each item in the array.
// For each item, runs your callback: stud.age < 21
// If it finds even one item that returns true, it stops immediately and returns true.
// If none match, it returns false after checking all.

// console.log(students.some((stud,index)=>{
//     console.log(index, stud);

//     return stud.age<22
// }))

//EVERY FUNCTION
//Returns boolean val if all entries meet the cond
// Iterates over every element in the students array.
// For each student, it checks: stud.age > 18
// If all students pass the condition, it returns true.
// If any one student fails, it immediately returns false and stops checking further.

console.log(students.every((stud,index)=>{
    console.log(index, stud);

    return stud.age>18
}))
