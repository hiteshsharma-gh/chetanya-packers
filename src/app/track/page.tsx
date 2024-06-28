'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function track() {
  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <h2 className='text-4xl text-center font-semibold text-cyan-500'>Track Consignment</h2 >
      <div className='mt-8 px-5 flex justify-center items-center gap-5 w-full'>
        <Input className='w-2/4 lg:w-4/6' />
        <Button className='bg-amber-300 text-white'>
          Submit
        </Button>
      </div>
    </section>
  )
}

export default track
