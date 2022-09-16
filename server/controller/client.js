require('dotenv').config();
   const uri = process.env.ATLAS_URI_FOR_OWOEYE_LOCAL
   const mongoose = require('mongoose')

const client = { MongoClient, ServerApiVersion } = require('mongodb');

    mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    .then(()=>{
      console.log('connected to database')
    })
    .catch(e=>console.log(e));



