const reverseString = function (input) {
    return input.split('').reverse().join('');
}

const replaceString = function (input, regexp, replaceWithMe) {
    return input.replace(regexp, replaceWithMe);
}

// destructured export 
module.exports = { reverseString, replaceString } ;
