import React from 'react'

const Main = () => {
  return (
    <>
    <section>
        <div className="Main-container bg-black h-screen">
            <div className="md:grid grid-cols-2 p-10">
                <div> 
                <img className='w-full h-full'  src="/public/img/img.png" alt="logo" />
                </div>
                <div className='text-white'>
                    <h1 className=' font-bold text-5xl'>About Me</h1>
                    <p className='text-lg mt-10  text-zinc-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className='flex space-x-10 mt-10'>
                    <div>
                        <h2 className='mt-3 text-lg font-bold'>Name:</h2>
                        <h2 className='mt-3 text-lg font-bold'>Date of birth:</h2>
                        <h2 className='mt-3 text-lg font-bold'>Address:</h2>
                        <h2 className='mt-3 text-lg font-bold'>Zip code:</h2>
                        <h2 className='mt-3 text-lg font-bold'>Email:</h2>
                        <h2 className='mt-3 text-lg font-bold'>phone:</h2>
                    </div>
                    <div>
                        <h3 className='mt-3 text-lg  text-zinc-400'>Clark thompson</h3>
                        <h3 className='mt-3 text-lg  text-zinc-400'>January 01, 1987</h3>
                        <h3 className='mt-3 text-lg  text-zinc-400'>San francisco ca 97987 USA</h3>
                        <h3 className='mt-3 text-lg  text-zinc-400'>1000</h3>
                        <h3 className='mt-3 text-lg  text-zinc-400'>Clarkthompson@gmail.com</h3>
                        <h3 className='mt-3 text-lg  text-zinc-400'>+1-2234-5678-9-0</h3>
                    </div>
                    </div>
                    <h1 className='mt-7 text-xl font-semibold'><span className='text-yellow-400'>120 </span>Project complete</h1>
                    <button className='button mt-7  bg-yellow-400 text-black text-xs font-bold rounded-3xl h-12 w-36'>DOWNLOAD CV</button>
                </div>
            </div>
        </div> 
    </section>
    </>

    )
}

export default Main