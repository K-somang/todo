import express from 'express'
import cors from 'cors'

const corsOptions = {
	origin: ['http://127.0.0.1:3000', 'https://my-front-url.com'],
}

const app = express()

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' })
})

app.listen(3000, () => console.log('Server started on port 3000'))