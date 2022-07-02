/*
Function JavaScript
1. Hàm
    - Một khối mã
    - Làm 1 việc cụ thể
2. Loại Hàm
    - Built-in
    - Tự dịnh nghĩa
3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
4. Taọ hàm đầu tiên
*/

/*
Tham số hàm - JS
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số?
    - nhiều tham số
2. Truyền tham số
    - 1 tham số 
    - nhiều tham số
3. Arguments?
    - đối tượng argurment
    - gt vòng for
*/

// truyền tham số

/*
function writeLog(mess, mess2) {
    console.log(mess);
    console.log(mess2);
}

writeLog('Test mess1', 'Testt mess2');
*/


function writeLog() {
    var myString = '';
   for(var param of arguments) {
      myString = myString + `${param} -`
   }
   //console.log(myString);
}
// writeLog('1', '2', '3', 5, 6);



// Return trong hàm
function cong(a, b) {
    return a + b;
}
var result = cong(2, 8);
//console.log(result);


// 1. Đặt trùng tên function -> function sau sẽ ghi đè function trước

// 2. Khai báo biến trong hàm
function showMess() {
    var fullName = 'Trinh Phi'; // phạm vị sử dụng chỉ sở trong function
    console.log(fullName);
}
//showMess();


// 3. Lồng hàm trong hàm
function showMess() {
    function showMess2() {
        console.log("Trinh Phi");
    }
    showMess2();
}
//showMess();

/*
Các loại function

1. Declaration function
2. Expression function
3. Arrow function
*/

// 1. Declaration function
// khái niệm hosting đc gọi trước khi định nghĩa
//showMessage();
function showMessage() {
    console.log('Declaration function');
}

// 2. Expression function -> có biến hoặc không, có thể đặt tên hàm hoặc không
var showMessage2 = function testName() {
    console.log('Expression function');
}

setTimeout(function testName() {

})

var myObject = {
    myFunction: function testName() {

    }
}