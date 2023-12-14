import React, {useState} from 'react'
import logo from  "../assets/icons/logo.svg";
import hamburger from '../assets/icons/burger-menu-right-svgrepo-com.svg'
import closeButton from '../assets/icons/close-menu-icon.svg'

export default function Header({scrollToSection}) {
  const [expanded, setExpanded]=useState(false)
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };


  return (  
    <div className='bg-white flex items-center justify-between px-3 py-7 sm:px-5  md:px-7 shadow-lg'>
      <div id="logo-wrapper">
        <img src={logo} alt="logo" className="max-w-[170px]"/>
      </div>

      <div  id='nav_item'>
        <span className='sm:hidden' ><img src={hamburger} alt="open_menu" className='h-10 w-10 font-bold cursor-pointer' id="open_nav"onClick={toggleSidebar} /></span>
          <ul  id='navItem' className={`transition-[right] duration-500 fixed right-[-250px] top-0 space-y-5 pt-32 pl-9 border-l-2 border-l-gray-500 sm:border-0 border-opacity-25 bg-white  w-[250px] z-50 h-screen sm:right-0 sm:relative sm:pt-0 sm:pl-0 sm:w-max sm:bg-inherit sm:text-black sm:h-min sm:space-y-0 sm:flex gap-10 items-center list-none font-medium text-lg ${expanded?"right-[0px]":"right-[-250px]"}`}>
            <img src={closeButton} alt="close_nav" className='absolute top-2 left-8 sm:hidden cursor-pointer' onClick={toggleSidebar}/>
            <li className='uppercase cursor-pointer'><a onClick={() => {scrollToSection('about'); setExpanded(false)}}>About us</a></li>
            <li className='uppercase cursor-pointer'><a onClick={() => {scrollToSection('menu');setExpanded(false)}}>menu</a></li>
            <li className='uppercase cursor-pointer'><a onClick={() => {scrollToSection('contact');setExpanded(false)}}>contact</a></li>
          </ul>
      </div>
    </div>
  
  )
}
