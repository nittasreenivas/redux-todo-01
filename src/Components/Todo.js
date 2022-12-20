
import {connect} from "react-redux";
import {useState} from "react"
const Todo = (props) => {
  console.log(props)
  const [newTodo,setNewTodo] = useState("")
  const addTask = () => {
    console.log('addTask button clicked');
    const task = {
      id:props.todo.todos.length === 0 ? 1 : props.todo.todos[props.todo.todos.length-1].id+1,
      taskName:newTodo,
      status:false
    }
    props.dispatch({
      type:"ADD_TASK",
      payload:[...props.todo.todos,task]
    })
  }
  const handleDelete = (id) => {
    console.log('handleDelete button is clicked')
    props.dispatch({
      type:"HANDLE_DELETE",
      payload:id
    })
  }
  const handleDone = (id) => {
   console.log('handleDone button is clicked')
   props.dispatch({
     type:"HANDLE_DONE",
     payload:id
   })
  }
  const handleUndo = (id) => {
    console.log('handleUndo button is clicked')
    props.dispatch({
      type:"HANDLE_UNDO",
      payload:id
    })
  }
  return(
    <div>
      <input value={newTodo} onChange={(e) =>setNewTodo(e.target.value)}
      type ="text" placeholder="enter todo"/>
      <button onClick={addTask}>addTask </button>
      <div>
        {
          props.todo.todos.map((task) => {
            return(
              <div key={task.id} className={task.status === true ? "active" : "dull"}>
                <span> {task.taskName} </span>
                {
                  task.status === false ? (
                    <button onClick={() => handleDone(task.id)}> done</button>
                  ):(
                    <button onClick={() => handleUndo(task.id)}> undo </button>
                  )}
                <button onClick={() => handleDelete(task.id)}>Delete </button>
                </div>
            )
          })
        }
        </div>
      </div>
  )
}

export default connect(function(store){
  return store
})(Todo)