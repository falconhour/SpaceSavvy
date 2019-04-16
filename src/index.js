import React from 'react';
import ReactDOM from 'react-dom';
//import spacePhoto from './statics/space-photo.jpg';
import Playground from './playground'

const app = document.getElementById('app');

// const btn = document.createElement('button');
// btn.textContent = 'My Button';
// btn.addEventListener('click', () => {
//     import('./mars').then(mars => {
//         app.appendChild(mars.default);
//     });
// });
//app.append(btn);

// const img = document.createElement('img')
// img.src = spacePhoto;
// app.appendChild(img);

// const SpaceImage = () => (
//     <img src={spacePhoto}>
//     </img>
// );

ReactDOM.render(<Playground />, app);