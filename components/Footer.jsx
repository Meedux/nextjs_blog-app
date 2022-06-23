import React from 'react'

const Footer = ({ style }) => {
  return (
    <footer className={`bg-dark p-3`} style={style}>
        <h3 className="text-center text-light">&copy;opyright 2022</h3>
    </footer>
  )
}

Footer.defaultProps ={
    style:{}
}

export default Footer