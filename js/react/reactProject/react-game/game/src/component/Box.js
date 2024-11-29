import React from 'react'

//rafce - 기본틀 자동완성 키워드
const Box = (props) => {
    return (
        <div className={`box ${props.result}`}>
            <h1>{props.title}</h1>

            <div className='img-box'>
                {/* item 없을 경우 이미지를 불러오지 않게 하기 위해서 아래와 같이 설정 */}
                <img src={props.item && props.item.img} />
            </div>
            <h2>{props.result}</h2>
        </div>
    )
}

//생성한 컴포넌트 내보내기
export default Box