const isPrimeWithRecursion = (num) => {
    const iter = (i) => {
        if (num < 2) return false;
        if (num === i) return true;

        if (num % i === 0) return false;
        i++;
        return iter(i);
    }
    return iter(2);
}
console.log(isPrimeWithRecurcion(25));

const isPrimeWithLoop = (num) => {
    if (num < 2) return false;
 
    for(let i = 2; i <= num; i++) {
        if (num === i) return true;
        if (num % i === 0) return false;
    }
}

console.log(isPrimeWithLoop(25));
