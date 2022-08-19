// Bài 05
/**
 * Sơ đồ 3 khối
 * Input: Nhập vào 1 số có 2 chữ số: var number = 83
 *
 * Process:
 *  1. Nhập vào 1 số có 2 chữ số: var number = 83
 *  2. Tách 2 kí số
 *     number1 = number % 10
 *     number2 = Math.floor(number / 10)
 *  3. Tổng 2 ký số của số vừa nhập: var result = number1 + number2
 * console.log("Tổng 2 kí số là:", result);
 *
 * Output: Tính tổng 2 ký số của số vừa nhập: var result = number1 + number2
 */
var number = 83;
var number1 = number % 10;
var number2 = Math.floor(number / 10);
var result = number1 + number2;
console.log("Tổng 2 kí số là:", result);
