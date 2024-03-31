import React from 'react'

function Container({children}) {
  return <div className='w-full h-full flex justify-center max-w-7xl'>
      {children}
    </div>;
}

export default Container
