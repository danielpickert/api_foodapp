const mongoose = require('mongoose')
mongoose.Promise = global.Promise

if (process.env.NODE_ENV === 'production') {
	mongoose.connect(process.env.MLAB_URL);
} else {
	mongoose.connect('mongodb://localhost/api_foodapp').then(
		() => {
			console.log('Connected to Mongo');
		},
		err => {
			console.log('error connecting to Mongo: ')
			console.log(err);
		}
	);
}

module.exports = mongoose
