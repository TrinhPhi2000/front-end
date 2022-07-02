/*
CHUỖI TRONG JS
1. Tạo chuổi
    - Các cách tạo chuổi
    - Nên dụng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuổi
4. Chú ý dộ dài khi viết code
5. Template string ES6
*/

/*
    LÀM VIỆC VỚI CHUỔI
    // keyword JS String methods
1. Length
2. Find index
3. Cut string
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim
8. Split
9. Get a character by index
*/



// Tạo chuổi
var fullName = 'Trinh Phi'; // dùng cách này
var fullName1 = new String('Trinh Phi'); // kiểu dữ tạo ra nó thành object

// backslash in js
var fullNam3 = 'Trinh Phi la \'Sieu nhan\'';

//Xem độ dài chuổi
//console.log(fullNam3.length);

// Template String ES6
var firstName = 'Phi';
var lastName = "Trinh";

// console.log('Toi la: '+ firstName + ' ' + lastName); // cách thông thường
// console.log(`Toi la: ${firstName} ${lastName}`); // cách mới ES6


// 1. Length
var myString = 'Trinh Phi P'; //console.log(myString.length);

// 2. Find index
//console.log(myString.indexOf('P')); //    kq =  6 , nếu = -1 là không tìm thấy
//console.log(myString.indexOf('P', 7)) // bắt đầu tìm từ vị trí thứ 7
//console.log(myString.lastIndexOf('P')); // tìm kí tự P ở vị trí cuối cùng

//onsole.log(myString.search('P')); // không truyền đc tham số vị trí

// 3. Cut string
//console.log(myString.slice(4,6)); // ->h lấy từ vị trí 4-6 từ phải sang trái
//console.log(myString.slice(-4,-3)); // ->h đếm từ phải sang

//4.Replace ghi đè
//console.log(myString.replace('P','Phi')); //-> thay thế P thành Phi
//console.log(myString.replace(/P/g,'Phi')); // tìm tất cả chứ cái P trong chuổi để thay

//5. Convert to upper case -> chuyển đổi chuổi thành chữ hoa
//console.log(myString.toUpperCase());


//6. Convert to lower case -> chuyển đổi chuổi thành chữ thường
//console.log(myString.toLowerCase());

//7.Trim -> loại bỏ khoản trắng của chuổi
//console.log(myString.trim());

//8. Split -> dựa vào điểm chung cắt một chuổi thành 1 array
var languages = 'Javascript, PHP, Ruby';
//console.log(languages.split(', ')); // tìm điểm chung để cắt , cách
var languages = 'Javascript';
//console.log(languages.split('')); // coi chuổi rổng thành điểm chung cắt ra thành từng chử cái


//9.  Get a character by index -> lấy ký tự bởi một index cho trước
const myString2 = 'Trinh Phi';
//console.log(myString2.charAt(2)) // lấy kí tự ở vị trí số 2
//cách 2
//console.log(myString2[2]);