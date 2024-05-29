import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <ul className='flex justify-between m-10 items-center'>
        <div>
          <Link href={'/'}>
            <li>Next Auth</li>
          </Link>
        </div>
        <div className='flex gap-10'>
          <Link href={'/home'}>
            <li>Home</li>
          </Link>
          <Link href={'/login'}>
            <li>Login</li>
          </Link>
          <Link href={'/register'}>
            <li>Register</li>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Header