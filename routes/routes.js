const express = require('express');
const appRouter = express.Router();
const model = require('./data');



// Home page Routes

appRouter.get('/', function (req, res){
    console.log(req.headers);
    res.send('Welcome please use right action');

});


appRouter.get('/getusers',(req,res)=>{
    console.log(req.headers);
    model.readFile(function (data){
        res.send(data);
    });
});

appRouter.get('/hello',(req,res)=>{
    console.log(req.headers);
        res.send("hello");
});

appRouter.get('/getusersdetails/:id',(req,res)=>{
    console.log(req.headers);
    //const userId = req.params["id"].toString();
    model.readFile(function (data){
        //console.log(data[userId]);
        const userId = req.params["id"];
        console.log(req.params);
        res.send(data[userId]);
    });

});

appRouter.put('/updateuser/:id/:name',(req,res)=>{

});

appRouter.post('/createuser',(req,res)=>{

});

appRouter.delete('/deleteuser/:id',(req,res)=>{
    model.readFile(data => {
        const userId = req.params.id;
        console.log(req.params.id);
        delete data[userId];
        model.writeFile(JSON.stringify(data),function(data){
        res.send(data);
       })
    })
});

module.exports = appRouter;