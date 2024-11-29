//rcc - class component를 생성하는 키워드
import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

const choice = {
    rock : {
      name : 'Rock'
      , img : '/img/rock.png'
    }
    , scissors : {
      name : 'Scissors'
      , img : '/img/scissors.png'
    }
    , paper : {
      name : 'Paper'
      , img : '/img/paper.png'
    }
  }

export default class AppClass extends Component {
    constructor(props){//생성자
        super(props)

        this.state={
            counter : 0
            , value : 0
            , userSelect : null
            , computerSelect : null
            , result : ''
            //필요한 state를 한곳에 정리한다.
        }//생성시 state도 생성해준다.
    }

    increase = () => {//함수
        //this.setState({counter : this.state.counter + 1})
        //변경을 원하는 값을 넣어준다.
        //변경이 필요한 내용을 한번에 정의 후, 변경해준다.
        this.setState({
            counter : this.state.counter + 1
            , value : this.state.value + 1
        })
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();

        //승부
        let userResult = this.judgement(choice[userChoice], computerChoice);

        this.setState({
            userSelect : choice[userChoice]
            , computerSelect : computerChoice
            , result : userResult
        })
        
    }
    
    randomChoice = () => {
          let itemArray = Object.keys(choice);
          let randomItem = Math.floor(Math.random() * itemArray.length)
    
          return choice[itemArray[randomItem]];
    }

    judgement = (userC, computerC) => {
        let userFigth = ''
        if(userC.name === computerC.name)
          userFigth = 'tie';
        else if(userC.name === 'Rock'){
          userFigth = computerC.name === "Scissors" ? 'Win' : 'Lose';
        }else if(userC.name === 'Scissors'){
          userFigth = computerC.name === "Paper" ? 'Win' : 'Lose';
        }else{
          userFigth = computerC.name === "Rock" ? 'Win' : 'Lose';
        }
    
        return userFigth;
    }

    render() {
        return (
        <div>
            <div>state : {this.state.counter}</div>
            {/* 실행되지 않는다.
            <button onClick={()=>{this.increase}}>click</button>
            */}
            <button onClick={this.increase}>click</button>

            <BoxClass num={this.state.value} />

            <div className='game'>
                <div className="main">        
                    <BoxClass title = "You" item = {this.state.userSelect} result = {this.state.result} />
                    <BoxClass title = "Computer" item = {this.state.computerSelect} result = {
                    this.state.result === 'tie' ? this.state.result :
                        this.state.result === 'Win' ? 'Lose' : 'Win'
                    } />      
                </div>

                <div className='button-box'>
                    <button onClick={() => this.play('scissors')}>가위</button>
                    <button onClick={() => this.play('rock')}>바위</button>
                    <button onClick={() => this.play('paper')}>보</button>
                </div>
            </div>
        </div>
        )
    }
}
