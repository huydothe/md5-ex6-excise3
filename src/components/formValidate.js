import {useState} from "react";
import Home from "./home"

function FormValidate() {

    let userLogin = [{
        email: "huy@gmail.com",
        password: "123456"
    }];

    const [state, setState] = useState({

            email: '',
            password: '',
            isRememberMe: false,
        isValid: false,
        isLoggedIn: false,
        errMessage: ''
    })

    const handleChangeEmail = (e) => {
        let input = e.target.value;

        if (!input) {
            setState({
                ...state,
                isValid: true,
                errMessage: "Email khong dc trong",
                form: {
                    email: '',
                    isRememberMe: false
                }
            })
        } else {
            setState({
                ...state,
                isValid: false,
                errMessage: '',
                form: {
                    email: input,
                    isRememberMe: false
                }
            })
        }
    }

    const handleChangePassword = (e) => {
        let input = e.target.value;

        if (!input) {
            setState({
                ...state,
                isValid: true,
                errMessage: 'password khong de trong',
                form: {
                    password: "",
                    isRememberMe: false
                }
            })
        } else {
            setState({
                ...state,
                isValid: true,
                errMessage: '',
                form: {
                    password: input,
                    isRememberMe: false
                }
            })
        }
    }


    const checkValidForm = () => {
        userLogin.map((item, index)=>{
            if(state.email === item.email && state.password === item.password){
                setState({...state,isLoggedIn : true})
            }
        })
    }


    const handleLogout = () => {
        setState({...state,isLoggedIn: false})
    }

    const handleChange = e => {
        setState({...state, [e.target.name]:e.target.value});
    }

    return (
        <div>
            {state.isLoggedIn ? <Home onLogOut={()=>handleLogout()}/> :

                <div className="container d-flex align-items-center text-center">
                    <div className="form-signin">
                        <form>
                            <img className="mb-4"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                                 alt="" width="72" height="57"/>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <div className="form-floating">
                                <input className="form-control email" type="email" name="email"
                                       placeholder="name@example.com"
                                       onChange={(e)=>handleChange(e)}/>
                                <label>Email address</label>
                                {state.isValid && state.errMessage ? state.errMessage : ''}

                            </div>
                            <div className="form-floating">
                                <input className="form-control password" type="password" name="password"
                                       placeholder="Password"
                                       onChange={(e)=>handleChange(e)}/>
                                <label>Password</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={checkValidForm}>Sign
                                in
                            </button>
                            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default FormValidate