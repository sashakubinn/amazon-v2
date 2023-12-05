import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const AddToCartInline: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const currentItem = items.find(cartItem => cartItem.id === product.id)
	return (
		<div>
			<Button
				variant='orange'
				onClick={() =>
					currentItem
						? removeFromCart({ id: currentItem.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price,
						  })
				}
			>
				{' '}
				{currentItem ? 'Remove from Cart' : 'Add to Cart'}
			</Button>
		</div>
	)
}

export default AddToCartInline
