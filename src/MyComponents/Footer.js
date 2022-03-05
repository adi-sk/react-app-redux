import React from 'react'

export default function Footer() {

  let footerStyle = {
    position: "relative",
    top : "100vh",
    width : "100%"
  }

  return (
    <div>
      <footer className='bg-dark text-light py-3' style={footerStyle}>
        Copyright &copy; list.com
      </footer>
    </div>
  )
}
