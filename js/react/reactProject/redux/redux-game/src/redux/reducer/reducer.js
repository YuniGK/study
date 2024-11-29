let initialState = {
    count : 0
}

//state - 저장이 필요한 요소
//action - 어떤 행위를 할지 안내해줌
function reducer(state = initialState, action){
    console.log('reducer ',action)//{type: 'INCREMENT'}

    if(action.type === 'INCREMENT'){
        //내용을 복사하며 주소를 갱신하게 되어 
        //store에서 새로운 값을 받았다고 인식 할 수 있게 한다.
        //return {...state, count : state.count+1}
        //payload - 필요한 값을 보낸다.
        return {...state, count : state.count + action.payload.num}
    }else if(action.type === 'DECREMENT'){
        return {...state, count : state.count-1}
    }

    return {...state};
}

export default reducer