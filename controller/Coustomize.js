const multer = require("multer");
const {v4:uuidv4}=require('uuid');
const router= require('express').Router();
const path=require("path")
let model=require("../model/Coustomize")

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images');
    },
    filename:function(req,file,cb){
        cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname));
    }
});

const fileFilter=(req,file,cb)=>{
    const allowedFileType=['image/jpeg','image/jpg','image/png'];
    if(allowedFileType.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(null,false)
    }
}

let upload=multer({storage,fileFilter});