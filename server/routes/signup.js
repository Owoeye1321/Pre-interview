const validator = require('../controller/validator')
 const router = require('express').Router()
    const profile = require('../model/userModel')
       const fs = require('fs')
    const path = require('path')
    const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb( null, path.resolve('./public'))
    },
    filename:( req, file, cb)=>{
        cb( null, file.originalname)
    }
})

const upload = multer({storage:storage})


router.post('/',upload.single('file'),async (req, res) =>{
    if(req.body){
     const email = req.body.email

   const details = {
          email:email
   }
   const validationRule ={
      "email" :"required|email",
  }
  validator(details, validationRule, {}, (err, status)=>{
     if(!status){
           console.log('An error has occured')
                 console.log(err)
        res.json({
           success:"false",
             message:"Invalid details",
          data:{err}
     })
     }else{
               //checking if a user exist
                 profile.exists({email:email}, (err, result)=>{
                  if(result){
                     res.send('exist')
                     console.log('file exist')
                  }else{
                        // fetch the file extension
                    const extensionName = path.extname(req.file.filename); 
                    const allowedExtension = ['.png','.jpg','.jpeg'];
                    if(!allowedExtension.includes(extensionName)){
                        res.send('invalid')
                        console.log('invalid file type')
                    }else if(req.file.size > 50 * 1024){
                        res.send('too_large')
                        console.log('File too large')
                    }else{
                        const profileDetails = new profile({
                            email:req.body.email,
                            image:{
                                data:fs.readFileSync(path.resolve('./public/' + req.file.filename)),
                                contentType:"image/png"
                            }
                        })
                        profileDetails.save().then((result)=>{
                            res.send('success')
                            console.log('Signed up successfully', result)
                        }).catch((err)=>{
                            res.send('unable_to_save')
                            console.log('Unable to save profile',err)
                        })
                    }
                    
                  }
                 })
                 
           
            
     }
     })  
 
    }else{
        res.send('empty')
        console.log('Invalid details')
    }
  
})

module.exports = router



