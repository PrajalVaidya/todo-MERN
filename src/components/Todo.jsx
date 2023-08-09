import React, { useEffect, useState  } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("items"))||[])
  const [isedit,setIsedit] = useState(false)
  const [selecteditem, setselectedItem] = useState()
  const [value, setValue] = useState("")

  useEffect(() => {
    localStorage.setItem("items",JSON.stringify(todos))
  }, [todos])
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      //console.log(todo)
      setTodos([...todos,todo])
      setTodo("")
  }
  const handleEdit = (item,index) =>{
    setIsedit(true)
    setselectedItem(index)
    setValue(item)

  }
  const handleDelete = (index) =>{
    const deleted_item = todos.filter((item,id)=>
      id !== index
    )
    setTodos(deleted_item);
  }

  const handleUpdate = () =>{
    todos.forEach((item,index) => { if(selecteditem == index)
      {
         todos[index]  = value
      }
      setIsedit(false)
      setselectedItem("")
      
    });
  }

  return (
    <div>
    <div>Todo</div>
    <div> 
    <form onSubmit={handleSubmit}>
      <input placeholder='Add task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
    </form>
    </div>
    <div >
    <h1>TODOS</h1>
    <hr></hr>
    {todos.map((item,index)=>(
      <div key = {index}>
      {selecteditem === index ? (<> 
        {
          isedit ? (<> <form onSubmit={handleUpdate}>
            <input onChange={(e)=>setValue(e.target.value)} value={value}/> <button onClick={handleUpdate}> update </button> 
          </form></>
          ): (<></>)
        }
      
      
      </>) : (<div>
        {index} : {item}
        <button onClick={()=>handleEdit(item,index)}>edit</button>
        <button onClick={()=>handleDelete(index)} >delete</button>
      </div>)}


      </div>
    ))}
    </div>
    </div>
  )
}

export default Todo;