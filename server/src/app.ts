import express, { Request, Response } from 'express'
import issueToken from './token'
const app = express()

type Data = {
  name: string
  age: number
  url: string
}

const sendData: Data = {
  name: 'name',
  age: 3,
  url: 'tistory.com',
}

app.get('/token', (req: Request, res: Response) => {
  const tokenPayload = { userID: 'test', role: 'user' }
  const token = issueToken(tokenPayload)
  res.send({ token })
})

app.get('/get', (req: Request, res: Response) => {
  res.send(sendData)
})

app.listen('8080')
