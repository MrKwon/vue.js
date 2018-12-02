const Joi = require('joi') // tools for check id, pw structures

module.exports = {
  register (req, res, next) {
    const schema = { // declare schema to check valid values
      email: Joi.string().email(), // check email structure
      password: Joi.string().regex( // check password structure using regex
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)
    console.log(value)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters in length
            `
          })
          break
        case 'password':
          res.status(400).send({
            error: 'You must provide a valid password'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
