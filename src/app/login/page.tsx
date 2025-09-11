"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import React, { useEffect } from 'react'

const Page = () => {
    const { data: session } = useSession();
  const router = useRouter();
   useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <div className='bg-red-500'>
        {JSON.stringify(session)}
    </div>
  )
}

export default Page