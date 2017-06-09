const convert = require('../operations/convert.js')

function fromCssHsl(to, value) {
	value = value.replace(/(hsl\(|\)|%|[\s]*)/g, '').split(",")
	for (var i = 0;i < value.length;i++){
		value[i] = parseInt(value[i])
	}
	switch (to) {

	case "hsl":
		return {
			h: value[0],
			s: value[1],
			l: value[2]
		}

    /* This colour mode is just an expression of HSL */
	default:
		return convert(to, {
			h: value[0],
			s: value[1],
			l: value[2]
		})

	}
}

module.exports = fromCssHsl
