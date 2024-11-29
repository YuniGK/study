import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

const ReactQueryPage = () => {
    /*
    useQuery({
        queryKey:['posts']
        , queryFn:()=>{
            //호출하고 싶은 api
            return axios.get('http://localhost:4000/posts')
        }
    });
    */

   const fetchPost = (queryData) => {
        const id = queryData.queryKey[1];
        return axios.get(`http://localhost:4000/posts/${id}`)
    }

   //페이지 접속 시 바로 실행 됨
   //refetch - 버튼 클릭 시, api호출 하고 싶을 시, 버튼의 온클릭 이벤트에 넣어준다.
   const { isLoading, data, isError, error, refetch} = useQuery({
        //queryKey: ['posts']
        queryKey: ['posts', 1]//디테일 페이지 등 요청 시,
        , queryFn: fetchPost
        , retry: 2//실패시 몇번 다시 시도할지 정해준다. 기본 3번 더 시도한다.
        , enabled: false//초기에 api 호출 하지 않고 버튼 클릭 등 이벤트 후 api 호출된다.
        //, staleTime: 5000
        /* fresh, state구분을 위한 시간 설정
        기본 값은 0 -> 카테고리 같이 변경이 자주 없는 경우 사용한다. 
        한번 호출 후 캐시의 내용을 사용한다. 
        
        지정한 5초 만큼 fresh상태를 유지한다. fresh 상태를 유지한 상태에서 페이지 접속 시
        api호출 하지 않는다.
        
        staleTime 시간보다 gcTime 시간이 짧을 경우 캐시가 삭제되어 api호출이 발생한다.
        staleTime < gcTime 설정이 필요하다. */
        , select: data => {
            return data.data//data값을 가져올 때, data값만 가져온다.
        }
        //, refetchInterval: 3000//3초마다 api호출
        //, refetchOnMount: false//한번 호출 후 호출하지 않는다. - 기본값 true
        //, refetchOnWindowFocus: true//화면을 보면 api 호출한다.
        //, gcTime: 5000//캐시 관리하는 시간 5초가 지나면 캐시를 삭제한다. -> 기본값은 5분
        /* state 상태에서는 캐시가 삭제되지 않는다. 다른페이지로 이동 시, 상태가
        inactive로 변경되면서 5초가 지나면 캐시가 삭제된다. 
        하위버전에서는 cacheTime라고 사용됨 
        
        ReactQuery 라이프 사이클
        fetching - api 호출 시
        fresh - 데이터 도착 시, 해당 상태에서는 api 호출을 다시 하지 않는다.
            해당 상태를 길게 두면 api 호출이 아닌 캐시의 데이터를 가져온다.
        state - 데이터 도찰 후 시간이 지난 상태, 해당 상태에서 다시 api호출이 가능하다.
        inactive - 데이터를 사용하지 않는 상태
        deleted 
        */
    });

    console.log('isLoading ', isLoading, ' --- ', data)
    console.log('isError ', isError, ' --- ', error)//error 에러 메시지 출력

    if(isLoading){
        return <h2>Loading ...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    
  return (
    <div>
        {/*
        {data?.map(item => (
            <div key={item.id}>{item.title}</div>
        ))}
        */}
        <button onClick={refetch}>호출</button>
    </div>
  )
}

export default ReactQueryPage