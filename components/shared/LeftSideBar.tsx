import React from 'react'
import { sidebarLinks } from "@/constants/index";

const LeftSideBar = () => {
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((data)=>(
          <div>
            data
          </div>
        ))}
      </div>
    </section>
  )
}

export default LeftSideBar
