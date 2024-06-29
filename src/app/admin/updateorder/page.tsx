'use client'

import React, { useState } from 'react';
import axios from "axios"
import { Button } from '@/components/ui/button'; // Import your Button component
import { Input } from '@/components/ui/input'; // Import your Input component

function UpdateOrder() {
  const [orderId, setOrderId] = useState(''); // State for orderId
  const [location, setLocation] = useState(''); // State for location

  const handleAddOrder = async () => {
    try {
      const response = await axios.put('/api/order', {
        orderId,
        location
      })

      setOrderId('')
      setLocation('')

      return response
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className='mt-8 flex gap-10'>
      <Input
        type='text'
        placeholder='orderId'
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <Input
        type='text'
        placeholder='location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button onClick={handleAddOrder} className='bg-amber-300'>Update</Button>
    </div>
  );
}

export default UpdateOrder;
