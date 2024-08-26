//using ExpressJs

var express = require('express')
var fs = require('fs')
var app = express()

app.get('/' , function (req, res) {
    fs.readFile('./index.html', function (err , data){
        if(err){
            return res.send("ERROR : "+ err.message)
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            return res.write(data)
        }
    })
})

app.get('/:page' , function (req, res) {
    fs.readFile(`.${req.url}.html`, function (err , data){
        if(err){
            fs.readFile('404.html' , function (err , dat){
                res.writeHead(200, {'Content-Type': 'text/html'})
                return res.write(dat)
            })
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            return res.write(data)
        }
    })
})




app.listen(3000)