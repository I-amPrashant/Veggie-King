import React from 'react'
import PropTypes from 'prop-types'

export default function menuItem(props) {
  return (
   
  <div className='w-full shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer origin-center text-center sm:text-start'>
            <div id="image_wrapper">
                <img src={props.image} alt={`image ${props.indexVal}`} className='h-auto max-h-[300px] w-full object-cover'/>
            </div>

            <div id="text_wrapper" className='p-3 sm:px-8 space-y-3'>
                <h1 className='font-bold text-2xl'>{props.dishName}</h1>
                <p className='text-gray-600'>{props.description}</p>
            </div>
    </div>
  )
}
