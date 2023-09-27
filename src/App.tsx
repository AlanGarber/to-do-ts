import { useState } from "react"
import { Todos } from "./assets/components/Todos"
import { TodoId, type Todo as TodoType } from "./types"

const ejemploTodos = [
  {
    id: '1',
    title: 'Aprender React',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Practicar Fisica',
    completed: false
  }
]



const App = (): JSX.Element => {
  const [todos, setTodos] = useState(ejemploTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos todos={todos}
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
