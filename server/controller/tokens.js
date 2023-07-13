const axios = require("axios");

const createToken=async(req,res,next)=>{
    const sectet="Dv1bAxqzAvFsPzUe"
    const consumer="pAzZhM2ocTgJSl7XcurhQEBsR1pODu3I"
    const auth=new Buffer.from(`${consumer}:${sectet}`).toString("base64")
    await axios.get(
         "https://sandbox.safaricom.co.ke/oauth/v1/generate",
         {
            Headers:{
                authorization:`Basic ${auth}`
            },
         }

    ).then((data)=>{
        token=data.data.access_token;
        console.log(data.data)
        next();
    }).catch((err)=>{
        console.log(err);
        res.status(400).json(err.message);
    })
 
    }
    const stkpush = async (req, res) => {
        const shortcode = 174378;
        const phone = req.body.phone.substring(1);
        const amount = req.body.amount;
        const passkey = "174379bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c91920181015123520";
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    
        // Rest of your code...
        const date=new Date();
        const timestamp=
        date.getFullYear()+
        ("0" + (date.getMonth() + 1 )).slice(-2)+
        ("0" + (date.getDate() + 1 )).slice(-2)+
        ("0" + (date.getHours() + 1 )).slice(-2)+
        ("0" + (date.getMinutes() + 1 )).slice(-2)+
        ("0" + (date.getSeconds() + 1 )).slice(-2)
        

        const password=new Buffer.from(`${consumer}:${sectet}`).toString("base64");
// not clear
        const data=
        {    
            InitiatorName: "TestG2Init",
            BusinessShortcode:shortcode,
            SecurityCredential:password,
            TransactionType:"customerPayBill",
            Amount:amount,
            timestamp:timestamp,
            PartyA:`254${phone}`,
            PartyB:"254728762287",
            Remarks:"here are my remarks",
            CallBackURL:"https://mydomain.com/path",
            QueueTimeOutURL:"https://darajambili.herokuapp.com/b2c/timeout",
            ResultURL:"https://darajambili.herokuapp.com/b2c/result",
            Occassion:"Christmas"
         };
         await axios.
         post(url, data.Amount,{
            Headers:{
                authorization:`Bearer${token}`
            }
         }).then(()=>{
            console.log(data);
            res.status(200).json(data.data)
         }).catch((err)=>{
            console.log(err);
            res.status(400).json(err.message);
        })
    }


module.exports={createToken, stkpush}