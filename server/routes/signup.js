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
    const data = JSON.parse(req.body.data)
    if(data){
   const details = {
          email:data.email,
          password:data.password
   }
   const validationRule ={
      "email" :"required|email",
      "password": "required|min:8"
  }
  validator(details, validationRule, {}, (err, status)=>{
     if(!status){
           console.log('An error has occured')
                 console.log(err)
        res.send('Password must be at least 8 character')
     }else{
               //checking if a user exist
                 profile.exists({email:data.email}, (err, result)=>{
                  if(result){
                     res.send('User exist')
                     console.log('file exist')
                  }else{
                        // fetch the file extension
                    const extensionName = path.extname(req.file.filename); 
                    const allowedExtension = ['.png','.jpg','.jpeg'];
                    if(!allowedExtension.includes(extensionName)){
                        res.send('Invalid Image type')
                        console.log('invalid file type')
                    }else if(req.file.size > 50 * 1024){
                        res.send('File too large')
                        console.log('File too large')
                    }else{
                        const profileDetails = new profile({
                            email:data.email,
                            password:data.password,
                            image:{
                                data:fs.readFileSync(path.resolve('./public/' + req.file.filename)),
                                contentType:"image/png"
                            }
                        })
                        profileDetails.save().then((result)=>{
                            res.send('success')
                            console.log('Signed up successfully', result)
                        }).catch((err)=>{
                            console.log('Unable to save profile',err)
                        })
                    }
                    
                  }
                 })
                 
           
            
     }
     })  
 
    }else{
        res.send('Empty details')
        console.log('Invalid details')
    }
  
})

module.exports = router



