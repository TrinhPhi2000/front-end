/*
Props -> la object chua nhung thuoc tinh de mo ta cho react element

1. React elements
    -> Sử dụng props như vơi atribute của the HTML
    -> 2 props class, for =>className, htmlFỏ
    -> Phải tuân thủ quy ước có sẳn
2. React component
    -> Sử dụng props giống đối số cho Component
    -> Tự do đặt tên props
        - Đặt theo cameCase
        - Có thể bao gồm dấu -
- Chú ý: 
    - Prop key là prop đặc biệt
    - Prop cơ bản là đối số của Component
        => Props có thể là bất cứ kiểu dữ liệu gì
    - Sử dụng destructuring

*/

// function PostItem(props) {

//     console.log(props)
//     return(
//         <div className= "post-item">
//             {/* <label htmlFor="email">Email</label>
//             <input id="email"/> */}
//             <h2 className="post-title"> {props.title}</h2>
//             <p className="post-desc">{props.description}</p>
//             <p className="post-published"> {props.publishedAt}</p>
//         </div>
//     )
// }

// // App.js
// function App() {

//     console.log(<PostItem title="Title text" />)
//     return (
//         <div id= "wrapper"> 
//           <PostItem
//             title = "1 Kien thuc Front-End"
//             description = "1 Ban da co kien thuc ve giao dien chua"
//             publishedAt = "1 Mot ngay truoc"
//             data = {[{a: 1}, {b: 2}]}
//             callBack = {() => {
                
//             }}
//             />
//             <PostItem
//             title = "2 Kien thuc Front-End"
//             description = "2 Ban da co kien thuc ve giao dien chua"
//             publishedAt = "2 Mot ngay truoc"
//             />
//             <PostItem
//             title = "3 Kien thuc Front-End"
//             description = "3 Ban da co kien thuc ve giao dien chua"
//             publishedAt = "3 Mot ngay truoc"
//             />

//         </div>
//     )
// }

// //index.js -> render

// ReactDOM.render(<App />, document.getElementById('root'))