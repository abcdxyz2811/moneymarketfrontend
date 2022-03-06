import React,{useState} from 'react';
import "./Login.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom"
import toastr from "toastr"
import 'toastr/build/toastr.css';
function Login (props) {

    const [obj,setobj]=useState({email:"",password:""})
    const history=useHistory()

    const handaleChange=(e)=>{
          setobj({...obj,[e.target.name]:e.target.value})
    }

    const onLogin = async (e) => {
        e.preventDefault()
        const userlogin = await axios.post("http://localhost:3000/loginuser", obj).catch((err)=>{
 console.log(err.response.status)
 if(err.response.status===401){
    toast.error('password not match', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
 }
else{
    toast.error('invalid Users', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
        })

        if (userlogin.status === 200) {
        toastr.success('successfull login',{timeOut: 5000})
            
            console.log("successfull signup", userlogin)
            localStorage.setItem("token", userlogin.data.token)
            setobj({ username: "", email: "", password: "", cpassword: "" }); 
              
            console.log("props,",props)
            history.push("/livemarket");
           
        }
        else{
            // toastr.success('successfull login')
            toast.error('invalid Users', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    return (
       <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="body mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card border-0 shadow rounded-3 my-5">
                                <div class="card-body p-4 p-sm-5">
                                    <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                                    <form>
                                    <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={(e)=>handaleChange(e)} value={obj.email}/>
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={(e)=>handaleChange(e)} value={obj.password}/>
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={(e)=>{onLogin(e)}}>Sign in</button>
                                        </div>
                                        <hr class="my-4" />
                                            <div class="d-grid mb-2">
                                                <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                                    <i class="fab fa-google me-2"></i> Sign in with Google
                                                 </button>
                                            </div>
                                            <div class="d-grid">
                                                <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                                                    <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                                </button>
                                            </div>
                                  </form>
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
       </>
    );
}

export default Login;