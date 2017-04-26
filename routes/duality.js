const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
	service: 'Mailgun',
	auth: {
		user: 'comercial@mail.duality.energy',
		pass: 'duality123'
	}
})

let mailOptions = {
	to: 'comercial@duality.energy'
}

module.exports = (app) => {

	app.post('/duality', (req, res) => {

		mailOptions.from = `"${req.body.name}" ${req.body.from}`
		mailOptions.subject = `SITE - ${req.body.subject}`
		mailOptions.text = req.body.text

		transporter.sendMail(mailOptions, (error, info) => {
			if (error)
				return res.status(500).json(error)

			console.log('Email Duality', mailOptions)
			return res.status(200).json(info)
		})
	})

}