import { NavLink } from 'react-router-dom';
 
function Navbar() {
   const navItems = [
     { path: '/', label: 'Counter' },
     { path: '/todo', label: 'TodoList' },
     { path: '/theme', label: 'ThemeToggle' },
     { path: '/cart', label: 'ShoppingCart' },
     { path: '/auth', label: 'Auth' },
     { path: '/users', label: 'UserList' },
     { path: '/advanced-counter', label: 'Advanced Counter' },
     { path: '/bmi', label: 'BMICalculator' },
     { path: '/events', label: 'EventManagement' },
   ];
   return (
     <nav className="bg-orange-600 p-4 shadow-md">
       <ul className="flex space-x-4 text-white">
         {navItems.map((item) => (
           <li key={item.path}>
             <NavLink
               to={item.path}
               className={({ isActive }) =>
                 isActive ? 'font-bold underline' : 'hover:underline'
               }
             >
               {item.label}
             </NavLink>
           </li>
         ))}
       </ul>
     </nav>
   );
 }
 export default Navbar;