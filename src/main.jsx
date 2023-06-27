import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { TicTacToeApp } from './TicTacToeApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TicTacToeApp />
    </React.StrictMode>
)
