require('dotenv').config()

const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRECT_KEY
console.log(secretKey)
const algorithm = process.env.INCODE_STYLE
const expiresIn = '1D'
const issuer = 'TravelCare'

const option = { algorithm, expiresIn, issuer }

type Payload = {
  data: { userID: string; role: string }
}

function issueToken(payload: object) {
  return jwt.sign(payload, secretKey, option)
}

export default issueToken
