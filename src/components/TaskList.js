import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { ToDoContext } from '../context/ToDoContext';

export default function TaskList() {
  const {tasks, filter} = useContext(ToDoContext)
  let filteredTasks;
  if(filter==='Completed'){
    filteredTasks = tasks.filter(item => item.checked === true)
  } else if(filter === 'Active'){
    filteredTasks = tasks.filter(item => item.checked === false)
  } else {
    filteredTasks = [...tasks]
  }
  return (
    <ul>
      {filteredTasks
        .map(item=> {
          return(             
            <li key={item.id}><TaskItem name={item.name} checked={item.checked} id={item.id}/></li>
          )
        })         
      }
    </ul>
  )
}

