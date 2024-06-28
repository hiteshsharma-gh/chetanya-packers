import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function admin() {
  const session = await getServerSession()
  console.log(session)

  if (!session || !session.user) {
    return redirect('/api/auth/signin')
  }

  return
}

export default admin
