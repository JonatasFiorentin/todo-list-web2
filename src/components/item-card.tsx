import { Trash } from 'lucide-react'

interface Todo {
  id: string
  text: string
  marcado: boolean
}

interface ItemCardProps {
  todo: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

const ItemCard: React.FC<ItemCardProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.marcado}
          className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          onChange={() => onToggle(todo.id)}
          aria-label={`Marcar como ${
            todo.marcado ? 'não concluído' : 'concluído'
          } ${todo.text}`}
        />
        <label
          className={`text-base font-medium ${
            todo.marcado ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button
        className="text-gray-400 hover:text-red-500 transition-colors"
        onClick={() => onDelete(todo.id)}
        aria-label={`Excluir a tarefa ${todo.text}`}
      >
        <Trash className="h-5 w-5" />
      </button>
    </li>
  )
}

export default ItemCard
