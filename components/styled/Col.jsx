import React from 'react'

const Col = ({children, style}) => {
  return (
    <div className={`flex-1 inline-block ${style}`}>
        {children}
    </div>
  )
}

Col.defaultProps = {
    style: ''
}

export default Col