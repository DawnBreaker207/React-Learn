import { Button, Stack } from "react-bootstrap"
import { UseCart } from "../contexts/CartContext"
import { formatCurrency } from "../utils/formatCurrency"
import { useContext } from "react"
import { ProductContext } from "../contexts/Product.Context"

type CartItemProps = {
  id: number | string,
  quantity: number
}
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = UseCart()
  const data = useContext(ProductContext)
  const item = data?.state.products.find(i => i._id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.thumbnail} style={{ width: "125px", height: "75px", objectFit: "cover" }} alt="" />
      <div className="me-auto">
        <div className="flex flex-row">
          <Button onClick={() => decreaseCartQuantity(item._id as string)}>-</Button>
          <div>
            <span className="text-muted" style={{ fontSize: ".65rem" }}>{quantity}</span>
          </div>
          <Button onClick={() => increaseCartQuantity(item._id as string)}>+</Button>
        </div>
        <div>
          {item.title} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>{formatCurrency(item.price)}</div>
      </div>
      <div>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item._id as string)}>&times;</Button>
    </Stack>
  )
}

export default CartItem