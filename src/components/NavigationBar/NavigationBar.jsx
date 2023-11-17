import './navigationBar.css'
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('header').clientHeight;

      if (window.scrollY > headerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className='logo'>
          <h1>Recipe Platform</h1>
        </div>
        <div className='nav'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/addrecipe'>Add Recipe</NavLink>
            </li>
            <li>
              <NavLink to='/login'>LogIn</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default NavigationBar
