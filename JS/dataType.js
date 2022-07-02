/*
Kiểu dử liệu trong JS

1. Dữ liệu nguyên thủy -Primitive Data
    - Number
    - String
    - Bolean
    - Undefined
    - Null
    - Symbol
2. Dữ liệu phức tạp -Complex Data
    - Function
    - Object
*/

// Number type
var a = 1;
var b= 1.5;

// String type
var fullName = 'Trinh Nguyen';

//Bolean type
var isSuccess = true;

//Undefined type (không gán giá trị)
var age;

//null
var isNull = null;

//symbol
var id = Symbol('ID'); // unique--Đặc tính duy nhất không được trùng lặp
var id2 = Symbol("ID");
// console.log(id===id2); // -> false


//Function
var myFunction = function(){
    //console.log('Đây là kiểu dữ liệu function');
}
myFunction();

//Object types
var myObject = {
    name:'Trịnh Phi',
    age:18,
    myFunction: function(){
        
    }
};

var myArr = [
    "Lê Hùng",
    "Trịnh Phi"
];

//Kiểm tra kiểu dữ liệu
//   console.log(typeof +biến);