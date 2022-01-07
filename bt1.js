// Biến người dùng nhập để xác định phép tính
const operators = prompt ("Enter operator (+, -, *, or /)");

// Biến người dùng nhập 2 số cần tính
let number_1 = prompt ("Enter the first number: ");
let number_2 = prompt ("Enter the second number: ");

// Biến lưu kết quả phép tính
let result;

// Sử dụng switch-case để thực hiện phép tính
switch (operators) {
    case "+":
        result = number_1 + number_2;    
        break;
    case "-":
        result = number_1 - number_2;
        break;
    case "*":
        result = number_1 * number_2;
        break;
    case "/":
        result = number_1 / number_2;
        break;
    default:
        alert ("Wrong Input")
        break;
}

// // Sử dụng if...else để thực hiện phép tính
// if (operators == "+") {
//     result = number_1 + number_2;
// }
// else if (operators == "-") {
//     result = number_1 - number_2;
// }
// else if (operators == "*") {
//     result = number_1 * number_2;
// }
// else if (operators == "/") {
//     result = number_1 / number_2;
// }
// else {
//     alert ("Wrong Input")
// }

// Hiển thị kết quả của phép tính
alert(`${number_1} ${operators} ${number_2} = ${result}`);