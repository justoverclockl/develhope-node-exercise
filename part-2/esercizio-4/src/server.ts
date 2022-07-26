import express from 'express'

const PORT = process.env.PORT || 5055
const app = express()

app.get('/', (req, res) => {
    res.json({
        author: 'Marco Colia',
        response: 'Server is up!'
    })
})

export default app
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))