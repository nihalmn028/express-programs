const express=require('express')
const app=express()
app.set('view engine','ejs')//ejs
app.get('/',(req,res)=>{
// res.send("hello world")
res.render('calc.ejs',{key:"value"})//template engine
})

app.listen(3000,()=>{
  console.log("server is running")
})
const userrouter=require('./routes/userrouter.js')
app.use('/user',userrouter)
 
