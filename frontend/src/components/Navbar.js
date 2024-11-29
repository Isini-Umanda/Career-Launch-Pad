import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ activePath, onNavClick }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'Courses', id: 'courses', path: '/AllCourses' },
    { name: 'Students', id: 'students', path: '/StuLogin' },
    { name: 'Universities', id: 'universities', path: '/UniLogin' }
  ];

  const handleNavClick = (item) => {
    onNavClick(item.id);
    navigate(item.path);
  };

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600">
          CareerLaunchPad
        </div>
        
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`hover:text-emerald-600 transition-colors duration-200
                ${activePath === item.id 
                  ? 'text-emerald-600 font-medium' 
                  : 'text-gray-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
