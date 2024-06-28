import { AdminMenubar } from '@/components/Menubar';
import React from 'react';
import { PrimeReactProvider } from 'primereact/api';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrimeReactProvider>
      <section className='mt-8 flex flex-col justify-center items-center'>
        <h2 className='text-4xl text-center font-semibold text-cyan-500'>Admin</h2 >
        <div className='mt-8'>
          <AdminMenubar />
        </div>
        {children}
      </section>
    </PrimeReactProvider>
  )
}
