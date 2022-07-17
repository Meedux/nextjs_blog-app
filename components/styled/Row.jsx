import React from 'react'

const Row = ({children, style}) => {
  return (
    <div className={`flex ${style}`}>
        {children}
    </div>
  )
}

Row.defaultProps = {
    styke: ''
}

export default Row