import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllCustomer } from '@/actions/customer';

export default async function BasicDemo() {
  const customers = await getAllCustomer()

  return (
    <div className="card mt-8">
      <DataTable value={customers} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="contact" header="Contact"></Column>
      </DataTable>
    </div>
  );
}

