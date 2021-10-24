import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDeleteProduct = id => {

        const proceed = window.confirm("Are you sure, you want to delete !!!")
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Delete Successfully")
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    return (
        <div className="mt-5 table-area">
            <Container>
                <h2>List of Product</h2>
                <hr />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <td></td>
                                <td className="text-start ">{product.productName}</td>
                                <td>{product.productPrice} $</td>
                                <td>{product.productQuantuty} Pcs</td>
                                <td><Link to={`/products/update/${product._id}`}><button>Update</button></Link><button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Products;