import React from 'react'
import {useState} from 'react'


export const CreateTask = (props) => {
  const [task,setTask]=useState(props.selectedTask.title)

  const onUpdateTask=(event)=>{
    setTask(event.target.value);
  }
  return (
    <div>
      CreateTask
      
    </div>
  )
}
