const router = require('express').Router()
const profile = require('../model/userModel')

router.post('/', async (req, res) =>{

   if(req.body){
 //   console.log(req.body)
      const email = req.body.email

      //checking if the profile of the user with the username
        const allData = await profile.find({email:email})
        if(allData){
         res.json(allData)
       //  console.log(allData)
       //  console.log('The data exist and it has been sent')
        }else{
         console.log('Unable to locate profile')
        }
      }else{
         res.send('invalid user')
         console.log('User authentication required')
      }
      
})

module.exports = router

