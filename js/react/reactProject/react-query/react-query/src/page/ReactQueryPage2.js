import React from 'react'
import { usePostQuery } from '../hooks/usePosts';

const ReactQueryPage2 = () => {
    //const {data, isLoading, isError, error, refetch} = usePostQuery()
    const {data, isLoading, isError, error, refetch} = usePostQuery(1)

    if(isLoading){
        return <h2>Loading ...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    console.log(data)
    
  return (
    <div>
        <button onClick={refetch}>호출</button>
    </div>
  )
}

export default ReactQueryPage2