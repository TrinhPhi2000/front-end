//DOM
// const h1DOM = document.createElement('h1');

// h1DOM.title = 'Hello'
// h1DOM.className = 'heading'
// h1DOM.innerHTML = 'Hello Guy!'

// document.body.appendChild(h1DOM);

//React
// //React.createElement(type, props, chidlren, n)
// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading'
// }, 'Hello Guy');
// console.log(h1React);

//===================================================

//DOM
// const ulDOM = document.createElement('ul')
//     ulDOM.id = 'ul-id'
//     ulDOM.style = 'color: red'

// const li1DOM = document.createElement('li')
//     li1DOM.innerHTML = 'JavaScript'
//     li1DOM.id = 'li-id1'

// const li2DOM = document.createElement('li')
//     li2DOM.innerHTML = 'ReactJS'
//     li2DOM.id = 'li-id2'


// ulDOM.appendChild(li1DOM)
// ulDOM.appendChild(li2DOM)

// document.body.appendChild(ulDOM)


//ReactJS

// const ulReact = React.createElement(
//     'ul',
//     {
//         id: 'ul-id',
        
//     },
//     React.createElement('li',{ id: 'li-id1'},'JavaScript'),
//     React.createElement('li',{id: 'li-id2'},'ReactJS'),
// )
//  const root = document.getElementById('root')

//  ReactDOM.render(ulReact, root)