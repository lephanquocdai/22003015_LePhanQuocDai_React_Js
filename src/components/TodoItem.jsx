// src/components/TodoItem.js
function TodoItem({ todo, index, onToggle, onDelete }) {
    return (
      <li className="flex justify-between items-center border-b py-2">
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {index + 1}. {todo.text}
        </span>
  
        <div className="flex items-center">
          <button
            onClick={() => onToggle(todo.id)}
            className={`text-${todo.completed ? 'yellow' : 'green'}-500 hover:text-${todo.completed ? 'yellow' : 'green'}-700 mr-2`}
          >
            {todo.completed ? 'Chưa hoàn thành' : 'Hoàn thành'}
          </button>
  
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Xoá
          </button>
        </div>
      </li>
    );
  }
  
  export default TodoItem;
  