
const textInput = document.getElementById("text-input");
const resultArea = document.getElementById("result-area");
const errorMessage = document.getElementById("error-message");


function getInput() {

    return textInput.value;
}


function showResult(result) {

    resultArea.innerText = result;
}


function showError(message) {

    errorMessage.innerText = message;
}


function stringLength() {

    let text = getInput();

    showResult("Length: " + text.length);
}


function toUpperCaseText() {

    let text = getInput();

    showResult(text.toUpperCase());
}


function toLowerCaseText() {

    let text = getInput();

    showResult(text.toLowerCase());
}


function firstCharacter() {

    let text = getInput();

    showResult(text.charAt(0));
}


function lastCharacter() {

    let text = getInput();

    showResult(text.charAt(text.length - 1));
}


function containsNumbers() {

    let text = getInput();

    let result = /\d/.test(text);

    showResult(result);
}


function reverseString() {

    let text = getInput();

    let reversed = text.split("").reverse().join("");

    showResult(reversed);
}


function removeWhitespace() {

    let text = getInput();

    showResult(text.trim());
}

function removeAllSpaces() {

    let text = getInput();

    showResult(text.replaceAll(" ", ""));
}


function countVowels() {

    let text = getInput().toLowerCase();

    let count = 0;

    for (let i = 0; i < text.length; i++) {

        if (
            text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u"
        ) {
            count++;
        }
    }

    showResult("Vowels: " + count);
}


function countConsonants() {

    let text = getInput().toLowerCase();

    let count = 0;

    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        if (
            char >= "a" &&
            char <= "z" &&
            char !== "a" &&
            char !== "e" &&
            char !== "i" &&
            char !== "o" &&
            char !== "u"
        ) {
            count++;
        }
    }

    showResult("Consonants: " + count);
}


function wordCount() {

    let text = getInput().trim();

    let words = text.split(" ");

    showResult("Words: " + words.length);
}


function isPalindrome() {

    let text = getInput().toLowerCase();

    let reversed = text.split("").reverse().join("");

    showResult(text === reversed);
}


function isEmailValid() {

    let text = getInput();

    let result =
        text.includes("@") && text.includes(".");

    showResult(result);
}


function hasSpecialCharacters() {

    let text = getInput();

    let result = /[^a-zA-Z0-9 ]/.test(text);

    showResult(result);
}


function isStrongPassword() {

    let text = getInput();

    let result =
        text.length >= 8 &&
        /[A-Z]/.test(text) &&
        /[a-z]/.test(text) &&
        /[0-9]/.test(text);

    showResult(result);
}


function titleCase() {

    let text = getInput().toLowerCase();

    let words = text.split(" ");

    for (let i = 0; i < words.length; i++) {

        words[i] =
            words[i].charAt(0).toUpperCase() +
            words[i].slice(1);
    }

    showResult(words.join(" "));
}


function camelCase() {

    let text = getInput().toLowerCase();

    let words = text.split(" ");

    for (let i = 1; i < words.length; i++) {

        words[i] =
            words[i].charAt(0).toUpperCase() +
            words[i].slice(1);
    }

    showResult(words.join(""));
}

function snakeCase() {

    let text = getInput().toLowerCase();

    showResult(text.replaceAll(" ", "_"));
}


function kebabCase() {

    let text = getInput().toLowerCase();

    showResult(text.replaceAll(" ", "-"));
}


function alternatingCase() {

    let text = getInput();

    let result = "";

    for (let i = 0; i < text.length; i++) {

        if (i % 2 === 0) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }

    showResult(result);
}


function findPosition() {

    let text = getInput();

    let word = prompt("Enter word to find");

    showResult(text.indexOf(word));
}


function replaceFirst() {

    let text = getInput();

    let oldWord = prompt("Enter old word");

    let newWord = prompt("Enter new word");

    showResult(text.replace(oldWord, newWord));
}


function replaceAllWords() {

    let text = getInput();

    let oldWord = prompt("Enter old word");

    let newWord = prompt("Enter new word");

    showResult(text.replaceAll(oldWord, newWord));
}


function extractDomain() {

    let text = getInput();

    let parts = text.split("@");

    showResult(parts[1]);
}

function extractInitials() {

    let text = getInput();

    let words = text.split(" ");

    let initials = "";

    for (let i = 0; i < words.length; i++) {

        initials += words[i].charAt(0).toUpperCase();
    }

    showResult(initials);
}


function truncateString() {

    let text = getInput();

    let length = 10;

    showResult(text.slice(0, length) + "...");
}


function repeatString() {

    let text = getInput();

    showResult(text.repeat(3));
}


function maskString() {

    let text = getInput();

    let result =
        text.slice(0, 3) +
        "****" +
        text.slice(-3);

    showResult(result);
}

function extractNumbers() {

    let text = getInput();

    let numbers = text.match(/\d+/g);

    showResult(numbers);
}


function characterFrequency() {

    let text = getInput();

    let frequency = {};

    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    showResult(JSON.stringify(frequency));
}