import React from 'react'
import { useParams } from 'react-router'

const ProdcutDetailPage = () => {
    //파라미터 보내기
    const {id} = useParams();

  return (
    <div>
        <h2>ProdcutDetailPage {id}</h2>
    </div>
  )
}

export default ProdcutDetailPage