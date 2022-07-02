//1. Object
//2. Object constructor
//3. Object prototype
//4. Objetc date --> Date object js mozila

var classA = 'Đại Học';
var myInfo = {
    name: 'Trinh Phi',
    age: '21',
    address: 'Da Lat',
    [classA]:'Đà Lạt',
    getName: function() {
        return this.name;
    }
};
//Function --> Phương thức / method
//Object --> thuộc tính / property


//console.log(myInfo.getName());
// thêm key value vào object

myInfo.email = '1812818@dlu.edu.vn'
myInfo['sub'] = 'VietNames'

// lấy key value
// console.log(myInfo.name);
// console.log(myInfo['name']);

// xóa key value
delete myInfo.email;


//2. Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName1 = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Phi', 'Trinh', 'Avatar');
var user = new User('Thang', 'Ton', 'Avatar');

//thuoc tinh rieng
author.title = 'Chia se tai Trinh Phi';
user.comment = 'Lieu co cai nay khong a';


// console.log(author.getName1());
// console.log(user);


//3. Object prototype / nguyên mẫu basic --> thêm thuộc tính ngoài hàm tạo
//theeem thuộc tính
User.prototype.className = 'F8';
//console.log(author);

//thêm phương thức
User.prototype.getClassName = function() {
    return this.className;
}
//console.log(user.getClassName());


//4. Objetc date

var date = new Date();

var  year = date.getFullYear();
var  month = date.getMonth();
var day = date.getDate();

//console.log(`${day}/${month}/${year}`);