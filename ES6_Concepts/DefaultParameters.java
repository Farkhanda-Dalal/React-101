function mult(n1=2, n2=5){
    return n1*n2;
}

console.log(`No params passed= ${mult()}`) //2*5
console.log(`1st param passed= ${mult(10)}`) //10*5
console.log(`2nd param passed= ${mult(undefined,10)}`) //2*10
console.log(`Both params passed= ${mult(10,10)}`) //10*10
