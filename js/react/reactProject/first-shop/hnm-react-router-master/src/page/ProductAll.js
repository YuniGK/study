import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let keyword = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
