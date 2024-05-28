import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../../store/navbarStore';
import React from 'react';

const Navbar = () => {
  const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
  const navbarData = dataNavbar(navbarItemActive);

  return (
    <nav className='hidden bg-color-primario sm:flex sm:flex-col sm:min-w-[200px]'>
      <aside className='flex items-center justify-center py-9'>
        <a href='#'></a>
      </aside>

      <ul className='flex flex-col gap-y-7 py-12'>
        {navbarData.nav.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={`flex flex-row hover:bg-color-secundario transition-transform transform-gpu hover:scale-110 justify-center mx-6 p-1 text-4xl rounded-full shadow-xl overflow-hidden bg-app-shade-2 text-black primary ease-in duration-200`}
            onClick={() => {
              selectedItemNavbar(item.id);
            }}
          >
            {item.icon}
            <span className={`ml-15 text-center font-medium`}>
              {/* Puedes agregar un texto aquí si deseas */}
            </span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
