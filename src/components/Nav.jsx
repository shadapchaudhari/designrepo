import React from 'react'

const Nav = () => {
  return (
    <>
    <section>
        <nav className='md:flex justify-around h-full p-5 md:h-16 text-white  bg-black'>
            <div className='font-bold text-3xl'>
                Logo 
            </div>
            <ul className='space-x-10 md:flex text-lg'>
                <li><a href=""><span className='text-yellow-400 '>Home</span></a></li>
                <li><a href="">About</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">My Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </section>
    </>
  )
}

export default Nav