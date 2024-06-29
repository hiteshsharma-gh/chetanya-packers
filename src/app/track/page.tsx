'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useState, ChangeEvent } from 'react'

const Track: React.FC = () => {
  const [orderId, setOrderId] = useState('')
  const [response, setResponse] = useState<{ id: number, number: string, locations: string, time: Date }>()

  const handler = async () => {
    try {
      const result = await axios.post('/api/trackOrder', { orderId })
      setResponse(result.data.order)
    } catch (error) {
      console.error(error)
    }
    setOrderId('')
  }

  return (
    <section className='mt-8 flex flex-col justify-center items-center'>
      <h2 className='text-4xl text-center font-semibold text-cyan-500'>Track Consignment</h2>
      <div className='mt-8 px-5 flex justify-center items-center gap-5 w-full'>
        <Input
          className='w-2/4 lg:w-4/6'
          type='text'
          placeholder='Order ID'
          value={orderId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOrderId(e.target.value)}
        />
        <Button className='bg-amber-300 text-white' onClick={handler}>
          Submit
        </Button>
      </div>
      {!response ? (
        <div className='mt-5'>{'No Order Found'}</div>
      ) : (
        <div className='mt-5 flex flex-col gap-5 justify-center items-center'>
          <div>Order ID: {response.number}</div>
          <div>Location: {response.locations}</div>
        </div>
      )}
    </section>
  )
}

export default Track
