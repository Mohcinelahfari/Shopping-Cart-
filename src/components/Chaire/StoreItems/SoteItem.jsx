import React from 'react'
import { Button, Card, CardBody } from 'react-bootstrap'
import shoppingStore from '../../../assets/images/shopping-store.png';
import book from '../../../assets/images/book.jpeg';
import banane from '../../../assets/images/banane.png';
import pc from '../../../assets/images/pc.jpeg';
import formatCurrency from '../FormatCurrentcy';
function SoteItem({id, title,price,images}) {
    const imageMap = {
        shoppingStore,
        book,
        banane,
        pc,
      };
      let quantity =0;
  return (
    <>
    <Card className='h-100'>
        <Card.Img src={imageMap[images]} alt={title} style={{height : "200px" , objectFit : "cover"}} variant='top' />
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
                    quantity === 0 ? <Button className='w-100'>Add To Card</Button> : 
                    (
                        <div className='d-flex align-items-center flex-column' style={{gap : "0.5rem"}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap : "0.5rem"}}>
                                <Button>-</Button>
                                <span className='fs-3'>1 items</span>
                                <Button >+</Button>
                            </div>
                            <Button variant='danger' size='sm'>Remove</Button>
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