// write function that calculates the sum of all numbers from 1 upto (and including) some number n. 

function appUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += 1;
    }
    return total;
}

// same output
// different way
function addUpToNew(n) {
    return n * (n + 1) / 2;
}

