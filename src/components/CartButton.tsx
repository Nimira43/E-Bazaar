import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function CartButton() {
  const numItemsInCart = 8
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link to='/cart'>
        <ShoppingCart />
        <span className='absolute -top-3 -right-3 bg-[#ff4500] text-[#fafafa] rounded-full h-6 w-6 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
