import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    let url = `http://localhost:4000/products?q=${searchQuery}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(url)
    console.log(data)
    setProductList(data);
  };
  
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className='product-all'>
      <Container>
        <Row>
          {
            productList &&
              productList.map((item) => (              
                  <Col xs={12} md={4} lg={3} key={item.id}>
                    <ProductCard item={item} />
                  </Col>              
              ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll