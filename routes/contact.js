const express=require("express");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


const router=express.Router();
const db = require('../models')



router.get("/",(req,res)=>{
    res.render('index')
})

router.post("/", upload.single('fileToUpload'),(req,res)=>{
    console.log(req.body);
    db.CONTACTFORM.create(req.body)
    .then(()=>res.redirect("/contact"))
    .catch((err)=>console.log(err))
})


module.exports=router