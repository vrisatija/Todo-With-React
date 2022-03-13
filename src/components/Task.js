import React from 'react'
import {useState} from 'react'

export const Task = (props) => {
  const [task,setTask]=useState(props.selectedTask.title)

  const onUpdateTask=(event)=>{
    setTask(event.target.value);
  }
  
  return (
    <div>
      <input value={task} onChange={onUpdateTask}></input>
      <button onClick={(taskItem)=>props.onSave({
        title: task,
        id: props.selectedTask.id,
      })}>Save</button>
    </div>
  )
}
