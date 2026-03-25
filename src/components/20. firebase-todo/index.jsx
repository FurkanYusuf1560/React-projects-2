import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Todo from "./todo";
import "./todo.css";

const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'))

export default function FirebaseTodo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([])  

  useEffect(()=>{
    onSnapshot(q, (snapShot)=> {
        
        
        setTodos(
            snapShot.docs.map(docItem => ({
                id : docItem.id,
                todoItem : docItem.data()
            }))
        )
    })
  }, [inputValue])

  function handleAddTodo(event) {
    event.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: inputValue,
      timestamp: serverTimestamp(),
    });
    setInputValue("");
  }

  console.log(todos, "furkan");
  

  return (
    <div className="firebase-todo-wrapper">
      <h1>FireBase Todo Application</h1>
      <form onSubmit={handleAddTodo}>
        <TextField
          id="todo"
          label="Create Todo"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add todo
        </Button>
      </form>
      <ul>
        {
            todos && todos.map(todoItem=> (
                <Todo todoItem={todoItem}/>
            ))
        }
      </ul>
    </div>
  );
}
