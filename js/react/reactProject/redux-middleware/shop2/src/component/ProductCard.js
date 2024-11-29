import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({item}) => {
  let navigate = useNavigate();
  
  const goToProductDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='item-box' onClick={goToProductDetail}>
        <div className='img-box'>
            <img src={item.img} alt={item.title} />
        </div>
        {item.choice && <div className='choice'><FontAwesomeIcon icon={faHandPointRight} /> Choice</div>}
        <div className='title-box'> 
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
        </div>
        {item.new && <div className='new'><FontAwesomeIcon icon={faWandMagicSparkles} /> New</div>}
    </div>
  )
}

export default ProductCard