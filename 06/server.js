import {createServer} from "node:http";

const server = createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")

    const jsonResponse = JSON.stringify({location: "mars"})

    res.end(jsonResponse)
})


server.listen(3000, () => console.log('server ok'))