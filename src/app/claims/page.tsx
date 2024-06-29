import Link from 'next/link'
import React from 'react'

function claims() {
  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <h2 className='text-3xl text-center font-semibold text-cyan-500'>Claims</h2 >
      <p className='px-10 mt-5'>We promise our customers an intact shifting, but due to any unforeseen act or for any other un intentional reason if at all claims arose. Then we have to following the below procedure of claim setlement.</p>
      <h3 className='text-3xl mt-8 text-center font-semibold text-cyan-500'>Procedure to Settle Claims</h3>
      <ul className='mt-5 self-start px-10'>
        <li>1. By conducting a survey of damaged goods, arrive at the density of the claim.</li>
        <li>2. By getting the minor damages repaired</li>
        <li>3. By offering a compensation payment for the goods not repairable at branch level itself.</li>
        <li>4. By involving of senior staff of the claims department for the cases which are not settled at branch level.</li>
      </ul>
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
          <Link href='mailto:claims@chaitanyainternationalpackers.com'>
            <p>
              claims@chaitanyainternationalpackers.com
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default claims
