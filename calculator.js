const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var num1=Number(parseInt(req.body.num1)) 
    var num2=Number(parseInt(req.body.num2))
    var result=num1+num2
    res.send("The result of the calculation is "+result)
    console.log("Hello")

})

app.listen(process.env.PORT || 3000,function(){
    console.log("Server listening on port 3000")
})
