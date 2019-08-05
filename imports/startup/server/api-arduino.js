import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'

if (Meteor.isServer) {
	Meteor.startup(() => {
		WebApp.connectHandlers.use((req, res, next) => {
			const url = req.url.split('?')[0]
			const params = req.url.split('?')[1]
			if (url === '/add_cigarette') {
				console.log(params)
				Meteor.call('cigarette.add', params.split('=')[1], err => {
					console.log(err)
				})
				res.end()
			} else {
				next()
			}
		})
	})
}
