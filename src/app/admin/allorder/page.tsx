import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { allOrders } from '@/actions/Orders';

export default async function BasicDemo() {
  const order = await allOrders()

  return (
    <div className="card mt-8">
      <DataTable value={order} tableStyle={{ minWidth: '20rem' }}>
        <Column field="number" header="OrderId"></Column>
        <Column field="locations" header="Location"></Column>
      </DataTable>
    </div>
  );
}

