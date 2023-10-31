let num1 = [1,2,3,4,5,6,7,8]
let tot = 0

/* for (let val of num1){
    console.log(val)
} */

num1.forEach(function(val,ind) {
    console.log(val, ind)
    tot += val
})

console.log(tot)