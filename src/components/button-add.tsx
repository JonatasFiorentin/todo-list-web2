import { useState } from 'react';

interface ButtonAddProps {
  onAdd: (todo: string) => void;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    onAdd(newTodo);
    setNewTodo('');
  };

  return (
    <div className="flex space-x-2 mb-6">
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Adicionar uma nova tarefa"
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Adicionar
      </button>
    </div>
  );
};

export default ButtonAdd;
