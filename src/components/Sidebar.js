import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links, Links2 } from '../data/dummy'
import Logo from "../asset/logo.png"




const Sidebar = () => {
  
  const normalLink = 'flex items-center gap-5 pl-4  pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:text-red hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ">
     
          <div className='w-[17rem] h-[5.5rem] shadow-lg border-b'>
            <Link to="/">
              <img src={Logo} alt='logo' className='w-[13rem] h-[2.5rem] object-contain top-5 relative' />
            </Link>
          
           
          </div>
          
         
          <div className=" h-[56.4rem] w-[17rem] shadow-lg border-b">
          <p className='m-3 text-gray-400 dark:text-gray-400'>Main Menu</p>
            {links.map((item) => (
              <div key={item.title}>
                    
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
            
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    
                  
                    className={() => ( normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
              </div>
            
        <div className=' mt-20 h-[7.5rem] w-[15rem] shadow-xl  border-b-8'>
            {Links2.map((item) => (
              <div key={item.title}>
                {item.Links2.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    
                  
                    className={() => ( normalLink)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>
               
            ))}
            </div> 
        
         
    
    
    </div>
  );
};

export default Sidebar