import React, { Component, Fragment} from 'react'
import './GraphTwo.css'

export default class GraphTwo extends Component {
  render() {
    return (
      <Fragment>
        <div className="ContainerBar">
          <div className="BarOne">
            <div className="ContentBar"></div>
          </div>
          <div className="BarTwo">
            <div className="MiddleBar"></div>
          </div>
          <div className="BarThree">
            <div className="RightBar"></div>
          </div>
        </div>
      </Fragment>
    )
  }
}

  
    