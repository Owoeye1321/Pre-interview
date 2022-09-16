const router = require ('express').Router()
router.post('/',(req, res)=>{
   // console.log(req.body)
    if(!req.body.email){
        console.log(req.body)
        console.log('failed')
        res.send('failed')
        
    }else{
       // console.log(req.body.username)
            console.log(req.body)
            res.send('success')
    }
})
module.exports = router