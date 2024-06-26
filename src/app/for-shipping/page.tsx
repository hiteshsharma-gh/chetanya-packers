import { ContactUsForm } from '@/components/ContactUsForm'
import React from 'react'

function forShipping() {
  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <h2 className='text-4xl text-center font-semibold text-[#ED3237]'>For Shipping</h2 >
      <div className="lg:max-w-[50vw] mt-8 w-full mr-2 bg-[#ED3237] rounded-xl p-5 m-3">
        <ContactUsForm />
      </div>
    </section>
  )
}

export default forShipping
