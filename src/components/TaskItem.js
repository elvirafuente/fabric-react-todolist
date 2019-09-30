import React, { useContext, useState } from 'react';
import { Stack, Checkbox, IconButton, PrimaryButton } from 'office-ui-fabric-react/';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ToDoContext } from '../context/ToDoContext';
// import EditerTask from './EditerTask'


export default function TaskItem({ name, checked, id }) {
  const {tasks, setTasks} = useContext(ToDoContext)
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    const newArray = [...tasks];
    const indexTask = newArray.findIndex(item => item.id === inputValue.id);
    newArray[indexTask].name = inputValue.name;
    setTasks(newArray)
    setEditMode(false)
  }

  const handleTextfieldChange = event =>{
    const valueName = event.target.value;
    const newValue = {
      ...inputValue,
      name: valueName
    };
    console.log(newValue)
    setInputValue(newValue)
  }

  const handleEdit = event => {
    const selectedId = parseInt(event.currentTarget.getAttribute('data-id'))
    const targetTask = tasks.find(item => item.id === selectedId)
    setInputValue(targetTask)
    setEditMode(true);
  }
  
  const handleCheck = event =>{
    const selectedId = parseInt(event.target.id);
    const index = tasks.findIndex(item => 
      item.id === selectedId
    );
    const objectSelected = tasks[index];
    const newCheck = !objectSelected.checked;
    objectSelected.checked = newCheck
    tasks[index] = objectSelected
    const newTasks = [...tasks];
    setTasks(newTasks)
    console.log(newTasks)
  }

  const handleDelete = (event) => {
    const selectedId = parseInt(event.currentTarget.getAttribute('data-id'))
    const newState = tasks.filter(item =>
      item.id !== selectedId
      )
    setTasks(newState)
  }

  return (
    <>
      {!editMode ? 
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
          <Checkbox label={name} onChange={handleCheck} checked={ checked } id={id}/>
          <Stack horizontal>
            <IconButton iconProps={{ iconName: 'Edit' }} onClick = {handleEdit} ariaLabel="Edit"  data-id={id} />
            <IconButton iconProps={{ iconName: 'Delete' }} onClick={handleDelete} ariaLabel="Delete" data-id={id}/>
          </Stack>
        </Stack>
        :
        <Stack horizontal verticalAlign="center">
          <TextField
              placeholder="Edit tasks"
              onFocus={() => console.log('onFocus called')}
              onBlur={() => console.log('onBlur called')}
              onChange={handleTextfieldChange}
              className="borderRadius0"
              value={inputValue.name}
              
              onKeyPress={(e) =>{ 
                if(e.key==='Enter'){
                  handleSave()
                }}
              }
          />
          <PrimaryButton 
              //text="Save" 
              iconProps={{ iconName: 'Save' }}
              className="borderRadius0"
              onClick={handleSave} 
              ariaLabel="saveTask"
          />
        </Stack>
      }
    </>
  );
}
