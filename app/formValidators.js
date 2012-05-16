var form = require('express-form');

field = form.field;

var login = form (
	field('email')
		.trim()
		.required()
	,
	field('password')
		.trim()
		.required()
)

var registration = form (
	field('email')
		.trim()
		.required()
		.isEmail()
	,
	field('password')
		.trim()
		.minLength(4)
		.maxLength(24)
		.required()
	,
	field('first-name')
		.trim()
		.required()
		.maxLength(24)
		.isAlphanumeric()
	,
	field('last-name')
		.trim()
		.required()
		.maxLength(24)
		.isAlphanumeric()
)

module.exports = {
    'login': login,
    'registration': registration
};