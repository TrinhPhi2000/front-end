// /*
// --Hook
// 1. React element type: string, function/class
//     -Wrapper
//         - Header -> Header component
//         - Content -> Content component
//         - Footer -> Footer component
// 2. Biểu diễn đơn giản với JSX

// */ 
// function Header() {
//     return(
//         <div className = "header">Header</div>
//     )
// }

// function Content() {
//     return(
//         <div className = "content">Content</div>
//     )
// }

// // function Footer() {
// //     return(
// //         <div className = "footer">Footer</div>
// //     )
// // }
// // class Footer extends React.Component {
// //         render() {
// //             return(
// //                 <div className="footer">Footer</div>
// //             )
// //         }
// // }

// // const app = (
// //     <div className = "wrapper">
// //         <Header />
// //         <Content />
// //         <Footer />
// //     </div>

// // )

// // ReactDOM.render(app, document.getElementById('app'))

// //==============================================================

// //PostItem.js
// function PostItem() {
//     return(
//         <div className= "post-item">
//             <h2 className="post-title"> Kien thuc Front-End</h2>
//             <p className="post-desc">Ban da co kien thuc ve giao dien chua</p>
//             <p className="post-published"> Mot ngay truoc</p>
//         </div>
//     )
// }



// //App.js
// function App() {
//     return (
//         <div id = "wrapper"> 
//             <PostItem />
//             <PostItem />
//             <PostItem />

//         </div>
//     )
// }

// //index.js
// ReactDOM.render(<App />, document.getElementById('app'))