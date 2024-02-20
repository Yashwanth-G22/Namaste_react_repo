import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement("h1", {},
    React.createElement("h3", {}, 'This namaste starts'
    ))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);