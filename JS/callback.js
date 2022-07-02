/*
CallBack??

Là hàm function được truyền qua đối số
khi gọi hàm khác
1. Là hàm
2. Được truyền qua đối số
3. được gọi lại (trong hàm nhận đối số)
*/ 
/*
    forEach() callback
    filter() callback
    some()  callback
    every  callbak
*/ 



var courses = [
    'JavaScript',
    'PHP',
    'Ruby'
];
courses.map(function(course) {
    //console.log(course);
});


// forEach() callback
// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//        if(this.hasOwnProperty(index)) {
//            callback(this[index], index,this);
//        }
//     }
// }
// courses.forEach2(function(course, index, array) {
//     //console.log(course, index, array);
// });


//filter() callback
var courses1 = [
    {
        name: 'JavaScript',
        coin:680
    },
    {
        name: 'PHP',
        coin:860
    },
    {
        name: 'Ruby',
        coin:980
    }
];

Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}


var filterCourse1 = courses1.filter2(function(course1, index, array) {
    //console.log(course1, index, array)
    return course1.coin < 700;
});
//console.log(filterCourse1);

// some() callback

var courses2 = [
    {
        name: 'JavaScript',
        coin:680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin:860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin:980,
        isFinish: false,
    }
];
Array.prototype.some2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}



var result2 = courses2.some2(function(course2, index, array) {
    return course2.isFinish;
});
//console.log(result2);



// every() callback

var courses3 = [
    {
        name: 'JavaScript',
        coin:680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin:860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin:980,
        isFinish: true,
    }
];

Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
           var result = callback(this[index], index, this)
           if(!result) {
               output = false;
               break;
           }
               
        }
    }
    return output;
}


var result3 = courses3.every2(function(course3, index, array) {
    return course3.isFinish;
});
//console.log(result3);