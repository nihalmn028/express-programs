const express=require('express')

const router =express.Router()
router.get('/home',(req,res)=>{
  res.send("hello world home")
})
router.get('/about',(req,res)=>{
  res.send("hello world about")
})
router.get('/contact',(req,res)=>{
  res.send("hello world contact")
})
module.exports=router