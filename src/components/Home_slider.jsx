import React from 'react'
import product1 from '/src/assets/Product One.png';
import product2 from '/src/assets/Product two.png';
import product3 from '/src/assets/Product three.png';

const Home_slider = () => {
  return (
    <div className='bg-gradient-to-b from-[#DDDDDD] via-[#ECEBE9] via-70% to-[#E4E5E7] '>
        <p className='text-[#111203] font-semibold text-3xl pl-24 pt-20 '>DISCOVER OUR SERVICES</p>

        <div className='cards_slider flex justify-evenly mt-7'>
             <div className='card1 relative  '>
                <img src={product1} alt="botox image" />
                    <div className='bg-[#E1E1E0] m-1 absolute top-0 left-0  '>
                    <p className='text-[#3D4E0B] font-normal font-12 p-2'>Lumina's favorite</p>

                    </div>
                    <p className='absolute translate-x-28 top-1/2 text-white font-bold text-5xl  '>BOTTOX</p>
               
             </div>


             <div className='card2 relative  '>
                <img src={product2} alt="botox image" />
                    <div className='bg-[#E1E1E0] m-1 absolute top-0 left-0  '>
                    <p className='text-[#3D4E0B] font-normal font-12 p-2'>Lumina's favorite</p>

                    </div>
                    <p className='absolute translate-x-28 top-1/2 text-white font-bold text-5xl  '>LIP FILLERS</p>
               
             </div>

             <div className='card3 relative  '>
                <img src={product3} alt="botox image" />
                    <div className='bg-[#E1E1E0] m-1 absolute top-0 left-0  '>
                    <p className='text-[#3D4E0B] font-normal font-12 p-2'>Lumina's favorite</p>

                    </div>
                    <p className='absolute translate-x-28 top-1/2 text-white font-bold text-5xl  '>LASER</p>
               
             </div>
             

        </div>

    </div>
  )
}

export default Home_slider