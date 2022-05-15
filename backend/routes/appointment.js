const router = require("express").Router();
let Appointment= require("../models/appointment");

router.route("/").get((req,res)=>{
    Appointment.find({})
    .then((data)=>res.json({data:data}))
    .catch((err)=>res.status(400).json("error"+err));
    
});

router.route("/appointment").post((req,res)=>{
  
      Appointment.create(req.body)
    .then(()=>res.json("appointment added"))
    .catch((err)=>res.status(400).json("error"+err));

});



router.route("/appointment/:id")
.delete((req,res)=>{
    Appointment.findByIdAndDelete(req.params.id)
    .then(()=>res.json("sucessfully deleted"))
    .catch((err)=>res.json("error"+err))
})
.patch((req,res)=>{
   const id =req.params.id;
   Appointment.findByIdAndUpdate(id,req.body,function(err){
       if(err){
        res.status(400).json("error"+err)
       }
       else{
        res.json("appointment updated") 
       }
   });
})
.get((req,res)=>{
 Appointment.findById(req.params.id)
 .then((appointment)=>{
     res.json({data:appointment})
 })
 .catch((err)=>res.json("error"+err));

});


module.exports=router;


