import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
       <Navbar />
       <div className="container mx-auto p-4">
         <Routes>
           <Route path="/" element={<Counter />}/>
           <Route path="/todo" element={<TodoList />}/>
         </Routes>
       </div>
       </div>
   );
 }
export default App;