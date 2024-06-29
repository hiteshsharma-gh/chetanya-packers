import Link from 'next/link'
import React from 'react'

function contactUs() {
  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <h2 className='text-4xl text-center font-semibold text-cyan-500'>Contact Us</h2 >
      <div className='mt-5 flex flex-col p-5 rounded-lg items-center text-black text-md font-medium bg-amber-300'>
        <div className='flex gap-5 self-start'>
          <p>Mobile No.: </p>
          <Link href='tel:9309147622'>
            <p>
              9309147622
            </p>
          </Link>
        </div>
        <div className='flex gap-5 self-start'>
          <p>Email: </p>
          <Link href='mailto:info@chaitanyainternationalpackers.com'>
            <p>
              info@chaitanyainternationalpackers.com
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default contactUs
