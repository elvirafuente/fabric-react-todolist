import React, {createContext, useState} from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    return (
        <ToDoContext.Provider value={{tasks, setTasks, filter, setFilter}}>
            {children}
        </ToDoContext.Provider>
    )
}