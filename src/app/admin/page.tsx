import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function admin() {
  const session = await getServerSession(authOptions)

  if (session && session.user.id) {
    return (
      <div>admin</div>
    )
  }

  redirect('/api/auth/signin')
}

export default admin
