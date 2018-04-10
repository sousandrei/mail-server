const nodemailer = require('nodemailer')

module.exports = (app, {
	route,
	transporter,
	mailOptions,
	buildMessage
}) => {

	transporter = nodemailer.createTransport(transporter)

	app.post(`/mail/${route}`, async (req, res) => {

		mailOptions = { ...mailOptions, ...buildMessage(req.body) }

		console.log(mailOptions)

		try {
			let result = await transporter.sendMail(mailOptions)
			console.info(`email ${route}`, mailOptions)
			return res.status(200).json(result)
		} catch (err) {
			return res.status(500).json(err)
		}

	})

}