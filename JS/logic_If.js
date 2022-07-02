//Hiểu hơn vê cầu lệnh điều kiện và phép so sánh
/*
    6 giá trị khi convert sáng kiểu bolean cho kết quả false
    0
    ''
    null
    undefined
    Nav
    false
*/ 

var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C' // => lay C => true
var result = 'A' && NaN && 'C' // => lay NaN => false

// Toán tử || thì ngược lại, lấy từ phần tử đầu

// if (result) {
//     console.log('DIEU KIEN DUNG');
// } else {
//     console.log('DIEU KIEN SAI');
// }

