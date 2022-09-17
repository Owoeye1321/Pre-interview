import { useState,useEffect } from "react"
import axios from 'axios'

 function Dashboard(){
   const [userDetails, setUserDetails] = useState([])

   const LogOut = async()=>{
    const check = localStorage.clear()
    if(check){
      alert('logging out')
      
    }
  }
   useEffect(()=>{
    // alert('hello there i am trying to control the width of the screen')
    const response = async ()=>{
        let check = await axios.post('https://hg-pre-interview-task-1000.herokuapp.com/api/check',{email:localStorage.getItem('email')});
        if(check.data ==='failed') window.location.assign('https://hg-pre-interview-cd43cd.netlify.app/login')
       console.log(check.data)
    }
    response()

     const fetchAll = async () =>{
      await axios.post('https://hg-pre-interview-task-1000.herokuapp.com/api/read',{email:localStorage.getItem('email')}).then((res)=>{
        setUserDetails(res.data)
       // console.log(res.data)
      }).catch((err)=>{
        console.log('An error has occured' , err)
      })

     }
     fetchAll()
    
},[])
      return(
        <>
            <div>
    <div className='row'>
               <div className='col-sm-12 col-md-3 col-lg-4'>

               </div>
    <div className='col-sm-12 col-md-6 col-lg-4' style = {{padding:'150px 50px 50px 50px'}}>
         <div style={{ width: "100%" }} className = 'py-3'>
              <div
                className=" d-flex flex-column opacity-mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                <div
                  className="bg-white px-5 py-3"
                  style={{
                    width: "400px",
                    alignSelf: "center",
                    boxShadow: "5px 5px 45px 5px lightgrey",
                    alignItems: "right",
                  }}
                >
                  {
                    userDetails.length ? userDetails.map((key)=>{
                      const blob = new Blob([Int8Array.from(key.image.data.data)], {type: key.image.contentType });
                      const image = window.URL.createObjectURL(blob);
                 
                        return(
                            <div key={(key._id)}>
                                 <center>
                            <div
                            style={{
                              height: "200px",
                              width: "170px",
                              borderRadius: "50%",
                            }}
                            className="py-3"
                          >
                          
                            <img
                            src={image}
                            alt = "profile Image"
                            style={{ height: "170px", width: "200px", borderRadius:"170px" }}
                          />
                        
                        </div>
                        <strong>Email:{key.email}</strong><br></br>
                        {/* <strong  onClick={()=>{LogOut()}}>LogOut</strong> */}
                        </center>
                            </div>
                        )
                    })
                    :
                    <> 
                    <div></div>
                    </>
                   
                  }
               </div>
        </div>
   </div>
          <center>© 2021 HG GROUP PRE-INTERVIEW PROJECT <br></br> All Rights Reserved.</center>
               </div>
               <div className='col-sm-12 col-md-3 col-lg-4'>

               </div>
               

           </div>
</div>      
        </>
      )
 }
 
 export default Dashboard