const pow = (base, exponent=2) => {
    if (exponent === 0) return 1;

    return base * pow(base, exponent - 1);
}

console.log(pow(3, 2));
