import React from 'react'
import PropTypes from 'prop-types'

export default function ImageItem(props) {
  return (
    <div id="image_wrapper" className='h-max w-full'>
        <img src={props.galleryImage} alt={`image ${props.indexValue}`} className='object-cover h-auto w-full'/>
    </div>
  )
}
