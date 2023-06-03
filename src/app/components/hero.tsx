import React from 'react'

export default function Hero(props:any) {
  return (
    <div>
      <p>Promotion</p>
      <h1 className='font-extrabold text-6xl'>
        {props}
      </h1>
    </div>
  )
}
