import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // Hook pour naviguer

  const handleNavigation = (path) => {
    navigate(path); // Navigue vers le path passé en paramètre
  };

  return (
    <>
    <div>
    <div className='upperheader flex justify-between bg-transparent'>
    <div className='content-center pl-3'>
    <h3 className='font-bold '>Ca</h3>
    </div>
    <a href=""> <img src="./src/assets/logo.png" alt="logo" /></a>
   
    <div className='links   flex justify-around items-center'>
       <a className='px-2' href=""><img src="./src/assets/profile.png" alt="profile" /></a> 
       <a className='px-2'href=""><img src="./src/assets/loop.png" alt="profile" /></a> 
       <a className='px-2'href=""><img src="./src/assets/shop.png" alt="profile" /></a> 

    </div>
    </div>
    <div className='lowerheader flex justify-evenly  justify-center bg-white mt-2 mb-1 h-12'>
    <a  className='text-black group-focus:text-green-800 hover:text-green-800'>Home</a>
    <a onClick={(e) => { e.preventDefault(); handleNavigation('/Services'); }} className='text-black group-focus:text-green-800 hover:text-green-800'>Services</a>
    <a href="" className='text-black group-focus:text-green-800 hover:text-green-800'>Product</a>
    <a href="" className='text-black group-focus:text-green-800 hover:text-green-800'>About us</a>



    </div>

    </div>
    
    
    
    </>
  )
}

export default Header