import React from 'react'

const Button = ({title, action}) => {
  return (
    <button className='mt-5 flex items-center justify-center m-auto cursor-pointer w-full bg-blue-700 text-white rounded-lg px-10 py-3' onClick={action}>
      {title}
    </button>
  )
}

export default Button
