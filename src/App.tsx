import React, { useEffect, useState } from "react"
import "./App.css"
import { TodoList } from "./Component/TodoList/TodoList"
import { TodoAdd } from "./Component/TodoAdd/TodoAdd"
import { TodoOperate } from "./Component/TodosOperate/TodoOperate"
import { todoItem } from "./todo"



const todoList:todoItem[] = [
  {
    id: 1,
    content: "吃饭",
    done: true
  },
  {
    id: 2,
    content: "睡觉",
    done: false
  },
  {
    id: 3,
    content: "学习",
    done: true
  },
  {
    id: 4,
    content: "打游戏",
    done: true
  }

]

function App() {
  const [todo, setTodo] = useState<todoItem[]>([])
  useEffect(() => {
    setTodo(todoList)
  }, [])
  return (
    <div className="App">
      <div className="todos-container">
        <div className="todos-header">
          <div className="logo">todos</div>
        </div>
        <div className="todos-body">
          <div className="todos-input">
            <TodoAdd  onAddTodo={content => {}}/>
          </div>
          <div className="todos-list">
            <TodoList  todosList={todo}/>
          </div>
          <div className="todos-operate">
            <TodoOperate todosList={todo}/>
          </div>
        </div>
        <div className="todos-footer">
          <div className="todos-representations">
            <span>Double-click to edit a todo </span>
            <span>Created by 魔情公子 </span>
            <span>Part of TodoMVC</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
