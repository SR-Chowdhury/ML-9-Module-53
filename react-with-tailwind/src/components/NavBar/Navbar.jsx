import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: 'Home',
      link: 'www.google.com'
    },
    {
      id: 2,
      name: 'About',
      link: 'www.google.com'
    },
    {
      id: 3,
      name: 'Login',
      link: 'www.google.com'
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-purple-100'>
      <div onClick={() => setOpen(!open)} className='md:hidden'>
        <span>
          {open === false ?
            <Bars3Icon className="h-6 w-6 text-purple-500" /> : <XMarkIcon className="h-6 w-6 text-purple-500" />
          }
        </span>
      </div>

      <ul className={`md:flex md:static bg-purple-100 duration-200 py-4 px-5 absolute list-none gap-4 ${open ? 'top-6' : '-top-36'}`}>
        {
          routes.map(route => <Link key={route.id} route={route} />)
        }
      </ul>

    </nav>
  );
};

export default Navbar;