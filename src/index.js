import React from 'react';
import ReactDOM from 'react-dom';
import Mediacard from './Mediacard'
import './index.css';  


ReactDOM.render(<Mediacard title="Getting Started With Props" body="Props are used to give the react components a dynamic value" imageUrl={<img alt="img" src = "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />} />, document.querySelector('#root'));