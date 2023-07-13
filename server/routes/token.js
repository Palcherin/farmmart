const express=require("express");
const router=express.Router()

const {createToken, stkpush}=require("../controller/tokens")

router.post("/", createToken,stkpush)

module.exports=router