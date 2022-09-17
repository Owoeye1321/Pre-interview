import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"
import axios from 'axios'

 function Login(){
    const [error, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        password: "",
      });
      const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const submit = async (e)=>{
        e.preventDefault()
        const details = {
            email:data.email,
            password:data.password
        }
        const result = await axios.post('/api/login',{details})
        if(result.data === 'success'){
            localStorage.setItem('email',data.email)
            window.location.assign('http://localhost:3000/')

        }else{
            setError('invalid details')
            console.log(result.data)
        }
         
        
    }

      return(
        <div>
        <div className='row'>
                   <div className='col-sm-12 col-md-3 col-lg-4'>
   
                   </div>
                   <div className='col-sm-12 col-md-6 col-lg-4' style = {{padding:'150px 50px 50px 50px'}}>
                   <div style={{ width: "100%" }} className = 'py-3'>
              <div
                className="min-vh-70 d-flex flex-column opacity-mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                <div
                  className="min-vh-70 bg-white px-5 py-3"
                  style={{
                    width: "400px",
                    alignSelf: "center",
                    boxShadow: "5px 5px 45px 5px lightgrey",
                    alignItems: "right",
                  }}
                >
                               <h4 className="mb-3">Login</h4>
                               <form className="input_style_1" onSubmit={(e)=>{submit(e)}}>
                                   <div className="form-group">
                                       <label>Email</label>
                                       <input onChange={(e)=>{handle(e)}} type="email" id="email" className="form-control"/>
                                   </div>
                                   <div className="form-group">
                                       <label> Password</label>
                                       <input onChange={(e)=>{handle(e)}}  type="password" id="password" className="form-control"/>
                                   </div>
                                   <div  style={{ fontSize: '10px' ,marginBottom: '0px'}}>
                                       <center>
                                       <i style={{marginBottom:"-1px",color:'red'}}>{error}</i>
                                       </center>
                                   </div>
                                   <div className="clearfix mb-3">
                                       <div className="float-left" style = {{float:'left'}}>
                                       <i style={{fontSize:'13px'}}>No account? <a style = {{textDecoration:'none'}} href="/signup">Sign Up</a></i>
                                       </div>
                                       <div className="float-right" style ={{float:'right'}}>
                                           <a  style={{fontSize:'13px',textDecoration:'none'}}id="forgot" href="/forgetpassword">Forgot Password?</a>
                                       </div>
                                   </div>
                                   <input type= 'submit' value = "Login" className = 'form-control success mb-3'  />
                               </form>
                            </div>
                        </div>
                    </div>
                           <center>© 2021 HG GROUP PRE-INTERVIEW PROJECT <br></br> All Rights Reserved.</center>
                           </div>
   
           
                   <div className='col-sm-12 col-md-3 col-lg-4'>
   
                   </div>
                   
   
               </div>
   </div>
      )
 }
 
 export default Login