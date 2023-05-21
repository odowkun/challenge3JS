function countCharacters(input) {
    // Inisialisasi variable
    var lowercaseCount = 0;
    var uppercaseCount = 0;
    var characterCount = {};

    //Perulangan perCharacter
    for (let i = 0; i < input.length; i++) {
        let character = input.charAt(i);
        // menentukan character
        if (character === character.toLowerCase()) {
            lowercaseCount++;
        } else if (character === character.toUpperCase()) {
            uppercaseCount++;
        }

        // menentukan jika diawal undefined maka diisi dengan value 1 jika sudah diisi maka ditambah kenaikan 1
        if (characterCount[character] === undefined) {
            characterCount[character] = 1;
        } else {
            characterCount[character]++;
        }
    }

    // menampilkan dari setiap character
    let result = '';
    for (let char in characterCount) {
        if (characterCount.hasOwnProperty(char)) {
            result += char + " = " + characterCount[char] + "\n";
        }
    }

    return result;
}

// call function 
let input = "aaabbccCAAaaC";
console.log("Input: " + "\n" + input + "\n" + "Output: ");
console.log("Lowercase == Uppercase");
let O1 = countCharacters(input.toLowerCase());
console.log(O1);

console.log("Lowercase != Uppercase");
let O2 = countCharacters(input);
console.log(O2);