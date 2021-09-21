document.getElementById('equal').addEventListener('click', function(e) {
    let firstValue = document.getElementById('firstValue').value;
    firstValue = parseInt(firstValue);
    let secondValue = document.getElementById('secondValue').value;
    secondValue = parseInt(secondValue);
    let operand = document.getElementById('operand').value;
    let result = '';
    switch (operand) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        default:
            result = 'Invalid operator';
    }
    console.log(result);

    document.getElementById('result').innerHTML = result;
});