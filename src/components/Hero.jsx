import React from 'react'

const Hero = () => {
  return (
        <>
        <div className="Hero-section">
            <div className="md:grid grid-cols-2 h-screen bg-black">
                <div className="grid-col-1 text-white md:ml-20 md:mt-36">
                    <h2 className='text-yellow-400'>Hello!</h2>
                    <h1 className='mt-5 md:text-7xl text-4xl font-bold'>I'm a <span className='text-yellow-400'>web</span> <br /><span className='text-yellow-400'>designer</span> based <br />in London</h1>
                    <button className='button rounded-3xl bg-yellow-400 font-semibold uppercase text-sm  text-black mt-7 h-12 w-28'><a href="">Hire Me</a></button>
                    <button className='button rounded-3xl border mt-7 h-12 font-semibold uppercase text-sm w-32 md:ml-3'><a href="">My works</a></button>
                </div>
                <div className="grid-col-1">
                    <img className='w-full h-full'  src="/public/img/img.png" alt="logo" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero