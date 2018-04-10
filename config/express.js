const express = require('express')
const { readdirSync } = require('fs')
const bodyParser = require('body-parser')

const app = express()

module.exports = () => {
	app.use(require('compression')())

	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	app.use(require('method-override')())

	const routes = readdirSync('./routes')
		.filter(f => f.split('.')[1] == 'js')

	for (let r of routes)
		require('./mail')(app, require(`../routes/${r}`))

	app.all('*', (req, res) =>
		res.status(404).end(req.path))

	return app
}	