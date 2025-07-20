import React, { useState } from 'react'
import assets from '../assets/assets';

const ProfilePage = () => {
 
  const[selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate();
  const[name, setName] = useState("Martin Johnson")
  const[bio, setBio] = useState("Hi Everyone, I am using QuickChat")

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-smm:flex-col-reverse rounded-lg'>
        <form className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg '>Profile details </h3>
          <label htmlFor="avatar" className='flex item-center gap-3 cursor-pointer'>
            <input onChange={(e)=>setSelectedImg(e.target.files[0]) } type="flie" id='avatar' accept='.png, .jpeg, jpg' hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
            Upolad Profile Image
          </label>
        </form>
        <img src="" alt="" />
      </div>
      
    </div>
  )
}

export default ProfilePage
