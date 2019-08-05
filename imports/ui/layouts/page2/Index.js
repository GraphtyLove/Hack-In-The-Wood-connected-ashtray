import React, { Component, Fragment } from 'react'
import Graph from './Graph'
import GraphTwo from './GraphTwo'
import './Index.css'

export default class Index extends Component {
	render() {
		return (
			<div className="test">
				<div className="main Containertest">
					<div className="rowtest">
						<section className="Onetest">
							<Graph />
						</section>
						<section className="Twotest">
							<GraphTwo />
						</section>
						<section className="Threetest">
							<GraphTwo />
						</section>
					</div>
				</div>
			</div>
		)
	}
}
