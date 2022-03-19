import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from "toastr"
import { GoogleLogin } from "react-google-login"
import 'toastr/build/toastr.css';

function Signup(props) {
    const [obj, setobj] = useState({ username: "", email: "", password: "", cpassword: "" })
    // localStorage.setItem("token","")
    const handaleChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

  const responseGoogle=async(googleData)=> {
        const result = await axios.post("http://localhost:3000/googlelogin",{ token: googleData.tokenObj }, { userObj: googleData.profileObj })

        console.log("result",result)
        console.log("googledata-->",googleData)
        navigator("/")

    }

    const onSignin = async (e) => {
        e.preventDefault()
        const userlogin = await axios.post("http://localhost:3000/signuser", obj).catch((err) => {
            console.log(err.response.status)
            if (err.response.status === 401) {
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
            else {
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
            toastr.success('successfull singnup', { timeOut: 5000 })
            console.log("successfull signup", userlogin)
            localStorage.setItem("token", userlogin.data.token)
            setobj({ username: "", email: "", password: "", cpassword: "" })
        }
        else {
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
            <div className="body mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card border-0 shadow rounded-3 my-5">
                                <div class="card-body p-4 p-sm-5">
                                    <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                                    <form >
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="abcd..." name="username" onChange={(e) => handaleChange(e)} value={obj.username} />
                                            <label for="floatingInput">User Name</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={(e) => handaleChange(e)} value={obj.email} />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={(e) => handaleChange(e)} value={obj.password} />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Repeat Password" name="cpassword" onChange={(e) => handaleChange(e)} value={obj.cpassword} />
                                            <label for="floatingPassword">Repeat Password</label>
                                        </div>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={(e) => onSignin(e)}>Sign in</button>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="d-grid mb-2">

                                            <GoogleLogin
                                                clientId="728916457886-1j3jf5e4rrsh0vktr6eudicca4tjm7pd.apps.googleusercontent.com"
                                                buttonText="Login with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />

                                            {/*                                             
                                            <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                                <i class="fab fa-google me-2"></i> Sign in with Google
                                                 </button> */}
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
        </>
    );
}

export default Signup;