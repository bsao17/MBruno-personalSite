import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import ReactGA from "react-ga"



ReactGA.initialize('274802176')

ReactDOM.render(<App/>, document.getElementById('root'));

