const router = require('express').Router()
const profile = require('../model/userModel')


router.post('/', (req, res) =>{
   console.log(req.body.details)
   if(req.body.details.email && req.body.details.password){
       const email = req.body.details.email
       const password = req.body.details.password

  //checking if a user exist
      profile.exists({email:email, password:password}, (err, result)=>{
         if(result){
            res.send('success')
            console.log('Logged in successfully')
         }else{
            res.send('invalid')
            console.log('The user does not exist')
         }
      })
   }else{
      console.log('Invalid details')
   }
      

})

module.exports = router

