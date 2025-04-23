import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleCompleted } from '../features/todoSlice';


function TodoList() {
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all'); 
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; 
  });


  const totalTodos = filteredTodos.length;
  const completedTodos = filteredTodos.filter(todo => todo.completed).length;

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText(''); 
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id)); 
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType); 
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Danh sách công việc</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Nhập công việc mới"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded mr-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Tất cả
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          className={`px-4 py-2 rounded mr-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Đã hoàn thành
        </button>
        <button
          onClick={() => handleFilterChange('incomplete')}
          className={`px-4 py-2 rounded ${filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Chưa hoàn thành
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo, index) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span className={todo.completed ? 'line-through text-gray-400' : ''}>
              {index + 1}. {todo.text}
            </span>

            <button
              onClick={() => handleToggleCompleted(todo.id)}
              className={`text-${todo.completed ? 'yellow' : 'green'}-500 hover:text-${todo.completed ? 'yellow' : 'green'}-700 mr-2`}
            >
              {todo.completed ? 'Chưa hoàn thành' : 'Hoàn thành'}
            </button>

            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="font-bold">Tổng số công việc: {totalTodos}</p>
        <p className="font-bold">Số công việc hoàn thành: {completedTodos}</p>
      </div>
    </div>
  );
}

export default TodoList;
