import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check, Match } from 'meteor/check'

export const Cigarette = new Mongo.Collection('cigarette')

if (Meteor.isServer) {
	Meteor.publish('cigarette.all', () => Cigarette.find({}))

	Meteor.methods({
		'cigarette.add'(distance) {
			console.log(distance)
			check(distance, String)
			Cigarette.insert({
				timestamp: Date.now(),
				distance,
			})
		},
	})
}
