/*

Vòng lặp --Loop

1. for -- Lặp với điều kiện đúng
2. for/in -- Lặp qua key của đổi tượng
3. for/of -- Lặp qua value của dội tượng
4. while -- Lặp khi điều kiện đúng
5. do/while -- Lặp ít nhất 1 lần. sau đó lăp khi đk đúng

6. Break $ Continue in Loop
7. Vòng lặp lồng nhau - Nested Loop
*/

//1. for -- Lặp với điều kiện đúng
// điều kiện không băt buộc 
var myArr = [
    'JS',
    'PHP',
    'Java',
    'Dart',
    'Ruby'
];
var arrayLength = myArr.length;
for(var i = 0   ; i < arrayLength; i++) {
    //console.log(myArr[i]);
}


//2. for/in -- Lặp qua key của đổi tượng
var myInfo = {
    name: 'Trinh Phi',
    age: 18,
    add : 'Da Lat'
};

// for(var key in myInfo) {
//     //console.log(key);
//     //console.log(myInfo[key]); --> lay gia tri value cua key
// }
var languages = [
    'JS',
    'php',
    'Ruby'
];
for(var key in languages) {
   // console.log(languages[key]);
}
var myString = 'TRINH';
for(var key in myString) {
    // console.log(myString[key]);
}

//3. for/of -- Lặp qua value của dội tượng

for(var value of languages) {
    //console.log(value);
}
for(var value of myString) {
    //console.log(value);
}

//cách lặp đối tượng
for(var value of Object.keys(myInfo)) {
    //console.log(myInfo);
}

//4. while -- Lặp khi điều kiện đúng
// var i = 0;
// while(i<1000) {
//     i++;
//     //console.log(i);
// }
var i = 0;
while(i < languages.length) {
    
    //console.log(languages[i]);
    i++;
}


//5. do/while -- Lặp ít nhất 1 lần. sau đó lăp khi đk đúng
// var m = 0;
// var isSuccess = false;
// do {
//     m++;
//     console.log('Nap the lan' + m);
//     if(false) {
//         isSuccess = true;
//     }
// } while(isSuccess && m <= 3);


//6. Break $ Continue in Loop
for(var i = 0; i<10; i++) {
    if(i%2 !== 0) {
        continue;
    }
   // console.log(i);

    // if(i>=5) {
    //     break;
    // }

}


//7. Vòng lặp lồng nhau - Nested Loop
// var myArr1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// for(var i = 0; i<myArr1.length; i++) {
//     //xuất mảng i
//     //console.log(myArr1[i]);
//     // xuất mảng j
//     for(var j = 0; j <myArr1[i].length; j++) {
//         console.log(myArr1[i][j]);
//     }
// }
