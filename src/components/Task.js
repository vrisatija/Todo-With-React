import React from 'react'
import {useState} from 'react'


export const Task = (props) => {
  const [task,setTask]=useState(props.selectedTask.title)

  const onUpdateTask=(event)=>{
    setTask(event.target.value);
  }
  const newObj=()=>{
    let obj;
        obj=props.page==="task2"? {
          title: task,
          id: props.listData.tasks.length +1,
        } :{
          title: task,
          id: props.selectedTask.id,
        }
        return obj
  }
  return (
    <div>
      <input value={task} onChange={onUpdateTask}></input>
        <button onClick={(taskItem)=>props.onSave(newObj())}>Save</button>
    </div>
  )
}
