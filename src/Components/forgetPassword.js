import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import axios from 'axios'

function Forgetpassword() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [state, setState]= useState('red')

    const handle = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }

    const submitThisShit = async (e)=>{
        e.preventDefault()
        const result = await axios.post('/forgetpassword',{
            email:email
        })
        if(result.data === 'success'){
            setState('green')
            setError("Password has been sent to email")
            console.log(result)
        }else if(result.data === 'error'){
            setError('No email provided')
        }else if(result.data === 'failed'){
            setError('No password attached to this email')
        } 
    }
    return (

            <div className='row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4 my-5' style = {{padding:'70px 50px 50px 50px'}}>
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
	                        <form className="input_style_1" method="post" onSubmit={(e)=>{submitThisShit(e)}}>
	                            <div id="forgot_pw my-5">
	                                <h6 className="mb-3">Forgot Password</h6>
                                    <div className="form-group mb-3">
              <input
                onChange={(e) => handle(e)}
                type="email"
                placeholder="Email address"
                id="email"
                className="form-control"
              />
            </div>
            <div style={{ fontSize: '10px' ,marginBottom: '5'}}>
                                    <center>
                                    <i style={{marginBottom:"5px",color:state}}>{error}</i>
                                    </center>
                                </div>
	                                <p>You will receive an email containing your password.</p>
	                                <div className="text-center"><input type="submit" value="Reset Password" className="form-control "/></div>
	                            </div>
	                        </form>
                        </div>
                    </div>
                </div>
	            
                        </div>

        
                <div className='col-sm-12 col-md-4 col-lg-4'>

                </div>
                

            </div>
    )
}

export default Forgetpassword;
