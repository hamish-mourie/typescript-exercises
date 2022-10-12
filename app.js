function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase, result);
    }
}
var number1 = 5;
var number2 = 2.8;
var showResult = true;
var resultPhrase = 'The result is:';
add(number1, number2, showResult, resultPhrase);
