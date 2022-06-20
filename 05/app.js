const express = require('express')
const PORT = process.env.PORT ||5050
const app = express()


app.get('/', (req, res) => {
    res.json({
        message: 'Questo è un messaggio personalizzato'
    })
})

app.listen(PORT, () => console.log(`server avviato sulla porta ${PORT}`))