// 1. Tạo mảng
// 2. Truy xuất mảng
/*
key: JavaScript Array method
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing 
*/

/*
Array Method
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()

*/

// array có thể chứa tất cả các kiểu dữ liệu
var languages = [
    'JavaScript', //phần tử của mảng
    'PHP',
    'Ruby',
];
//Cách 2
var languages1 = new Array(
    'JavaScript', //phần tử của mảng
    'PHP',
    'Ruby',
);
// cách kiểm tra có phải array k
//console.log(Array.isArray(languages));


// 3. Pop -> xóa phần tử ở cuối mảng 
//console.log(languages.pop()); // -> xuat phan tu xoa
//khi khong có phần tử thì trả về undefied

//console.log(languages); // và trả về phần tử đã xóa

// 4. Push
// thểm 1 hoặc nhiều phần tử cuối mảng
//cosole.log(languages.push('Dart', 'Java')) 

// 4. Shift -> xóa phần tử đầu mảng
// khi trả về undefied thì có nghĩa đã xóa hết element mảng
//console.log(languages.shift());

//5.Unshift -> thêm 1 hoặc nhiều phần tử đầu mảng và trả về độ dài mới
// console.log(languages.unshift('Java', 'C'));
// console.log(languages);


// 6. Splicing -> xóa, chèn

// tham sô đầu là vị trí bắt đầu xóa phần tử, tham số 2 là số lượng phần tử muốn xóa
// languages.splice(1, 2)
// console.log(languages);

// tham số 3 chèn element tại vị trí tham số thứ 1
// languages.splice(1, 0, 'Dart');
// console.log(languages);


// 7. Concat -> nối array
var languages2= [
    'C',
    'Flutter',
];
//console.log(languages.concat(languages2));

// 8.Slicing -> cắt vài hoặc toàn bộ element của mảng
// tham số 1 vị trí bắt đầu, tham số 2 vị trí kết thúc
// khi truyên vào 0 thì là copy mảng
//console.log(languages.slice(1, 2));


var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 400
    },
];

// forEach() --> duyệt qua từng phần tử của mảng
courses.forEach(function(course, index) {
    //console.log(index, course);
});


// every() --> kiểm tra tất cả các phần tử của mảng thỏa điều kiện nào đó
// trả về kiểu bolean
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
    //console.log(index, course);
});
//console.log(isFree);

// some() --> chỉ cần 1 element trong mảng thỏa đk là ngưng
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
    //console.log(index, course);
});
//console.log(isFree);


// find() --> lọc qua từng phần tử --> return true thì sẽ lấy phần tử đó và kết thúc luôn
var isFree = courses.find(function(course, index) {
    return course.name === 'Ruby';
    //console.log(index, course);
});
//console.log(isFree);


// filter --> lọc hết mảng , phần tử nào giống thì liệt kê ra
var isFree = courses.filter(function(course, index) {
    return course.name === 'Ruby';
    //console.log(index, course);
});
//console.log(isFree);

// map() --> muốn chỉnh sửa element của arr
function courseHandler(course, index) {
    // console.log(course);
    // return {
    //     id: course.id,
    //     name: `Khoa hoc: ${course.name}`,
    //     coin: course.coin,
    //     coniText: `Gia: ${course.coin}`,
    //     index: index,
        
    // };

    // tao mang moi
    return course.name;

};
var newCources = courses.map(courseHandler);
//console.log(newCources);


// reduce() --> khi muon nhan ve gia tri duy nhat khi xu ly mang
// cach thong thuong
    // var totalCoin = 0;
    // for (var course of courses) {
    //     totalCoin = totalCoin + course.coin;
    // }
    // console.log(totalCoin);

// reduce()
// C1
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);

//c2
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0); // initial value khong bat buoc
//console.log(totalCoin);



// Flat - Lam phang mangtu depth array- mang sau

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var newdepth = [...depthArray];
console.log(newdepth)
var flatArray = depthArray.reduce(function(flatOuput, depthItem) {
    return flatOuput.concat(depthItem);
}, []);
//console.log(flatArray);


// Lay ra cac khoa hoc dua vao 1 mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id:2,
                title:"Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id:2,
                title:"NodeJS"
            }
        ]
    },
];

var newCources = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);
//console.log(newCources);

var htmls = newCources.map(function(course) {
    return `
        <div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id}</p>
        </div>
    `;
});
//console.log(htmls.join(''));