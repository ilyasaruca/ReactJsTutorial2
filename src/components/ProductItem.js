import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function ProductItem({item}) {

    return (
        <Col sm={4} style={{marginBottom:5,}}>
            <Card>
                <Card.Img style={{height:250,}} variant="top" src={item.images[0].normal} />
                <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>
                       {item.description}
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductItem
