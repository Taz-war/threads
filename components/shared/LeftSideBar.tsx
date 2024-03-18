"use client"
import React from 'react'
import { sidebarLinks } from "@/constants/index";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from '@clerk/nextjs';

const LeftSideBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((data) => {
          const isActive = (pathname.includes(data.route) && data.route.length > 1) || pathname === data.route
          return (
            <Link href={data.route} key={data.label} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={data.imgURL} alt={data.label} width={24} height={24} />
              <p className=' text-light-1 max-lg:hidden'>{data.label}</p>
            </Link>
          )
        })}
      </div>
      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
            <div className=' flex cursor-pointer gap-4 p-4'>
              <Image src={"/assets/logout.svg"} alt='logout' width={24} height={24} />
              <p className=' text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSideBar
