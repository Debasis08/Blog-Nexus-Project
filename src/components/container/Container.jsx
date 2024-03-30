import React from 'react'

function Container({children}) {
  return <div className='w-full h-full flex max-w-7xl pr-4'>
      {children}
    </div>;
}

export default Container
