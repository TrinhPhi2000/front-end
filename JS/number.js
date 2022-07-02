/*
key: JavaScript number methods

1. Tạo giá trị cho number
    - Các cách tạo
    - Dùng cách nào 
    - Kiểm tra data type
2. Làm việc với Number
    - To String
    - To Fixed
*/
//cách 1 -> sử dụng cách này
var age = 18;
var Pi = 3.1442323;

//cách 2 -> vì từ khóa new tạo đối tượng
var number = new Number(9);

var result = 20 / 'AB';
// kiem tra so co hop le hay k
//console.log(isNaN(result));

//To String:  chuyển từ số sang chuổi
//console.log(age.toString());

//To Fixed: làm tròn số lẻ 
//console.log(Pi.toFixed());
//console.log(Pi.toFixed(2)); //-> làm tròn từ số thập phân thứ 2