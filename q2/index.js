const express = require('express');
const app = express();
const path = require('path');

app.set("view engine",'ejs');
app.set('views', path.join(__dirname,'view'));


app.get('/',(req, res)=>{
    res.render('index');
})

app.use(express.urlencoded()); 

app.post('/result',(req,res) =>{
    const name = req.body.nameText;
    const age = req.body.ageText;
    let content = "";
    if(!name && !age){
        content += "Please enter both your name and age!";
    }else{
        content = `Your name is ${name} and age is ${age}`;
    }
    res.render('result', {result:content});   
});
const port = 9090;
app.listen(port, err =>{
    if(err) {
        console.log(err);
    }
    console.log(`My server is listening on port ${port}`);
});
