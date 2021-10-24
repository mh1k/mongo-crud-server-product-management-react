import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const url = `http://localhost:5000/products/${productId}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleNameChange = e => {

        const updateName = e.target.value;
        const updatedProduct = { productName: updateName, productPrice: product.productPrice, productQuantuty: product.productQuantuty }
        setProduct(updatedProduct);

    }

    const handlePriceChange = e => {

        const updatePrice = e.target.value;
        const updatedProduct = { productName: product.productName, productPrice: updatePrice, productQuantuty: product.productQuantuty }
        setProduct(updatedProduct);

    }

    const handleQuantityChange = e => {

        const updateQuantity = e.target.value;
        const updatedProduct = { productName: product.productName, productPrice: product.productPrice, productQuantuty: updateQuantity }
        setProduct(updatedProduct);

    }


    const handleUpdateProduct = e => {

        e.preventDefault();
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount > 0 ) {
                alert("Updated Succesfully")
            }

        })

    }

    return (
        <div className="mt-5">
            <Container>
                <h2>Update Product</h2>
                <hr />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="ps-5 text-start ">{product.productName}</td>
                            <td>{product.productPrice} $</td>
                            <td>{product.productQuantuty} Pcs</td>
                        </tr>
                    </tbody>
                </Table>
                <hr />
                <Form onSubmit={handleUpdateProduct}>
                    <Row>
                        <Col>
                            <Form.Control onChange={handleNameChange} value={product.productName || ""} placeholder="Product Name" />
                        </Col>
                        <Col>
                            <Form.Control onChange={handlePriceChange} type="number" value={product.productPrice || ""} placeholder="Product Price" />
                        </Col>
                        <Col>
                            <Form.Control onChange={handleQuantityChange} type="number" value={product.productQuantuty || ""} placeholder="Product Quantity" />
                        </Col>
                    </Row>
                    <Button variant="primary" className="mt-4 btn btn-secondary" value="Add" type="submit">
                        Update Products
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default UpdateProduct;