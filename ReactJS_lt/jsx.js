/*
    JSX -> JavaScript XML
    Babel: thư viện JS chuyên dùng để phân tích, chuyển đổi củ pháp
    chuyển đổi ES6 -> ES5, chuyển đổi JSX -> JavaScript
    -> Sử dụng JSX để làm gì: -> 
*/


// const ul = React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null,'JavaScript'),
//     React.createElement('li', null,'ReactJS')

// )

//===============================================
//JSX
// var courses = [
//     {
//         name: 'HTML, CSS'
//     },
//     {
//         name: 'JavaScript'
//     },
//     {
//         name: 'ReactJS'
//     },
// ]

// const ul = <ul>
//     {courses.map((course, index) => 
//         <li key ={index}>{course.name}</li>
//     )}
// </ul>

// const container = document.getElementById('root');

// const root = ReactDOM.createRoot(container);

// root.render(ul)

//====================================================
/*
    Xử lý DOM events
    - Components do chúng ta định nghĩa phải viết hoa chử cái đầu
    - Chọn components trong object
    - Boolean, Null, undefined không được render
    - Kết hợp toán tử logic để render theo điều kiện
*/ 

// const Form = {
//     Input() {
//         return <input />
//     },
//     CheckBox() {
//         return <input type="checkbox"/>
//     }
// }
// function App() {
//     return (
//         <div id="wrapper">
//            <Form.Input />
//         </div>
//     )
// }


// --> Chon 1 Component trong object
// function Button({title, href, onClick}) {
//     let Component = 'button'

//     const props = {}

//     if(href) {
//         Component = 'a'
//         props.href = href
//     }

//     if(onClick) {
//         props.onClick = onClick
//     }

//     return (
//         <Component {...props}>{title}</Component>
//     )
// }

// function App() {
//     return (
//         <div id="wrapper">
//            <Button 
//                 title="Click Me"
//                 href = "http://fullstack.edu.vn/"
//                 onClick= {() => console.log(Math.random())}
//            />
//         </div>
//     )
// }
//ReactDOM.render(<App />, document.getElementById('root'))

// --> Boolean, Null, undefined không được render



//======================================================

/*
    Phan 2:
- Props trong JSX
    - <YourComponent
        proName1 = "String literals"
        proNamw = {expression}
        />
    - Props default to "true" -> khi chi ghi thuoc tinh thi mac dinh la true
    - Spread/Rest props
    - Children prop
        - <YoursComponet>String litnerals </YoursComponent>
        - <YoursComponet>{expression}}</YoursComponent>
    - Render props


*/

//Spead/Rest
function Input({label, ...inputProps} ){
    return (
        <div>
            <label> {label}</label>
            <input {...inputProps}/>
        </div>
    )
}

// App.js
function App() {

    
    return (
        <div id= "wrapper"> 
          <Input 
            label="Full Name"
            placeholder= "Nhap ten"
            type = "radio"
          />
       
        </div>
    )
}

//index.js -> render

ReactDOM.render(<App />, document.getElementById('root'))