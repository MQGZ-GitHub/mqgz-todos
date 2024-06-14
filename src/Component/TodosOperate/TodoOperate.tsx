import "./TodoOperate.css"

type todoItem = {
  id: number,
  content: string,
  done: boolean
}

interface Props {
  todosList: todoItem[]
}
export const TodoOperate = (props: Props) => {
  return(
    <div className="todo-operate-container">
      <div>
        <strong>{props.todosList.length}</strong> items left(待办事项)
      </div>
      <div className="active">All(所有)</div>
      <div>Active(活动)</div>
      <div>Completed(完成)</div>
    </div>
  )
}