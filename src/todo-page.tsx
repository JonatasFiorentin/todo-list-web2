import { useState } from 'react'
import ButtonAdd from './components/button-add'
import ItemCard from './components/item-card'

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Estudar React', marcado: false },
    { id: '2', text: 'Fazer compras', marcado: false },
    { id: '3', text: 'Ler um livro', marcado: true },
  ])
  const addTodo = (newTodo: any) => {
    const newTodoItem = {
      id: (todos.length + 1).toString(),
      text: newTodo,
      marcado: false,
    }
    setTodos([...todos, newTodoItem])
  }
  const deleteTodo = (id: any) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: any) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, marcado: !todo.marcado } : todo
    ))
  }

  return (
    <div className="container mx-auto p-6 max-w-md bg-white shadow-lg rounded-lg">
      <p className="text-4xl font-bold mb-6 text-center text-red-600">Todo List</p>
      <ButtonAdd onAdd={addTodo} />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <ItemCard 
            key={todo.id} 
            todo={todo} 
            onDelete={deleteTodo} 
            onToggle={toggleTodo} 
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
