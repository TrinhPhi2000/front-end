// 1. Let, const


// -- Var / Let, const :  Scope(pham vi truy cap), hosting (khai bao bien luon dung dau)
// -- Const / var, let : Assignment
//Code block : if else , loop, {},..

// Scope: let, const không sử dụng được ngoài block
// {
//     const course2 = 'JavaScript basic'
//     {
//         {
//             console.log(course2);
//         }
//     }
// }
// console.log(course2);
// hosting: chỉ hổ trợ cho var
//var a = 1; // js thông dịch thành khai báo biến lên trên đầu var a; => a = 1;

//Assingment const không gán biến được lần 2, nhưng có thể gán thuộc tính trong đó
//var, let
// var a = 1;
// a = 100;
// console.log(a);

//const
// const a = 1;
// a = 100;
// console.log(a); => lỗi

// const obj = {
//     name3: 'JS'
// };

// obj.name3 = 'PHP';

// console.log(obj.name3); -> PHP



//---------------------------------------------------------
// 2.Arrow function
//c1
// function logger(log) {
//     console.log(log);
// };
// logger('Message...');

//c2
// const logger = function(log) {
//     console.log(log);
// }
// logger('Mess....');

// được thay bằng ES6   
// const logger = (log) => {
//     console.log(log);
// }
// logger('Messs.....');

// sau dau mui ten duoc hieu la return
// const sum = (a, b) => a - b;
// console.log(sum(3, 5));

// Khi no la 1 object thi phai bo trong dau ngoac tron
// const sum = (a, b) => ({a: a, b: b})
// console.log(sum(3, 5));

// Neu arrow function chi co 1 tham so thi 
// const logger = log => console.log(log);
// logger('Messssssss');

// =================================================================

//3. Template literals(template string)
// day la toan tu cong noi chuoi
// const courseName = 'JavaScript';
// const desc = 'Cource name: ' + courseName;
// console.log(desc);

//template string
// const courseName = 'JavaScript';
// const desc = `Cource name: ${courseName}`;
// console.log(desc);

// const lines = `Line1
// Line 2
// Line 3
// `;
// console.log(lines);


// =======================================================
//4. Classes
//contructor binh thuong
// function Course(name, price) {
//     this.name= name,
//     this.price = price;
// };
//class contrucror
// class Course{
//     constructor(name, price) {
//         this.name= name,
//         this.price = price;
//     }
// }
// var jsCourse = new Course('JavaScrip',1200);
// var phpCourse = new Course('PHP', 3000);

// console.log(jsCourse);
// console.log(phpCourse);

// ============================================================
//5. Enhanced object literals
// -- Dinh nghia key: value cho object
// --Dinh nghia phuong thuc method cho object
// var name5 = 'JavaScript';
// var price = 1200;
//cach binh thuong
// var course = {
//     name5: name5,
//     price: price,
//     getName: function() {
//         return name5;
//     }
// }

// var course = {
//     name5,
//     price,
//     getName() {
//         return name5;
//     }
// }
// console.log(course);

// -- Dinh nghia key cho object duoi dang bien

// var fieldName = 'name';
// var fieldPrice = 'price';
// const course2 = {
//     //name: 'JS',
//     // dinh nghia key cho object duoi dang bien
//     [fieldName]: 'JS',
//     [fieldPrice]: 1200,
// };
// console.log(course2);

// ====================================================
//6. Default parameter value
// -- Dinh nghia nhung gia tri mac dinh cho tham so
// function logger(log) {
//     if(log === undefined) {
//         log = 'Gia tri mac dinh';
//     }
//     console.log(log);
// };
// logger();
// thay bang
// function logger(log = 'Gia tri mac dinh') {
//     console.log(log);
// };
// logger();

// thuc te
// function logger(log, type ='log') {
//     console[type](log);
// }
// logger('mess');

//=============================================================
//7. Destructuring -- phan ra -- object --array

// var array = [
//     'JS',
//     'PHP',
//     'Ruby'
// ];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// Cach destructuring

//var [a, b, c] = array;

//var [a, , c] = array;
// Rest parameter--> lay nhung phan tu con lai trong mang
// var [a, ...rest] = array;

// console.log(a);

// console.log(rest);

//Object
// var coures4 = {
//     name4: 'PHP',
//     price: 1200,
//     image: 'image-address',
//     children: {
//         name4: 'ReactJS'
//     },
    
// };

//var   { name4, price, image} = coures4;
// var   { name4: parentName, children: {name4}} = coures4;

//rest
//var   { name4, ...rest} = coures4;
//console.log(rest);
// var {name4, desc= 'Gia tri mac dinh'} = coures4;
// console.log( desc);

// console.log(parentName);
// console.log(name4);

// Dinh nghia tham so toan tu rest
// function logger(...params) {
//     // no tro 1 mot cai mang
//     console.log(params);
// };
// logger(1,3,4,5,6,7,8);

//==================================
//8. Spread--> Toan tu giai
//array
// var array1 = ['JS', 'PHP', 'Flutter'];
// var array2 = ['Ruby', 'CSS'];
// var array3 = [...array1, ...array2];
// console.log(array3);
//object
// var object1 = {
//     name5: 'Trinh Phi',
// };
// var object2 = {
//     age: 22
// };
// var object3= {
//     ...object1,
//     ...object2
// };
// console.log(object3);
//Giai tham so
// var array = ['JS', 'PHP', 'Ruby'];
// function logger(...rest) {
//    for(var i = 0; i < rest.length; i++ ) {
//         console.log(rest[i]);
//    }
// }

// logger(...array);

//==============================================
//9. Tagged template litterals

// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr)=> [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     )
//     .join('');
// }
// var brand = 'F8';
// var course = 'JavaScript';

// const html = highlight`Hoc lap trinh ${course} tai ${brand} !`;
// console.log(html);

// =========================================================
//10. Modules --> Boc tach ra thanh nhung thanh phan rieng de xu ly
//Import/ export
// import logger from './modules.js';
// console.log( logger);

//==============================================================
//11. Optional chaining (?.)
// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'meomeo',
//         cat2: {
//             name: 'meomeo2',
//             cat3: {
//                 name: 'meomeo3'
//             }
//         }
//     }
// };

// if(
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3
//     obj?.cat?.cat2?.cat3
// ){
//     console.log(obj.cat.cat2.cat3.name);
// }
const obj = {
    getName(value) {
        // console.log(value);
    }
}
obj.getName?.(123);