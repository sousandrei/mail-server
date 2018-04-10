# Akuntsu Mail Server

## Exemplo de configuração

```js
module.exports = {
	//rota para receber o email
	route: 'akuntsu',

	transporter: {
		//provider
		service: 'Mailgun',

		//credentials
		auth: {
			user: 'email@email.com',
			pass: 'pass123'
		}

	},
	
	//mailOptions do node-mailer
	mailOptions: {
		to: 'sales@example.com'
	},

	buildMessage
}

//funcao para criar o email
//recebe o body da requisicao e trata ele
function buildMessage({
	nome,
	email,
	mensagem
}) {

	return {
		from: email,
		subject: nome,
		text: mensagem
	}
}
```