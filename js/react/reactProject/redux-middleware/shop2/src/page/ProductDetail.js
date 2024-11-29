import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleProducts } from '../redux/reducers/productSlice'

const ProductDetail = () => { 
  const producItem = useSelector((state)=>state.product.selectedItem);

  const dispatch = useDispatch();

  const {id} = useParams();

  const getProduct = async () => {
    dispatch(getSingleProducts(id))
  };
  
  useEffect(()=>{
    getProduct();
  },[]);

  return (
      <Container>
        <Row>
            <Col>
              <img src={producItem?.img} alt={producItem?.title} />
            </Col>
            <Col>
              <div>
                <h3>{producItem?.title}</h3>
                <p>{producItem?.price}</p>
                <p className='sticker'>{producItem?.choice} {producItem?.new}</p>

                <Form.Select aria-label="Default select example">
                  <option>size select</option>
                  {
                    producItem?.size.map((size, idx)=>(
                      <option value={size} key={idx} >{size}</option>
                    ))
                  }
                </Form.Select>

                <Button variant="dark">Cart</Button>
              </div>
            </Col>
        </Row>
      </Container>
  )
};

export default ProductDetail