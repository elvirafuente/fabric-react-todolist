import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import {ToDoProvider} from './context/ToDoContext'
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

ReactDOM.render(
    <ToDoProvider>
        <ToDoApp />
    </ToDoProvider>
, document.getElementById('root'));
