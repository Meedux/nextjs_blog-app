import React from 'react'

const Footer = ({ style }) => {
  return (
    <footer className='bg-black p-6' style={style}>
        <h3 className="text-center text-white">&copy;opyright 2022</h3>
    </footer>
  )
}

Footer.defaultProps ={
    style:{}
}

export default Footer