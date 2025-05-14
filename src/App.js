import React, {useState} from 'react'
import './App.css';

function App() {
  const [Title,setTitle]= useState("");
  const [Todo,setTodo]=useState([]);
  const handleChange =(e)=>{

    setTitle(e.target.value);
  };
  const handleAdd=()=>{
    if(Title.trim()===''){
      alert("please enter the task");
      return;
    }
    setTodo([...Todo,Title]);
    setTitle('');
    console.log('task created')
  };
 

  
return(
  <div className='app-container'>
    <h1>My todo App</h1>
    <input type='text' value={Title} onChange={handleChange} placeholder='enter the task' className='input'></input>
    <button onClick={handleAdd} className='add-handle'> Add</button>
    <ul className='Todo-list'>
      {Todo.map((item,index)=>(
        <li key={index} className='Todo-item'>
          {item}
        </li>
      ))}
    </ul>
  

  </div>
)
}

export default App;
