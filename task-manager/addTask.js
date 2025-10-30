const {writeFile} = require('fs')


const addTask = (text)=>{
    const info = {
    "success":true,
   "data":[
        {
            "id":1,
            "description": `${text}`,

"status": "Todo",
"createdAt": new Date().getDate(),

"updatedAt": new Date().getDate()
        }
    ]
}

    writeFile('./test.json',JSON.stringify(info,null,2),{flag:'a'},(err)=>{
        if(!err){
            console.log("hey it worked");
        }
    })
}

module.exports = addTask

