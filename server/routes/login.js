const router = require('express').Router()
const profile = require('../model/userModel')


router.post('/', (req, res) =>{
   if(req.body.email && req.body.password){
       const email = req.body.email
       const password = req.body.password

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
   }
      

})

module.exports = router

