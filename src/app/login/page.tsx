"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Page = () => {
    const session = useSession()
  return (
    <div className='bg-red-500'>
        {JSON.stringify(session)}
    </div>
  )
}

export default Page