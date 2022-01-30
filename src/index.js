import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import ReactGA from "react-ga"
import { StyledEngineProvider } from '@mui/material/styles';

ReactGA.initialize('274802176')


ReactDOM.render(
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    , document.getElementById('root'));

