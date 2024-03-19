import React from 'react'

const Resume = () => {
  return (
    <>
    <section className='h-auto bg-black'>
        <div className='text-white'>
          <div className='flex justify-center font-bold text-5xl p-14'>
            <h1>Resume</h1>
          </div>
          <div className='text-center'>
            <p className='text-lg  text-zinc-400'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic <br /> country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div className='flex'>
          <div className='Box text-white'>
                <div className='h-80 w-96 bg-b mx-32 mt-10 bg-neutral-800 p-7'>
                  <h2><span className='text-yellow-400 text-2xl font-extrabold'>2014-2015</span></h2>
                  <h3 className='text-2xl mt-4 font-semibold'>Master Degree of Design</h3>
                  <h3 className='text-xs mt-4'><span className='text-zinc-400 font-semibold'>C A M R B R I D G E U N I V E R S I T Y</span></h3>
                  <p className='text-zinc-400 text-lg mt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
          </div>
          <div className='Box text-white'>
                <div className='h-80 w-96 bg-b mx-20 mt-10 bg-neutral-800 p-7'>
                  <h2><span className='text-yellow-400 text-2xl font-extrabold'>2014-2015</span></h2>
                  <h3 className='text-2xl mt-4 font-semibold'>Art & Creative Director</h3>
                  <h3 className='text-xs mt-4'><span className='text-zinc-400 font-semibold'>C A M R B R I D G E U N I V E R S I T Y</span></h3>
                  <p className='text-zinc-400 text-lg mt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
          </div>
          </div>
          <section>
            <div className='flex ml-12'>
            <div className='Box text-white'>
                <div className='h-80 w-96 bg-b mx-20 mt-10 bg-neutral-800 p-7'>
                  <h2><span className='text-yellow-400 text-2xl font-extrabold'>2014-2015</span></h2>
                  <h3 className='text-2xl mt-4 font-semibold'>Bachelor's Degree of C.A</h3>
                  <h3 className='text-xs mt-4'><span className='text-zinc-400 font-semibold'>C A M R B R I D G E U N I V E R S I T Y</span></h3>
                  <p className='text-zinc-400 text-lg mt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
          </div>
            <div className='Box text-white ml-12'>
                <div className='h-80 w-96 bg-b mx-20 mt-10 bg-neutral-800 p-7'>
                  <h2><span className='text-yellow-400 text-2xl font-extrabold'>2014-2015</span></h2>
                  <h3 className='text-2xl mt-4 font-semibold'>Wordpress Developer</h3>
                  <h3 className='text-xs mt-4'><span className='text-zinc-400 font-semibold'>C A M R B R I D G E U N I V E R S I T Y</span></h3>
                  <p className='text-zinc-400 text-lg mt-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
          </div>
            </div>
            <div className='flex justify-center mt-10'>
            <button className='button rounded-full font-bold bg-yellow-400 text-black h-14 w-36'>
              Download Cv
            </button>
            </div>
          </section>
        </div>
    </section>
    </>
  )
}

export default Resume