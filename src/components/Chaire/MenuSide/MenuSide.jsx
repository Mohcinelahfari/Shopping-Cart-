import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingContext } from '../../context/ShoppingContext'
import CartItem from '../CartItem'
import formatCurrency from '../FormatCurrentcy'
import storeItem from "../../../data/StoreItems.json"
function MenuSide({isOpen}) {
    const {cardItems, getItemQuantity, incrementCadr, decresCardItem, removeitem,  openCard, isCloseCard} = useShoppingContext()

  return (
    
    <Offcanvas show={isOpen} onHide={isCloseCard} placement='end' >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>cardItems</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Stack gap={3}>
        {cardItems.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}
        <div className='ms-auto fw-bold fs-5'>
          Total :
          {
            formatCurrency(
              cardItems.reduce((total, cartitem) => {
                const item = storeItem.find((i) => i.id === cartitem.id)
                return total + (item?.price || 0) * cartitem.quantity;
              },0)
            )
          }
        </div>
        </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default MenuSide