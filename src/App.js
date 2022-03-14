import logo from './logo.svg';
import './App.css';
import {List} from './components/List'
import {Task} from './components/Task'
import React,{useState} from 'react';
import { CreateTask } from './components/CreateTask';

function App() {
  const mockList={
    name: 'Self Learning',
    tasks:[{
        title:'Walk'
    },{
        title:'learn'
    },{
        title:'eat'
    }]
  }
  const indexingData=(mockList)=>{//indexing is done so that when we return task we know which one is edited
    const indexingMockList={
     name:mockList.name,
     tasks: mockList.tasks.map((list,index)=>{
       return {
         title:list.title,
         id:index,
       }
     })
   }
   return indexingMockList
 }
  const [page,setPage]=useState('list')
  const [listData, setListData]=useState(indexingData(mockList))
  const [selectedTask,setSelectedTask]=useState()
  
  const onEdit=(eachTask)=>{
    console.log(eachTask)
    setPage('task')
    setSelectedTask(eachTask)
  }
  const onAddList=()=>{
    setPage('task2')
    setSelectedTask('')
  }
  
  const onSave=(taskItem)=>{
    console.log(taskItem.title)
    let f=0;
    const updateMockList={
      name: listData.name,
      tasks: listData.tasks.map((eachTask,index)=>{
        if(eachTask.id===taskItem.id){
          f=1;
          return taskItem 
        }else{
          return eachTask
        }
      }) 
    }
    if(f===0)
    updateMockList.tasks.push(taskItem)
    setListData(updateMockList);
    setPage('list')
  }
  return (
    <>
      <div className="App">
      {page==='list'?<List listData={listData} onClick={onEdit} addList={onAddList}/>:<Task selectedTask={selectedTask} onSave={onSave} page={page} listData={listData}/>}
      </div>
      
    </>
    
  );
}

export default App;
