import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate('/');
    }
  return (
    <div>
        <h3>AboutPage</h3>
        <Link to="/">Home page</Link>
        < button onClick={goToPage}>Home page</button>
    </div>
  )
}

export default AboutPage