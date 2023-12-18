import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      {/* LOGO */}
      <div>
        <Link href="/">Massimo</Link>
      </div>
      {/*  */}
      <div>
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar