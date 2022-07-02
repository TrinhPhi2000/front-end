/*
Promise --> giải quyết tình trạng callback hell
- Sync --> đồng bộ
- Async --> bất đồng bộ
- Nỗi đau
    Callback hell, Pyramid of dom(kim tự tháp)
- Lý thuyết
- Cách hoạt động
- Thực hành

//Những thao tác bất đồng bộ
// setTimeOut, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame

// call back --> xử lý thao tác bất đồng bộ


*/

// Callbackhell

// setTimeout(function() {
//     console.log(1);// viec 1
//     setTimeout(function() {
//         console.log(2); //viec 2
//         setTimeout(function() {
//             console.log(3); //viec 2
//             setTimeout(function() {
//                 console.log(4); //viec 2
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);



// 1. Pendding
// 2. Fullilled
// 3. Reject
// var promise = new Promise(
//     //executor
//     function(resolve, reject) {
//         //Logic xu ly
//         //Thành công: resolve()
//         //Thất bại: reject()

//         //Fake call API
//         resolve([
//             {
//                 ID: 1,
//                 name: 'JS'
//             }
//         ]);
//     }
// );
// promise
//     .then( function(course) {
//         // Khi resolve được gọi
//         console.log(course)
//     })
//     .catch( function() {
//         // Khi reject được gọi
//         console.log('Fail')
//     })
//     .finally( function() {
//         // Khi resolve hoặc reject đc gọi
//         console.log('Done!')
//     });


//Chain- tinh chat chuoi
// Tinh chat rejeat chuoi
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve , ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Co loi');
//         });

//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });


// 1. Promise.resolse
// 2. Promise.reject
// 3. Promise.all
