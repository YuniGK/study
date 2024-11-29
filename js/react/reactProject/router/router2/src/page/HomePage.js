import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate('/about');
    }

    const goToProductPage = () => {
      //navigate('/products?q=pants');
      navigate('/products?q=pants&page=2');
    } 

  return (
    <div>
        <h3>HomePage</h3>
        <Link to="/about">About page</Link>
        < button onClick={goToPage}>About page</button>

        < button onClick={goToProductPage}>Product page</button>
    </div>
  )
}

export default HomePage