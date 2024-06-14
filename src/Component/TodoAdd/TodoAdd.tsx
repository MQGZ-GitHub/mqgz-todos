import "./TodoAdd.css"
import { useRef, useState } from "react"
// 属性的类型
type Props = {
  onAddTodo(content: string): void
}

export const TodoAdd = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>("")
  const onAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value === "") return alert('输入框内容为空！！！')
      setValue(inputRef.current.value)
      console.log(inputRef.current.value)
      props.onAddTodo(value)
    }
  }
  return (
    <div className="todo-add-container">
      <input onKeyUp={onAdd} ref={inputRef} type="text" className="todo-add-input" placeholder="What needs to be done?"/>
    </div>
  )
}