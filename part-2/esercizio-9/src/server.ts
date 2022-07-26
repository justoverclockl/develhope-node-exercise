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

app.post('/users', async (req, res) => {
    const userData = req.body
    const user = await prisma.user.create({
        data: userData
    })
    await res.status(201).json(user)
})

app.get('/users/:id(\\d+)', async (req, res, next) => {
    const userID = Number(req.params.id)
    const user = await prisma.user.findUnique({
        where: { id: userID },
    })
    if (!user) {
        res.status(404)
        return next(`Cannot GET /planets/${user}`)
    }
    res.status(200).json(user)
})

app.put('/:id(\\d+)', async (req, res, next) => {
        const userId = Number(req.params.id)
        const userData = req.body
        try {
            const planet = await prisma.planet.update({
                where: { id: userId },
                data: userData
            })
            res.status(201).json(planet)
        } catch (error) {
            res.status(404)
            next(`Cannot PUT /planets/${userId}`)
        }
    }
)

app.delete('/:id(\\d+)', async (req, res, next) => {
    const userId = Number(req.params.id)

    try {
        await prisma.planet.delete({
            where: { id: userId },
        })
        res.status(204).send({
            message: `The resource with id of ${userId} was successfully deleted from database.`,
        })
    } catch (error) {
        res.status(404)
        next(`Cannot DELETE /planets/${userId}`)
    }
})

export default app

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))