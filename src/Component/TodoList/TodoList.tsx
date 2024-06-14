import "./TodoList.css"
import { useRef } from "react"
import { todoItem } from "../../todo"

interface Props {
  todosList: todoItem[]
}

export const TodoList = (props: Props) => {
  const checkRef = useRef<HTMLSpanElement>(null)
  // 复选框
  const checkedHandler = () => {
    if (checkRef.current) {
      checkRef.current.classList.toggle("icon-circle")
    }
  }
  const delRef = useRef<HTMLSpanElement>(null)
  // 鼠标经过显示删除图标
  const showDelete = () => {
    if (delRef.current) {
      delRef.current.classList.add("icon-trash")
    }
  }
  // 鼠标离开隐藏删除图标
  const hideDelete = () => {
    if (delRef.current) {
      delRef.current.classList.remove("icon-trash")
    }
  }
  return (
    <div className="todo-list-container">
      {
        props.todosList.map(item => {
          return (
            <div className="todo-item" onMouseEnter={showDelete} onMouseLeave={hideDelete} key={item.id}>
              <span className="check-box" onClick={checkedHandler} ref={checkRef}></span>
              <span className={`to-do-list ${item.done && 'completed'}`}>{item.content}</span>
              <span className="delete" ref={delRef}></span>
            </div>
          )
        })
      }
    </div>
  )
}