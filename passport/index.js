const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../db/models')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, user.id)
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findById(id, (err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(err, user)
		}
	)
})

//  Use Strategies
passport.use(LocalStrategy)

module.exports = passport
