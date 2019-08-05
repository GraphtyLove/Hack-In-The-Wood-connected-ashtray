/* eslint-disable indent */
import React, { Component, Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Cigarette } from '../../api/cigarette/Cigarette'
import './Test.css'

class Test extends Component {
	handleSubmit(e) {
		e.preventDefault()
		Meteor.call('cigarette.add', e.target.cig.value, err => {
			if (err) {
				console.log(err)
			}
		})
	}

	getReport(value) {
		const reportOut = [10, 100]
		const reportIn = [20, 70]

		const init = [reportOut[0], reportIn[1] - reportIn[0]]
		const rapport = ((value - reportIn[0]) / init[1]) * reportOut[1]
		if (rapport <= 0) {
			return 0
		} else if (rapport >= 100) {
			return 100
		}
		console.log(rapport)
		console.log(reportOut[1] - rapport)
		return reportOut[1] - rapport
	}

	render() {
		console.log(this.props)
		const { cigarette, lastCig } = this.props
		return (
			<Fragment>
				<div className="full">
					<h1 className="align">Cendrier camping V.I.P.</h1>
					<main>
						<section className="section-container cig-count">
							<section className="graph-section">
								<div className="graph-container">
									<div
										className="graph-content"
										style={{
											height: `${this.getReport(
												lastCig[0] && lastCig[0].distance
											)}%`,
										}}
									/>
								</div>
							</section>
							<div>
								<section className="section-title">
									<h1>Nombre de mégots:</h1>
								</section>

								<section className="section-content">
									<p>
										{Math.round(
											this.getReport(lastCig[0] && lastCig[0].distance) * 10
										)}
									</p>
								</section>
							</div>
						</section>

						<aside>
							<section className="container-section-aside">
								<section className="graph-section graph-section-aside">
									<div className="graph-container">
										<div
											id="positif"
											className="graph-content"
											style={{
												height: `${this.getReport(
													lastCig[0] && lastCig[0].distance
												)}%`,
											}}
										/>
									</div>
								</section>
								<div>
									<section className="section-title">
										<h1>Impact positif:</h1>
									</section>

									<section className="section-content-aside">
										<div>
											Waw! Vous avez fournis{' '}
											<span className="bold">
												{Math.round(
													this.getReport(lastCig[0] && lastCig[0].distance) / 10
												)}
											</span>{' '}
											ans d'engrais pour une ferme lambda
										</div>
									</section>
								</div>
							</section>

							<section className="container-section-aside">
								<section className="graph-section graph-section-aside">
									<div className="graph-container">
										<div
											id="negatif"
											className="graph-content"
											style={{
												height: `${this.getReport(
													lastCig[0] && lastCig[0].distance
												)}%`,
											}}
										/>
									</div>
								</section>
								<div>
									<section className="section-title">
										<h1>Impact negatif:</h1>
									</section>

									<section className="section-content-aside">
										<div>
											Wow... Vous avez évité de justesse la fonte de{' '}
											<span className="bold">
												{' '}
												{Math.round(
													this.getReport(lastCig[0] && lastCig[0].distance) *
														500
												)}{' '}
											</span>
											mètres cube de glace!
										</div>
									</section>
								</div>
							</section>
						</aside>
					</main>
				</div>

				{/* {lastCig && lastCig.length > 0 ? (<div>{this.getReport(lastCig[0].distance)}%</div>) : (<div>Loading...</div>)}                 */}
			</Fragment>
		)
	}
}

export default withTracker(() => {
	Meteor.subscribe('cigarette.all')
	return {
		cigarette: Cigarette.find({}).fetch(),
		lastCig: Cigarette.find({}, { sort: { timestamp: -1 }, limit: 1 }).fetch(),
	}
})(Test)
