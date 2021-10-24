import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = e => {
        e.preventDefault();
        const productName = nameRef.current.value;
        const productPrice = priceRef.current.value;
        const productQuantuty = quantityRef.current.value;
        const newProduct = { productName, productPrice, productQuantuty }
        // console.log(productName);
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                alert("Succssfully Added This Product")
                e.target.reset();
                // console.log(data);
            }
        })
    }

    return (
        <div className="mt-5">
            <Container>
                <h2>Added Product</h2>
                <hr />
                <Form onSubmit={handleAddProduct}>
                    <Row>
                        <Col>
                            <Form.Control ref={nameRef} placeholder="Product Name" />
                        </Col>
                        <Col>
                            <Form.Control ref={priceRef} type="number" placeholder="Product Price" />
                        </Col>
                        <Col>
                            <Form.Control ref={quantityRef} type="number" placeholder="Product Quantity" />
                        </Col>
                    </Row>
                    <Button variant="primary" className="mt-4 btn btn-secondary" value="Add" type="submit">
                        Add Products
                    </Button>
                </Form>

            </Container>
        </div>
    );
};

export default AddProduct;