import React from 'react'
import CoffeeCard from './CoffeeCard'

export default function AllProducts({data}) {
  return (
    <div>
      <CoffeeCard data={data}/>
    </div>
  )
}
