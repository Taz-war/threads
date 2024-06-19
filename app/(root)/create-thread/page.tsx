import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const page =async () => {
    const user =await currentUser();

    if (!user) return null
  return (
    <h1 className='head-text'>Create thread</h1>
  )
}

export default page