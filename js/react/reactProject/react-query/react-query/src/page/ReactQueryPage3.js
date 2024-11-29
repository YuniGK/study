import React from 'react'
import { usePostQuery } from '../hooks/usePosts';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const ReactQueryPage2 = () => {
  const ids = [1,2,3];
  
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:4000/posts/${id}`)
  }

  const results = useQueries({//여러개의 쿼리를 부른다.
    queries : ids.map((id) => {
      return {
        queryKey : ["posts", id]
        , queryFn : () => fetchPostDetail(id)
      }
    }),
    combine : (results) => {//합친다.
      return {//results에서 data부분의 값만 합친다.
        data : results.map((result) => result.data)
      }
    }
  });

  console.log('res', results)
  return <div></div>;
  
}

export default ReactQueryPage2