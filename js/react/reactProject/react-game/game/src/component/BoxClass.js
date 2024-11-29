import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        <div>BoxClass {this.props.num}</div>
        <div className={`box ${this.props.result}`}>
            <h1>{this.props.title}</h1>

            <div className='img-box'>
                <img src={this.props.item && this.props.item.img} />
            </div>
            <h2>{this.props.result}</h2>
        </div>
      </div>
    )
  }
}
