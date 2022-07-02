// HTML DOM (Document Object Model)
/*
Có 3 thành phần
    1. Element (các thẻ tag): 
    ID , class, tag,CSS selector, HTML collection
    2. Attribute (các thuộc tính nằm trong thẻ tag)
    3. Text ()
*/
// Mỗi hình vuông là node
/*
Dùng js để truy cập vào DOM để thay đổi các thành phần của DOM
*/

//-------------------------------------------

// JavaScript: Browser | Server (Node Js)
//Browser: HTML --> DOM --> WEB API



/*
    1. getElementById
    2. getElementsByClassName
    3. getElementsByTagName
    4. querySelector
    5. querySelectorAll

    6. HTML collection
    7.document.write

*/ 

//------------------------------------------------
// DOM attributes
//var headingElement = document.querySelector('h1');
//console.log(headingElement);


//them Attribute
//C1
 //headingElement.title = 'heading';
// headingElement.className = 'heading';
// headingElement.id = 'heading';

//C2
//headingElement.setAttribute('class', 'heading');


// Lay Attribute
//console.log(headingElement.getAttribute('class'));
//console.log(headingElement.getAttribute('title'));

//--------------------------------------------

// InnerText, textContent --> lay-get , sua-set doi noi dung text Node

// var headingElement1 = document.querySelector('.heading');
// console.log(headingElement1.innerText); 
// console.log(headingElement1.textContent);

// headingElement1.innerText = 'New text';

//-----------------------------------

//InnerHTML, outerHTML

//InerHTML
//var boxElement = document.querySelector('.box');
//console.log(boxElement);
//boxElement.innerHTML = '<h2>Heading new</h2>';
//console.log(document.querySelector('h2').innerText);

// outerHTML



// Node properties
//console.log([boxElement]);

//--------------------------------------------------
// DOM CSS
//var boxElement = document.querySelector('.box');
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';
//CACH 2
// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green'
// })
// console.log(boxElement.style.width); 


//background-posittion --> backgroudPosittion --> camelCase--> buu lac da nhap nho

//--------------------------------------------------

// ClassList property

//add --> them class vao element
//contains --> kiem tra 1 class co nam trong element k
//remove --> xoa bo class khoi element 
//toggle --> neu co class o element-> xoas bo class , 
            //neu khong co class-> them class vao element

// var boxElement = 
//     document.querySelector('.box');

// boxElement.classList.add('red');
// //console.log(boxElement.classList.contains('red'));

// // setTimeout(() => {
// //     boxElement.classList.remove('red');
// // }, 3000)
// setTimeout(() => {
//     boxElement.classList.toggle('red');
// }, 3000)
//------------------------------------

//DOM Events
// 1. Attribute events
// 2. Assign events using the element node
// 3. Input / select
// 4. Key up / down
// phuong thuc event
// 5. preventDefault --> loai bo hanh vi mac dinh trinh duyet tren the html
// 6. stopPropagation --> loai bo su kien noi bot



// 7. Event listener khac DOM event
    



// var h1Element =
//     document.querySelectorAll('h1');

// for (var i = 0; i < h1Element.length; i++) {
//     // console.log(h1Element[i]);
//     h1Element[i].onclick = function(e) {
//         //code here
//         console.log(e.target);
//     }
// }
    // input
// var inputValue;
// var inputElement = 
//     document.querySelector('input[type= "text"]');

// inputElement.oninput = function(e) {
//     inputValue = e.target.value;
    
// }

//checkbox
// var inputElement = 
//     document.querySelector('input[type= "checkbox"]');

// inputElement.onchange = function(e) {
//     console.log(e.target.checked);
// }

//select
// var inputElement = 
//     document.querySelector('select');

// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

//key up --> bam xg xong tha ra
// var inputElement = 
//     document.querySelector('input[type= "text"]');

// inputElement.onkeyup = function(e) {
//     console.log(e.target.value);
// }


//onkeypress --> bam giu im

// xem được đang bấm nút nào
// document.onkeydown = function(e) {
//     //console.log(e);
//     switch(e.which) {
//         case 65:
//             console.log('So 65');
//             break;
//         case 66:
//             console.log('so 66');
//             break;
//     }
// }

// 5. preventDefault --> loai bo hanh vi mac dinh trinh duyet tren the html
// var aElement = 
//     document.querySelectorAll('a');
// // var aElement = document.anchors;
// // var aElement = document.links;

// for(var i = 0; i < aElement.length; ++i) {
//     aElement[i].onclick = function(e) {
//         //khi khong phai chuoi string ... thi se ngan chan truy cap
//         if(!e.target.href.startsWith('https://fullstack.edu.vn/')) {
//             e.preventDefault(); 
//         }
//     }
// }
// var ulElement = document.querySelector('ul');
//     // ngan chan hanh vi bam chuot xuong
// ulElement.onmousedown = 
//     function(e) {
//         e.preventDefault();
//     }
// ulElement.onclick = 
//     function(e) {
//         console.log(e.target);
//     }


// // 6. stopPropagation --> loai bo su kien noi bot
// document.querySelector('div').onclick = 
//     function() {
//         console.log('DIV');
//     }
    
// document.querySelector('button').onclick = 
//     function(e) {
//         e.stopPropagation();
//         console.log('Click Me');
//     }