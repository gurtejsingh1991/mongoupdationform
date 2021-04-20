require('../model/userModel');
const mongoose =require('mongoose');

var UserData=mongoose.model('user');

module.exports.addnew=(req,res) =>{
    var myData=new UserData({
        name:req.body.username,
        email:req.body.uemail,
        contact:req.body.ucontact,
        address:req.body.uadd
    })

    myData.save().then((docs)=>{
        return res.status(200).json({
            message:'Data inserted sucessfully',
            sucess:true,
            data:docs
        })
    })
    .catch((err) =>{
        return res.status(401).json({
            message:'Error in adding new user',
            sucess:false,
            error:err.message
        })
    }) 
}
//  fetch all the users from the database
 module.exports.getAll=(req,res)=>{
      UserData.find().then((docs)=>{
       return res.status(200).json({
             success:true,
             message:'List of users',
             data:docs
         })
     })
     .catch((err)=>{
        return res.status(401).json({
             success:false,
             message:'Error in finding records of user',
             error:err.message
         })
     })
 }
module.exports.getAll = (req,res)=>{
    UserData.find({}).then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'users',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:true,
            message:'No result',
            err:err.message
        })
    })
}

    
module.exports.selectedData = (req,res)=>{
    const uid = req.params.userid;

    UserData.findById({_id:uid}).then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'Record found',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'no record found',
            error:err.message
        })
    })
}

// updated
module.exports.updatedData=(req,res)=>{
    var updatedData={
        name:req.body.uname,
        email:req.body.email,
        contact:req.body.contact,
        address:req.body.add
    }
    // var updated=req.body;
    // const id req.params.id
    UserData.findByIdAndUpdate({_id:req.params.id},{$set:updatedData},{new:true})
    .then((docs)=>{
        return res.status(200).json({
            sucess:true,
            message:'Data updated',
            data:docs


        })
        .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'error in updating data',
            err:err.message
        })
        })

        
    })
}
