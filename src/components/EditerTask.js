import React, {useContext, useState} from 'react';
import { Stack, PrimaryButton } from 'office-ui-fabric-react/';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ToDoContext } from '../context/ToDoContext';

export default function AdderTask() {
  const {tasks, setTasks} = useContext(ToDoContext)
  const [inputValue, setInputValue] = useState('')

  const handleClick = () =>{
      let lastId;
      tasks.length ? (lastId = tasks[tasks.length - 1].id) : (lastId = 0);
      const newTask = {
          id: lastId + 1,
          name: inputValue,
          checked: false
      }
      setTasks(tasks.concat(newTask))
      setInputValue('');
  }

  return (
    <>
        <Stack horizontal >
            <TextField
                placeholder="Add tasks"
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                onChange={e => setInputValue(e.target.value)}
                className="borderRadius0"
                value={inputValue}
                onKeyPress={(e) =>{ 
                  if(e.key==='Enter'){
                    handleClick()
                  }}
                }
            />
            <PrimaryButton 
                text="Save" 
                iconProps={{ iconName: 'Save' }}
                className="borderRadius0"
                onClick={handleClick} 
                ariaLabel="addTask"
            />
        </Stack>
    </>
  );
}
