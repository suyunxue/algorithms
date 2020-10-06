/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var hashMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    var output = [];

    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            output.push(combination);
        } else {
            var digist = nextDigits.slice(0, 1);
            var letter = hashMap[digist];
            for (var i = 0; i < letter.length; i++) {
                backtrack(combination + letter[i], nextDigits.slice(1));
            }
        }
    }

    if (digits.length) {
        backtrack('', digits);
    }

    return output;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var combinations = [];
    if (digits.length === 0) {
        return combinations;
    }

    var phoneMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    backtrack(combinations, phoneMap, digits, 0, '');

    return combinations;
};

function backtrack(combinations, phoneMap, digits, index, combination) {
    if (index === digits.length) {
        combinations.push(combination);
    }
    else {
        let digit = digits[index];
        let letters = phoneMap[digit];
        let lettersCount = letters.length;
        for (let i = 0; i < lettersCount; i++) {
            combination += letters[i];
            backtrack(combinations, phoneMap, digits, index + 1, combination);
            combination = combination.split('')
            combination.splice(index, 1);
            combination = combination.join('');
        }
    }
}



let res = letterCombinations("");
console.log(res)