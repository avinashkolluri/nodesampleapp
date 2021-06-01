const fs = require('fs');

//Path of json file to consume
const dataPath = './data/users.json';

exports.readFile = function(callback){
    fs.readFile(dataPath,'utf8',(err,data)=>{
    if(err){
        console.log(err);
    }else
    {
        callback(JSON.parse(data));
        //return JSON.parse(data);
    }
    });
};

exports.writeFile = function(data,callback) {
   //jsonData = JSON.stringify(data);
    fs.writeFile(dataPath,data,'utf8',(err)=>{
    if(err){
        console.log(err);
        console.log("writting to file is not successfull")
    }else
    {
     console.log("writting to file is successfull")
     callback("success")
    }
});
};



// let data = {
//         '1': {
//           name: 'king arthur',
//           password: 'password1',
//           profession: 'king',
//           id: 1
//         },
//         '2': {
//           name: 'rob kendal',
//           password: 'password3',
//           profession: 'code fiddler',
//           id: 2
//         },
//         '3': {
//           name: 'teresa may',
//           password: 'password2',
//           profession: 'brexit destroyer',
//           id: 6
//         }     
// }

//console.log(readFile);

// readFile(function (data) {
//     console.log(data);
//   });

// writeFile(data,data1=>{
//     console.log(data1);
// });