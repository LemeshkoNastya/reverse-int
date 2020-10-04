module.exports = function reverse (n) {
    let answer = String(n).split('').reverse().join('');
    return parseInt(answer);
}
