import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'

async function admin() {
  const session = await getServerSession()
  console.log(session)

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }

  return (
    <div>admin</div>
  )
}

export default admin
