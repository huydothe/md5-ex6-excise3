import {useState} from "react";


function IsLogin() {
    const [state, setStates] = useState(false);


    const loginBtn = () => {
        setStates(true)

    }

    const logoutBtn = () => {
        setStates(false)
    }

    return (
        <>
            {(state === true) ?
                <>
                    <h1>welcome bros</h1>
                    <button onClick={logoutBtn}>Logout</button>
                </>
                :
                <>
                    <h1>Please login</h1>
                    <button onClick={loginBtn}>Login</button>
                </>
            }
        </>
    )
}

export default IsLogin