const http = require('http')
const port = 3010
const server = http.createServer(function(req,res){
    res.write('Welcome to Trackonomy Systems')
    res.end()
})

server.listen(port,function(error){
    if(error){
        console.log('spmething went wrong',error)
    }else{
        console.log('listen the port'+port)
    }

})