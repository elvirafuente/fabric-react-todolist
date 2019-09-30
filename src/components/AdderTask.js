import React, {useContext, useState} from 'react';
import { Stack, PrimaryButton } from 'office-ui-fabric-react/';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
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
            <SearchBox
                placeholder="Add tasks"
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                onChange={e => setInputValue(e.target.value)}
                iconProps={{ iconName: 'TaskSolid' }}
                className="borderRadius0"
                value={inputValue}
                onKeyPress={(e) =>{ 
                  if(e.key==='Enter'){
                    handleClick()
                  }}
                }
            />
            <PrimaryButton 
                text="Add" 
                iconProps={{ iconName: 'WaitlistConfirm' }}
                className="borderRadius0"
                onClick={handleClick} 
                ariaLabel="addTask"
            />
        </Stack>
    </>
  );
}
