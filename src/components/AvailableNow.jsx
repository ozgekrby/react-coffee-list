import React from 'react'
import CoffeeCard from './CoffeeCard';

export default function AvailableNow({filterData}) {
 
  return (
    <div>
      <CoffeeCard data={filterData}/>
    </div>
  );
}
