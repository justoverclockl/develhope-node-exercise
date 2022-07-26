import express from 'express'
import prisma from '../lib/prisma/client'

const PORT = process.env.PORT || 5055
const app = express()

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    if (!users) {
        res.status(404).send('No users found!')
    }
    res.status(200).json(users)
})

export default app

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))