const str = 'supercalifragilisticexpialidocious';
// const str = 'CLEeZscrCIzuQJarWLcTyOhRcjMzv';

const vowelIndices = (word) => {
    if (word.length === 0) {
        return [];
    }

    const vowels = [ 'a', 'e', 'i', 'o', 'u', 'y' ];
    const letters = word.split('');
    
    const result = letters.reduce((acc, letter, index) => {
        if (vowels.includes(letter.toLowerCase())) {
            return [...acc, index + 1];
        }
        return acc;
    }, []);

    return result;
}

console.log(vowelIndices(str));
console.log('expexted', [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33])


// We want to know the index of the vowels in a given word, for example, 
// there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)