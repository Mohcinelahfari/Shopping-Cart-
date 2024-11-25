import React from 'react'
import { Button, Card, CardBody } from 'react-bootstrap'


import formatCurrency from '../FormatCurrentcy';
import { useShoppingContext } from '../../context/ShoppingContext';
function SoteItem({id, title,price,images}) {
    const {cardItems, getItemQuantity, incrementCadr, decresCardItem, removeitem} = useShoppingContext()

      let quantity =getItemQuantity(id);
      const handelincrement = () => {
        incrementCadr(id)
      }

      const handelDeccrement = () => {
        decresCardItem(id)
      }

      const handelremoveItem = () => {
        removeitem(id)
      }
  return (
    <>
    <Card className='h-100'>
        <Card.Img src="" alt={title} style={{height : "200px" , objectFit : "cover"}} variant='top' />
        <CardBody>
            <Card.Title className='d-flex justify-content-beetween align-items-baseline'>
                <span className='fs-2'>
                {title}
                </span>
                <span className='text-muted me-2'>
                    {formatCurrency(price)}
                </span>
            </Card.Title>
            <div className='mt-auto'>
                {
                    quantity === 0 ? <Button className='w-100' onClick={handelincrement}>Add To Card</Button> : 
                    (
                        <div className='d-flex align-items-center flex-column' style={{gap : "0.5rem"}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap : "0.5rem"}}>
                                <Button onClick={handelDeccrement}>-</Button>
                                <span className='fs-3'>{quantity} in items</span>
                                <Button onClick={handelincrement}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={handelremoveItem}>Remove</Button>
                        </div>
                    )
                }
            </div>
        </CardBody>
    </Card>
    </>
  )
}

export default SoteItem