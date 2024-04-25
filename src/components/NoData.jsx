import React from 'react'

export const NoData = (props) => {
  return (
    <div className='mx-auto mb-6 mt-2 text-center '>
      <h1 className='font-bold text-2xl  dark:text-white my-5'>No { props.name } Yet </h1>
      <img src="/noData.jpg" alt="image" className='w-[900px]' />

    </div>)
}
