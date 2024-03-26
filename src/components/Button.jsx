import React from 'react'

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-theme-300',
    textSize = 'text-xl',
    textColor = 'text-theme-400',
    className = '',
    ...props
}) {
  return (
    <button className= {`px-4 py-2 rounded-lg ${className} ${textSize} ${bgColor} ${textColor}`} {...props}>
      {children}
    </button>
  )
}