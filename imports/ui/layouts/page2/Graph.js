import React, { Component, Fragment } from 'react'
import './Graph.css'
// import Car from '../img/icon_BeChampix_car.png'
export default class Graph extends Component {
	render() {
		return (
			<Fragment>
				<div className="ContainerBar">
					<div className="BarOne">
						<div className="ContentBar" />
					</div>
					<div className="BarTwo">
						<div className="MiddleBar" />
					</div>
					<div className="BarThree">
						<div className="RightBar" />
					</div>
				</div>
			</Fragment>
		)
	}
}
