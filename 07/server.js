import {createServer} from "node:http";
import figlet from 'figlet'

const server = createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")

    const jsonResponse = JSON.stringify({location: "mars"})

   const runFiglet = () => {
       figlet.text('DevelHope!', {
           font: 'Ghost',
           horizontalLayout: 'default',
           verticalLayout: 'default',
           width: 80,
           whitespaceBreak: true
       }, function(err, data) {
           if (err) {
               console.log('Something went wrong...');
               console.dir(err);
               return;
           }
           console.log(data)
           return res.end(data)
       });
   }



    runFiglet()
})



server.listen(3000, () => console.log('server ok'))