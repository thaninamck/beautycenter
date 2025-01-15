import React from 'react'

const Footer = ({links}) => {
  return (
    <div className='bg-[#F5F7CA]  h-[600px]'>

    <div className='ml-20 ' >
        <p className='text-black font-semibold text-4xl pt-8'>SIGN UP FOR UPDATES</p>
        <form action="" className='flex my-6'>
            <input type="text" className=' mr-2 h-[55px] w-[573px] bg-transparent border rounded-md border-black'/>
            <input type="button" className='text-black font-semibold *:h-[55px] w-[120px] bg-transparent border rounded-md border-black' value="SUBMIT"/>
        </form>
    </div>
   
    <div className="flex justify-evenly gap--2 items-center font-bold text-black">
       { links.map((link,index)=>(
        <p class="-mx-20">{links}</p>
  
       )
       
       )

        }
  
</div>



    </div>
  )
}

export default Footer