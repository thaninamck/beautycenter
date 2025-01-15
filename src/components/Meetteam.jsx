import React from 'react'
import bachgroundim from '/src/assets/bj.png'
import team from '/src/assets/meet the team pic.png'
const Meetteam = () => {
  return (
    <div className='bg-[#E1E1E0] bg-no-repeat flex p-20 '  style={{ backgroundImage: `url(${bachgroundim})` }}>
        
        <div className='  flex flex-col flex-wrap  space-y-4 justify-center '>
            <p className='text-black text-2xl font-normal'>ONE OF EVERYTHING VERY GOOD</p>
            <p className='text-black text-xl font-light '>We believe that healthy, beautiful skin makes for healthy, 
                beautiful minds. You’ll be able to browse our extensive selection 
                of products and services here on this site, but please feel 
                free to call us at (604) 945-7647 if you have any questions. </p>
        
            <button className='bg-[#8DC644] shadow-inner font-normal text-white rounded-lg self-start pl-3 pr-3 pt-1 pb-1'>MEET LUMINA SKINCARE TEAM</button>                
        </div>
            <img className="h-100" src={team} alt="team" />
    </div>
  )
}

export default Meetteam