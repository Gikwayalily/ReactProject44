import { Link } from "react-router-dom";

const Login = () => {
    return <div>
        <div className="register ">

<div className="col-1">
 
</div>
        <div className="col-2">
       
       
       <form id="form" className="flex flex-col">
       <h3>Login</h3>
       <br></br>
        <input type="text" placeholder="UserName"/>
        <br></br>
        <br></br>
        
        <input type="Email" placeholder="Email"/>
        <br></br>
        <br></br>
        <input type="password" placeholder="Password"/>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn">Login</button>
       
       </form>
        </div>

            <Link to="/signIn" className="link2" >SignIn</Link>
            <Link to="/login" className="link3" >Login</Link>
            <input type="text"  className="round"/>
    </div>

    </div>
}
export default Login