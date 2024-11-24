import React from 'react'

const Button = ({title, action}) => {
  return (
    <div className='mt-10 cursor-pointer bg-blue-700 w-fit text-white rounded-lg px-10 py-3' onClick={action}>
      {title}
    </div>
  )
}

export default Button
