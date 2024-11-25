import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItem from "../../data/StoreItems.json"
import formatCurrency from './FormatCurrentcy'
import { useShoppingContext } from '../context/ShoppingContext'


function CartItem({id, quantity}) {
    const {cardItems, getItemQuantity, incrementCadr, decresCardItem, removeitem} = useShoppingContext()

    const item = storeItem.find((i) => i.id === id)
    if(item == null) return null
    const handelRemove = () => {
        removeitem(id)
    }


  return (
    <Stack direction='horizontal' className='d-flex align-items-center' gap={2}>

        <img src=""
        style={{width : "125px" , height : "75px", objectFit : "cover"}}
        />
        <div className='me-auto'>
            <div>
                {item.title} {" "}
                {quantity > 1 && <span className='text-muted' style={{fontSize : "0.65rem"}}>x {quantity}</span> }
            </div>
            <div className='text-muted' style={{fontSize : "0.75rem"}}>
                {formatCurrency(item.price)}
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
        </div>
        <Button variant='autline-danger' size='sm' onClick={handelRemove}>
            X
        </Button>
    </Stack>
  )
}

export default CartItem