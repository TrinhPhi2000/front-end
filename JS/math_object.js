/*
Math object Method
    - Math.PI --> giá trị của pi
    - Math.round --> làm tròn số
    - Math.abs --> giá trị tuyệt đối của số
    - Math.ceil --> chỉ làm tròn trên 4.1 -> 5
    - Math.floor --> chỉ làm tròn dưới 5.6 -> 5
    - Math.random() --> để tặt tên ngẫu nhiên, tạo dãy số ngẫu nhiên
    - Math.min() --> lấy ra số nhỏ nhất
    - Math.max() --> lấy ra số lớn nhât
*/
//console.log(Math.floor(Math.random() *10));

var randoms = Math.floor(Math.random() *100);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
//console.log(bonus[randoms]);

//cach chinh ti le
if(randoms < 50) {
    //console.log('dap the thanh cong');
}