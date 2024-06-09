import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useState } from "react"

function Header() {
    const navigate = useNavigate()

    const [user, setUser] = useState < { username: string } | null> ({
        username: 'demo user',
    })
  
    const handleLogout = () => {
        setUser(null)
        navigate('/')
  }
    return (
        <header className="bg-[#ddeaef]">
            <div className='align-element flex justify-center sm:justify-end py-2 text-[#ff4500]'>
                {user ?
                    <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                        <p className="text-xs sm:text-sm">Hello {user.username}</p>
                        <Button
                            className="text-[#ff4500]"
                            variant='link'
                            size='sm'
                            onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                    :
                    <div className='Flex gap-x-6 justify-center items-center -mr-4'>
                        <Button asChild variant='link' size='sm'>
                            <Link to='/login'>
                                Sign In / Guest
                            </Link>
                        </Button>
                        <Button asChild variant='link' size='sm'>
                            <Link to='/register'>
                                Register
                            </Link>
                        </Button>
                    </div>}
            </div>
        </header>
    )
}

export default Header
