import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { loadTodo, deleteTodo } from './Redux/todoRedux/todo.actions';  
import { TODO_KEY } from './Redux/todoRedux/todo.reducer';  
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';  

const TodoApp = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(loadTodo({
        id: uuidv4(),
        todoItem: text
      }));
      setText('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const viewTodo = useSelector((state) => state[TODO_KEY].todos || []);

  return (
    <React.Fragment>
      <div className="bg-blue-200 mt-10 rounded-lg mx-10 shadow-lg p-4">
        {/* Header */}
        <div className='bg-yellow-500 h-16 flex justify-center items-center rounded-lg'>
          <p className="uppercase font-bold text-3xl text-black">Todo List</p>
        </div>

        {/* Body */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className='flex justify-center mt-5'>
              <input
                name='todo'
                value={text}
                onChange={handleChange}
                type='text'
                placeholder='Enter todo'
                className='p-2 rounded-l-lg w-9/12 focus:outline-none bg-white text-black border-2 border-yellow-500'
              />
              <button type='submit' className='bg-green-500 rounded-r-lg px-2'>
                <FaPlusCircle className='text-white text-3xl' />
              </button>
            </div>
          </form>

          {/* Todo Items */}
          <div>
            {viewTodo.length > 0 ? (
              viewTodo.map((todo) => (
                <div key={todo.id} className='flex justify-center mt-5'>
                  <ul className='bg-purple-300 w-9/12 rounded-l-lg'>
                    <li className='text-xl pl-2 text-black'>{todo.todoItem}</li>
                  </ul>
                  <button onClick={() => handleDelete(todo.id)} className='bg-red-500 rounded-r-lg px-2'>
                    <FaMinusCircle className='text-white text-3xl' />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-black mt-4">No todos available.</p>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
