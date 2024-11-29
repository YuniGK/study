import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProdcutPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get('q'));//pants

  return (
    <div>
        <h2>ProdcutPage</h2>

    </div>
  )
}

export default ProdcutPage