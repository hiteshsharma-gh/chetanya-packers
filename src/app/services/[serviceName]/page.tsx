'use client'

import { ContactUsForm } from '@/components/ContactUsForm'
import { redirect } from 'next/navigation';
import React from 'react'

const servicesArr = ['domestic', 'corporate', 'international', 'local', 'bulk', 'others']

function services({ params }: { params: { serviceName: string } }) {

  const handleClick = () => {
    redirect('/')
  };

  if (!servicesArr.includes(params.serviceName)) {
    return (
      <section className="my-20 text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg dark:text-white">Oops! Page Not Found.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <button onClick={handleClick}>
          <div className="mt-2 inline-block rounded bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600 dark:text-white">
            Go back to Home
          </div>
        </button>
      </section>
    )
  }
  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <div className='text-4xl text-center font-semibold text-cyan-500'>{params.serviceName.toUpperCase() + " SERVICES"}</div >
      <div className="lg:max-w-[50vw] mt-8 w-full mr-2 bg-cyan-500 rounded-xl p-5 m-3">
        <ContactUsForm />
      </div>
    </section>
  )
}

export default services
