// import html from './core.js'

// const cars = ['BMW', 'Mercedes', 'CRV']
// const isSuccses = true;
// const output  = html`
//     <h1>${0}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`).join('')}
//     </ul>
// `
// console.log(output);    
import { attach } from "./store.js";
import app from './component/app.js'

attach(app, document.getElementById('root') )