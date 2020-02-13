import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './classComponent/App';
import AppHook from './functionComponent/AppHook'
import SampleApp from './sampleApp'
import SampleHook from './sampleHook'

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<AppHook/>, document.getElementById('root'));

// ReactDOM.render(<SampleHook/>, document.getElementById('root'));

