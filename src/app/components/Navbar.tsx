import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex lg:justify-end justify-center px-12 items-center lg:h-[130px] h-[100px]'>
      <ul className='flex lg:gap-9 sm:gap-16 gap-12 font-[500] text-xl'>
        <li>Work</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar