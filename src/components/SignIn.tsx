import { Link } from "react-router-dom"
import Login from "./login"
import "./index.css";

 
const SignuPage = () =>{
    return(
        <div>
            <div className="register ">

               <div className="col-1">
                
               </div>
        <div className="col-2">
       
        <Link to="/login" className="link1" >Login</Link>
        <Link to="/signIn" className="link4" >SignIn</Link>
        {/* <button onClick={Login}>Login</button> */}
       <form id="form" className="flex flex-col">
       <h3>Sign In</h3>
       <br></br>
       <input type="text" placeholder="FirstName"/>
        <br></br>
        <br></br>
        <input type="text" placeholder="LastName"/>
        <br></br>
        <br></br>
        <input type="Email" placeholder="Email"/>
        <br></br>
        <br></br>
        <input type="password" placeholder="Password"/>
        <br></br>
        <br></br>
        <input type="password" placeholder="Confirm password"/>
        <br></br>
       
        <p>I agree with the term & condition?</p>
        <br></br>
        
        <button className="btn">Sign In</button>
        
        
       </form>
        </div>

    </div >  
        </div>

    )
  

}
export default SignuPage