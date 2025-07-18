import React from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? "max-md:hidden" : ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt="logo" className='max-w-40' />
          <div className="relative group cursor-pointer">
            <img src={assets.menu_icon} alt="menu" className='max-h-5' />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black p-2 rounded shadow-md z-10">
              <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-gray-300' />
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
