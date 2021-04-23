function Permutations(string) {

    if (string.length === 1) return string;

    const permutationsArr = [];

    // Iterate through the string
    [...string].forEach((character, index) => {

        // Remove 'character' from string
        let remString = string.substring(0, index) + string.substring(index + 1, string.length);
        let shuffleString = remString;

        // Iterate 'remString' shuffling the characters
        do {
            const permutation = character + shuffleString;

            !permutationsArr.includes(permutation) && permutationsArr.push(permutation);

            const permutationArr = [...shuffleString];
            const lastElement = permutationArr.pop();
            permutationArr.unshift(lastElement);

            shuffleString = permutationArr.join('');

        } while (shuffleString !== remString);
    });

    return permutationsArr;
}

console.log(Permutations("abc"));