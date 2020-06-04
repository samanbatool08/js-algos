// write function that calculates the sum of all numbers from 1 upto (and including) some number n. 

function appUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}


//time
let t1 = performance.now();
addUpToNew(1000000000);
let t2 = performance.now();
console.log(`Time ElapsedL ${(t2 - t1) / 1000 }`)

// same output but without loop
// different way
function addUpToNew(n) {
    return n * (n + 1) / 2;
}


// write function that counts up and down of given number
// bigO(n)
function countUpAndDown(n) {
    console.log('Going up!')
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the tope!\nGoing down...');
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log('Back down. Bye!')
}