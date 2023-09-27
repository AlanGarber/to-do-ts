import { useState } from "react"
import { Todos } from "./assets/components/Todos"

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos todos={todos} 
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
