import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState<{ username: string } | null>({
    username: 'Test User',
  })

  const handleLogout = () => {
    navigate('/')
    setUser(null)
  }

  return (
    <header>
      <div className='align-element flex justify-center sm:justify-end py-2'>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hi, {user.username}</p>
            <Button
              className='uppercase'
              size='sm'
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center -mr-4 uppercase'>
            <Button asChild size='sm'>
              <Link to='/login'>Sign In</Link>
            </Button> 
            <Button asChild size='sm'>
              <Link to='/register'>Register</Link>
            </Button> 
          </div>
        )}
      </div> 
    </header>
  )
}

export default Header

