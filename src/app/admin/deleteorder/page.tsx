'use client'

import React, { useState } from 'react';
import axios from "axios"
import { Button } from '@/components/ui/button'; // Import your Button component
import { Input } from '@/components/ui/input'; // Import your Input component

function DeleteOrder() {
  const [orderId, setOrderId] = useState(''); // State for orderId

  const handleAddOrder = async () => {
    try {
      const response = await axios.delete('/api/order', {
        data: {
          orderId
        }
      })

      setOrderId('')

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
      <Button onClick={handleAddOrder} className='bg-amber-300'>Delete</Button>
    </div>
  );
}

export default DeleteOrder;
