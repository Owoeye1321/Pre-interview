import { React, useState } from "react";
import axios from "axios";


function Admin() {

  const [addNewUser, setAddNewUser] = useState({
    email:'',
    password:''
  });
  const [userImage, setUserImage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(userImage)
    const addForm = new FormData()
    addForm.append('data', JSON.stringify(addNewUser))
    addForm.append('file',userImage)
    console.log(addForm)
     const checkingFormUpdates = await axios.post('https://hg-pre-interview-task-1000.herokuapp.com/api/signup',addForm)
    if(checkingFormUpdates.data === 'success'){ 
      localStorage.setItem('email',addNewUser.email)
      window.location.assign('https://hg-pre-interview-cd43cd.netlify.app/')
    }else{
      setError(checkingFormUpdates.data)
    }
  } 

    const handleChange = (e)=>{
      const addNewData = { ...addNewUser }
      addNewData[e.target.id]= e.target.value
      setAddNewUser(addNewData)
      //console.log(addNewUser)
    }
    const addImage = (e)=>{
      let name = e.target.files[0]
      setUserImage(name)
  //    console.log(hostelPicture)

    }
  return (
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
                  <h4 className="mb-3">Sign Up</h4>
               <form 
                  onSubmit={(e)=>{handleSubmit(e)}}
                  >
                    <div className="form-group py-2">
                      <input 
                      required
                        onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="email"
                        placeholder="Email"

                        id="email"
                      />
                    </div>
                    <div className="form-group py-2">
                      <input
                      required
                       onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="password"
                        placeholder=" Password"
                        id="password"
                      />
                    </div>

                    <div className="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div className="form-group ">
                      <input
                      required
                      onChange={(e)=>{
                        addImage(e)
                      }}
                        type="file"
                        id="file"
                        className="form-control"
                        name = "file"
                      />
                    </div>
                    <div  style={{ fontSize: '10px' ,marginBottom: '0px'}}>
                                       <center>
                                       <i style={{marginBottom:"-1px",color:'red'}}>{error}</i>
                                       </center>
                                   </div>
                    <div className="clearfix ">
	                                <div className="float-left" style = {{float:'left'}}>
                                    <i style={{fontSize:'13px'}}>Already a user ? <a style = {{textDecoration:'none'}} href="/login"> Sign In</a></i>
	                                </div>
	                                <div className="float-right" style ={{float:'right'}}>
	                                    <a  style={{fontSize:'13px',textDecoration:'none'}}id="forgot" href="/forgetpassword">Forgot Password?</a>
	                                </div>
	                            </div>
                    <div className="form-group py-4">
                      <input
                        type="submit"
                        value="submit"
                        className="form-control bg-primary"
                        style={{ color: "white" }}
                      />
                    </div>
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
  );
}

export default Admin;
