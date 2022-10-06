import {useState} from "react";

function About(){
    const [state, setState] = useState(false);
    let text = "Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them."
    const openAbout = () =>{
        setState(true);
    }
    const closeAbout = () =>{
        setState(false);
    }
    return(
        <>
            {(state === false)
                ?<>
                    <button onClick={openAbout}>Open about</button>
                </>:
                <>
                    <button onClick={closeAbout}>Close about</button>
                    <p>{text}</p>
                </>
            }
        </>
    )
}
export default About