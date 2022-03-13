import logo from './logo.svg';
import './App.css';
import {List} from './components/List'
import {Task} from './components/Task'
import React,{useState} from 'react';

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
  
  const onSave=(taskItem)=>{
    console.log(taskItem.title)
    const updateMockList={
      name: listData.name,
      tasks: listData.tasks.map((eachTask,index)=>{
        if(eachTask.id===taskItem.id){
          return taskItem 
        }else{
          return eachTask
        }
      })
    }
    setListData(updateMockList);
    setPage('list')
  }
  return (
    <div className="App">
      {page==='list'?<List listData={listData} onClick={onEdit}/>:<Task selectedTask={selectedTask} onSave={onSave} />}
    </div>
  );
}

export default App;
